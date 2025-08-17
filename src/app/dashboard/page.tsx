"use client";

import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

import { ProfileForm } from "@/components/dashboard/ProfileForm";
import { ProfilePreview } from "@/components/dashboard/ProfilePreview";
import { getUserProfile } from "@/lib/firestore";
import { UserProfile } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Eye,
  QrCode,
  Share2,
  Copy,
  ExternalLink,
  Loader2,
} from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"profile" | "preview">("profile");
  const [origin, setOrigin] = useState<string>("");

  // set origin once on mount (քեշ ենք անում, որ JSX-ում window չկանչենք)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  useEffect(() => {
    const loadProfileData = async () => {
      if (!user) return;
      try {
        const userProfile = await getUserProfile(user.uid);
        setProfile(userProfile);
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setLoading(false);
      }
    };
    if (user) loadProfileData();
  }, [user]);

  const handleProfileUpdate = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
  };

  const profileUrl = useMemo(() => {
    if (!profile || !origin) return "";
    return `${origin}/u/${profile.username}`;
  }, [profile, origin]);

  const copyProfileUrl = () => {
    if (!profileUrl) return;
    navigator.clipboard.writeText(profileUrl).catch(() => {});
    // optionally՝ toast
  };

  const shareProfile = () => {
    if (!profileUrl) return;
    if (navigator.share) {
      navigator
        .share({
          title: `${profile?.fullName} - Digital Business Card`,
          text: profile?.bio || "",
          url: profileUrl,
        })
        .catch(() => {});
    } else {
      copyProfileUrl();
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-accent" />
            <p className="mt-2 text-muted-foreground">
              Loading your dashboard...
            </p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
              Manage your digital business card and track your networking
            </p>
          </div>

          {profile && (
            <div className="mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">
                        Your Digital Card
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {profileUrl ? (
                          <>
                            Share your profile:&nbsp;
                            <span className="font-medium text-foreground">
                              {profileUrl}
                            </span>
                          </>
                        ) : (
                          "Share your profile link"
                        )}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={copyProfileUrl}
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Link
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={shareProfile}
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      {profile && (
                        <a
                          href={`/u/${profile.username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Public
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          )}

          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as "profile" | "preview")}
          >
            <TabsList className="grid w-full grid-cols-2 bg-muted">
              <TabsTrigger
                value="profile"
                className="flex items-center data-[state=active]:text-foreground"
              >
                <User className="h-4 w-4 mr-2" />
                Edit Profile
              </TabsTrigger>
              <TabsTrigger
                value="preview"
                className="flex items-center data-[state=active]:text-foreground"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <ProfileForm profile={profile} onUpdateAction={handleProfileUpdate} />
            </TabsContent>

            <TabsContent value="preview" className="mt-6">
              {profile ? (
                <ProfilePreview profile={profile} />
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <QrCode className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Create Your Profile First
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Fill out your profile information to see the preview of
                      your digital business card.
                    </p>
                    <Button onClick={() => setActiveTab("profile")}>
                      Create Profile
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  );
}
