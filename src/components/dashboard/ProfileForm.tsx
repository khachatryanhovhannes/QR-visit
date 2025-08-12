"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/contexts/AuthContext";
import {
  createUserProfile,
  updateUserProfile,
  checkUsernameAvailability,
} from "@/lib/firestore";
import { profileSchema, ProfileFormData } from "@/lib/validations";
import { UserProfile, TEMPLATES, UserFormData } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Save,
  Loader2,
  Upload,
  CheckCircle,
  AlertCircle,
  User,
  Contact,
  Link as LinkIcon,
  Palette,
} from "lucide-react";

interface ProfileFormProps {
  profile: UserProfile | null;
  onUpdate: (profile: UserProfile) => void;
}

const norm = (v: string) => v.trim().toLowerCase();

export function ProfileForm({ profile, onUpdate }: ProfileFormProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
    null
  );
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [originalUsername, setOriginalUsername] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "",
      fullName: "",
      bio: "",
      template: "classic",
      contact: { email: "", phone: "", address: "" },
      links: { github: "", linkedin: "", telegram: "", website: "" },
    },
  });

  const username = watch("username");

  useEffect(() => {
    if (profile) {
      reset({
        username: profile.username ?? "",
        fullName: profile.fullName ?? "",
        bio: profile.bio ?? "",
        template: profile.template ?? "classic",
        contact: profile.contact ?? { email: "", phone: "", address: "" },
        links: profile.links ?? {
          github: "",
          linkedin: "",
          telegram: "",
          website: "",
        },
      });
      setAvatarPreview(profile.avatarUrl);
      setOriginalUsername(norm(profile.username));
      setUsernameAvailable(true);
    }
  }, [profile, reset]);

  useEffect(() => {
    if (!username) return;
    const current = norm(username);

    if (profile && current === originalUsername) {
      setUsernameAvailable(true);
      return;
    }
    if (current.length < 3) {
      setUsernameAvailable(null);
      return;
    }

    setCheckingUsername(true);
    const t = setTimeout(async () => {
      try {
        const available = await checkUsernameAvailability(current, user?.uid);
        setUsernameAvailable(available);
      } catch (e) {
        console.error("Error checking username:", e);
        setUsernameAvailable(null);
      } finally {
        setCheckingUsername(false);
      }
    }, 300);

    return () => clearTimeout(t);
  }, [username, originalUsername, user?.uid, profile]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = (ev) => setAvatarPreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    console.log("_________________________________");
    if (!user) return;
    setLoading(true);
    try {
      const cleanedData = removeEmptyFields(data);
      const formData: UserFormData = {
        ...cleanedData,
        username: cleanedData.username.trim(),
        ...(avatarFile && { avatar: avatarFile }),
      };

      if (profile) {
        await updateUserProfile(user.uid, formData);
        const { getUserProfile } = await import("@/lib/firestore");
        const updatedProfile = await getUserProfile(user.uid);
        if (updatedProfile) onUpdate(updatedProfile);
      } else {
        await createUserProfile(user.uid, formData);
        const { getUserProfile } = await import("@/lib/firestore");
        const newProfile = await getUserProfile(user.uid);
        if (newProfile) onUpdate(newProfile);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const isUsernameChanged = profile
    ? norm(username || "") !== originalUsername
    : true;

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit, (err) => {
        console.warn("❌ RHF/Zod validation errors:", err);
      })}
      className="space-y-8"
    >
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span className="text-foreground">Basic Information</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Your name, username, and profile picture
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Upload */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Profile Picture
            </label>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border bg-muted">
                {avatarPreview ? (
                  <Image
                    src={avatarPreview}
                    alt="Avatar"
                    width={80}
                    height={80}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                  id="avatar-upload"
                />
                <label htmlFor="avatar-upload">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      document.getElementById("avatar-upload")?.click()
                    }
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Photo
                  </Button>
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-foreground"
              >
                Username
              </label>
              <div className="mt-1 relative">
                <Input
                  {...register("username")}
                  placeholder="johndoe"
                  className={errors.username ? "border-red-500" : ""}
                />
                {!checkingUsername &&
                  username &&
                  username.length >= 3 &&
                  isUsernameChanged && (
                    <div className="absolute right-3 top-3">
                      {usernameAvailable ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <AlertCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  )}
                {checkingUsername && (
                  <div className="absolute right-3 top-3">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                )}
              </div>
              {errors.username && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
              {username &&
                username.length >= 3 &&
                !checkingUsername &&
                isUsernameChanged && (
                  <p
                    className={`mt-1 text-sm ${
                      usernameAvailable ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {usernameAvailable
                      ? "Username is available"
                      : "Username is already taken"}
                  </p>
                )}
            </div>

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-foreground"
              >
                Full Name
              </label>
              <div className="mt-1">
                <Input
                  {...register("fullName")}
                  placeholder="John Doe"
                  className={errors.fullName ? "border-red-500" : ""}
                />
              </div>
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.fullName.message}
                </p>
              )}
            </div>
          </div>

          {/* Bio */}
          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-foreground"
            >
              Bio
            </label>
            <div className="mt-1">
              <Textarea
                {...register("bio")}
                placeholder="Tell people about yourself..."
                rows={3}
                className={errors.bio ? "border-red-500" : ""}
              />
            </div>
            {errors.bio && (
              <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Template Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Palette className="h-5 w-5 mr-2" />
            <span className="text-foreground">Template</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Choose how your business card looks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TEMPLATES.map((template) => (
              <label key={template.id} className="cursor-pointer">
                <input
                  type="radio"
                  value={template.id}
                  {...register("template")}
                  className="sr-only"
                />
                <div className="border-2 border-border rounded-lg p-4 hover:border-accent transition-colors">
                  <h3 className="font-medium text-foreground mb-1">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {template.description}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Contact className="h-5 w-5 mr-2" />
            <span className="text-foreground">Contact Information</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            How people can reach you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="contact.email"
                className="block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <Input
                {...register("contact.email")}
                type="email"
                placeholder="john@example.com"
                className={errors.contact?.email ? "border-red-500" : ""}
              />
              {errors.contact?.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contact.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="contact.phone"
                className="block text-sm font-medium text-foreground"
              >
                Phone
              </label>
              <Input
                {...register("contact.phone")}
                type="tel"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact.address"
              className="block text-sm font-medium text-foreground"
            >
              Address
            </label>
            <Input
              {...register("contact.address")}
              placeholder="123 Main St, City, Country"
            />
          </div>
        </CardContent>
      </Card>

      {/* Social Links */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <LinkIcon className="h-5 w-5 mr-2" />
            <span className="text-foreground">Social Links</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Your social media and website links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="links.website"
                className="block text-sm font-medium text-foreground"
              >
                Website
              </label>
              <Input
                {...register("links.website")}
                type="text"
                placeholder="https://johndoe.com"
                className={errors.links?.website ? "border-red-500" : ""}
              />
              {errors.links?.website && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.links.website.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="links.linkedin"
                className="block text-sm font-medium text-foreground"
              >
                LinkedIn
              </label>
              <Input
                {...register("links.linkedin")}
                type="text"
                placeholder="https://linkedin.com/in/johndoe"
                className={errors.links?.linkedin ? "border-red-500" : ""}
              />
              {errors.links?.linkedin && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.links.linkedin.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="links.github"
                className="block text-sm font-medium text-foreground"
              >
                GitHub
              </label>
              <Input
                {...register("links.github")}
                type="text"
                placeholder="https://github.com/johndoe"
                className={errors.links?.github ? "border-red-500" : ""}
              />
              {errors.links?.github && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.links.github.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="links.telegram"
                className="block text-sm font-medium text-foreground"
              >
                Telegram
              </label>
              <Input {...register("links.telegram")} placeholder="@johndoe" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          onClick={() => console.log("🟡 submit button clicked")}
          disabled={
            loading ||
            (isUsernameChanged && username
              ? usernameAvailable === false
              : false)
          }
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {profile ? "Updating..." : "Creating..."}
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              {profile ? "Update Profile" : "Create Profile"}
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function removeEmptyFields<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj
      .map((item) => removeEmptyFields(item))
      .filter(
        (item) => item !== "" && item !== null && item !== undefined
      ) as T;
  } else if (typeof obj === "object" && obj !== null) {
    const cleaned: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
      const cleanedValue = removeEmptyFields(value);
      if (
        cleanedValue !== "" &&
        cleanedValue !== null &&
        cleanedValue !== undefined &&
        !(
          typeof cleanedValue === "object" &&
          Object.keys(cleanedValue).length === 0
        )
      ) {
        cleaned[key] = cleanedValue;
      }
    }
    return cleaned as T;
  }
  return obj;
}
