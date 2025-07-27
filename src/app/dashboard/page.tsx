'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';


import { ProfileForm } from '@/components/dashboard/ProfileForm';
import { ProfilePreview } from '@/components/dashboard/ProfilePreview';
import { getUserProfile } from '@/lib/firestore';
import { UserProfile } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Eye, 
  QrCode, 
  Share2, 
  Copy,
  ExternalLink,
  Loader2
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const loadProfileData = async () => {
      if (!user) return;
      
      try {
        const userProfile = await getUserProfile(user.uid);
        setProfile(userProfile);
      } catch (error) {
        console.error('Error loading profile:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadProfileData();
    }
  }, [user]);

  const handleProfileUpdate = (updatedProfile: UserProfile) => {
    setProfile(updatedProfile);
  };

  const copyProfileUrl = () => {
    if (profile) {
      const url = `${window.location.origin}/u/${profile.username}`;
      navigator.clipboard.writeText(url);
      // You could add a toast notification here
    }
  };

  const shareProfile = () => {
    if (profile) {
      const url = `${window.location.origin}/u/${profile.username}`;
      if (navigator.share) {
        navigator.share({
          title: `${profile.fullName} - Digital Business Card`,
          text: profile.bio,
          url: url,
        });
      } else {
        copyProfileUrl();
      }
    }
  };

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-accent" />
            <p className="mt-2 text-secondary-text">Loading your dashboard...</p>
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
            <h1 className="text-3xl font-bold text-primary-text">Dashboard</h1>
            <p className="mt-2 text-secondary-text">
              Manage your digital business card and track your networking
            </p>
          </div>

          {profile && (
            <div className="mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary-text dark:text-slate-100">Your Digital Card</CardTitle>
                      <CardDescription className="text-secondary-text dark:text-slate-400">
                        Share your profile: {window.location.origin}/u/{profile.username}
                      </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={copyProfileUrl}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Link
                      </Button>
                      <Button variant="outline" size="sm" onClick={shareProfile}>
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <a href={`/u/${profile.username}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Public
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          )}

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="profile" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Edit Profile
              </TabsTrigger>
              <TabsTrigger value="preview" className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-6">
              <ProfileForm 
                profile={profile} 
                onUpdate={handleProfileUpdate}
              />
            </TabsContent>
            
            <TabsContent value="preview" className="mt-6">
              {profile ? (
                <ProfilePreview profile={profile} />
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <QrCode className="h-16 w-16 mx-auto text-gray-400 dark:text-slate-500 mb-4" />
                    <h3 className="text-lg font-semibold text-primary-text dark:text-slate-100 mb-2">
                      Create Your Profile First
                    </h3>
                    <p className="text-secondary-text dark:text-slate-400 mb-4">
                      Fill out your profile information to see the preview of your digital business card.
                    </p>
                    <Button onClick={() => setActiveTab('profile')}>
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
