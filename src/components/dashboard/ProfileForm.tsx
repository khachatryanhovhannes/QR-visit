"use client";

import { useState, useEffect, useMemo } from "react";
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
  Lock,
  ChevronDown,
  ChevronUp,
  Plus,
} from "lucide-react";
import { TemplatePreviewCard } from "@/components/dashboard/TemplatePreviewCard";
import { ServiceItemEditor } from "@/components/dashboard/ServiceItemEditor";

interface ProfileFormProps {
  profile: UserProfile | null;
  onUpdateAction: (profile: UserProfile) => void;
}

const norm = (v: string) => v.trim().toLowerCase();

/** Keep these synced with profileSchema.popularWebsites keys */
const POPULAR_KEYS = [
  "twitter",
  "tiktok",
  "youtube",
  "pinterest",
  "reddit",
  "whatsapp",
  "telegram",
  "discord",
  "twitch",
  "snapchat",
  "threads",
  "github",
  "gitlab",
  "medium",
  "devto",
  "stackoverflow",
  "quora",
  "spotify",
  "soundcloud",
  "appleMusic",
  "bandcamp",
  "behance",
  "dribbble",
  "artstation",
  "flickr",
  "tripadvisor",
  "researchgate",
  "kaggle",
  "coursera",
  "udemy",
  "khanacademy",
  "goodreads",
  "substack",
  "patreon",
  "linktree",
  "aboutme",
  "carrd",
  "wechat",
  "vkontakte",
  "yandex",
  "skype",
  "zoom",
  "dropbox",
  "googleDrive",
  "adobe",
  "microsoft",
  "imdb",
] as const;

type PopularKey = (typeof POPULAR_KEYS)[number];

const makeEmptyPopular = (): Record<PopularKey, string> =>
  POPULAR_KEYS.reduce((acc, k) => {
    acc[k] = "";
    return acc;
  }, {} as Record<PopularKey, string>);

export function ProfileForm({ profile, onUpdateAction }: ProfileFormProps) {
  // Template Picker Dialog state
  const [showTemplateDialog, setShowTemplateDialog] = useState(false);
  // Services state
  const [services, setServices] = useState<{ title: string; description?: string }[]>(Array.isArray(profile?.services) ? profile.services : []);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(
    null
  );
  const [checkingUsername, setCheckingUsername] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  const [originalUsername, setOriginalUsername] = useState<string>("");
  const [showAllPopular, setShowAllPopular] = useState(false);

  const defaultPopular = useMemo(() => makeEmptyPopular(), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      username: "",
      fullName: "",
      bio: "",
      template: "classic",
      contact: { email: "", phone: "", address: "" },
      links: { instagram: "", facebook: "", linkedin: "", website: "" },
      popularWebsites: defaultPopular,
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
        links: {
          instagram: profile.links?.instagram ?? "",
          facebook: profile.links?.facebook ?? "",
          linkedin: profile.links?.linkedin ?? "",
          website: profile.links?.website ?? "",
        },
        popularWebsites: {
          ...defaultPopular,
          ...(profile?.popularWebsites ?? {}),
        },
      });
      setAvatarPreview(profile.avatarUrl);
      setOriginalUsername(norm(profile.username));
      setUsernameAvailable(true);
      setServices(Array.isArray(profile.services) ? profile.services : []);
    }
  }, [profile, reset, defaultPopular]);

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
    if (!user) return;
    setLoading(true);
    try {
      const cleanedData = removeEmptyFields(data);
      const formData: UserFormData = {
        ...cleanedData,
        username: cleanedData.username.trim(),
        bio: cleanedData.bio ?? "",
        services,
        ...(avatarFile && { avatar: avatarFile }),
      };
      if (profile) {
        await updateUserProfile(user.uid, formData);
        const { getUserProfile } = await import("@/lib/firestore");
        const updatedProfile = await getUserProfile(user.uid);
        if (updatedProfile) onUpdateAction(updatedProfile);
      } else {
        await createUserProfile(user.uid, formData);
        const { getUserProfile } = await import("@/lib/firestore");
        const newProfile = await getUserProfile(user.uid);
        if (newProfile) onUpdateAction(newProfile);
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

      {/* Template Picker Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Palette className="h-5 w-5 mr-2" />
            <span className="text-foreground">Template</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Choose how your business card looks visually
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" onClick={() => setShowTemplateDialog(true)}>
              Pick Template
            </Button>
            <span className="text-sm text-muted-foreground">
              Selected: {TEMPLATES.find(t => t.id === watch("template"))?.name || "None"}
            </span>
          </div>
          {/* Dialog/modal for template picker */}
          {showTemplateDialog && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-background rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4">Choose a Template</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {TEMPLATES.map((template) => (
                    <TemplatePreviewCard
                      key={template.id}
                      template={template}
                      selected={watch("template") === template.id}
                      onClick={() => {
                        setValue("template", template.id);
                        setShowTemplateDialog(false);
                      }}
                      tabIndex={0}
                      ariaLabel={`Select ${template.name}`}
                    />
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button type="button" variant="secondary" onClick={() => setShowTemplateDialog(false)}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      {/* Services Section (Pro) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Plus className="h-5 w-5 mr-2" />
            <span className="text-foreground">Services</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Showcase your professional services (Pro feature, unlocked during beta)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {services.map((service, idx) => (
              <ServiceItemEditor
                key={idx}
                value={service}
                index={idx}
                onChange={val => {
                  setServices(prev => prev.map((s, i) => i === idx ? val : s));
                }}
                onRemove={() => {
                  setServices(prev => prev.filter((_, i) => i !== idx));
                }}
                error={!service.title ? "Title required" : undefined}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setServices(prev => [...prev, { title: "" }])}
              className="mt-2"
            >
              <Plus className="mr-2 h-4 w-4" /> Add Service
            </Button>
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

      {/* Social Links (Main) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <LinkIcon className="h-5 w-5 mr-2" />
            <span className="text-foreground">Social Links</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Your primary social media and website links
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Website */}
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

            {/* LinkedIn */}
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

            {/* Instagram */}
            <div>
              <label
                htmlFor="links.instagram"
                className="block text-sm font-medium text-foreground"
              >
                Instagram
              </label>
              <Input
                {...register("links.instagram")}
                type="text"
                placeholder="https://instagram.com/yourhandle"
                className={errors.links?.instagram ? "border-red-500" : ""}
              />
              {errors.links?.instagram && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.links.instagram.message}
                </p>
              )}
            </div>

            {/* Facebook */}
            <div>
              <label
                htmlFor="links.facebook"
                className="block text-sm font-medium text-foreground"
              >
                Facebook
              </label>
              <Input
                {...register("links.facebook")}
                type="text"
                placeholder="https://facebook.com/yourprofile"
                className={errors.links?.facebook ? "border-red-500" : ""}
              />
              {errors.links?.facebook && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.links.facebook.message}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Popular Websites (Pro-only, disabled) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="h-5 w-5 mr-2" />
            <span className="text-foreground">Popular Websites</span>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Available for <span className="font-medium">Pro</span> users only.
            These fields are disabled for your plan.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* small helper note */}
          <div className="rounded-md border border-dashed p-3 text-sm text-muted-foreground">
            <span className="font-semibold text-accent">Pro is currently free during beta.</span> All platforms are unlocked for every user.
            {/* TODO: Reinstate billing here */}
          </div>

          {/* Grid of disabled inputs with See more */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(showAllPopular ? POPULAR_KEYS : POPULAR_KEYS.slice(0, 8)).map(
              (k) => (
                <div key={k}>
                  <label
                    htmlFor={`popularWebsites.${k}`}
                    className="block text-sm font-medium text-foreground capitalize"
                  >
                    {formatKeyLabel(k)}
                  </label>
                  <Input
                    {...register(`popularWebsites.${k}` as const)}
                    type="text"
                    placeholder="Add your social link"
                    // All features unlocked during beta
                  />
                </div>
              )
            )}
          </div>

          <div className="flex justify-start">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setShowAllPopular((s) => !s)}
            >
              {showAllPopular ? (
                <>
                  See less <ChevronUp className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  See more <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
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
    const cleaned: { [key: string]: unknown } = {};
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

function formatKeyLabel(k: string) {
  // nice labels for inputs (e.g., googleDrive -> Google Drive)
  return k
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/_/g, " ");
}
