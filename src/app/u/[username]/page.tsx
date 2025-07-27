import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getUserProfileByUsername } from '@/lib/firestore';
import { PublicProfile } from '@/components/profile/PublicProfile';

interface PageProps {
  params: {
    username: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const profile = await getUserProfileByUsername(params.username);
  
  if (!profile) {
    return {
      title: 'Profile Not Found - QR Visit',
    };
  }

  return {
    title: `${profile.fullName} - Digital Business Card`,
    description: profile.bio || `Connect with ${profile.fullName} through their digital business card`,
    openGraph: {
      title: `${profile.fullName} - Digital Business Card`,
      description: profile.bio || `Connect with ${profile.fullName}`,
      images: profile.avatarUrl ? [profile.avatarUrl] : [],
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${profile.fullName} - Digital Business Card`,
      description: profile.bio || `Connect with ${profile.fullName}`,
      images: profile.avatarUrl ? [profile.avatarUrl] : [],
    },
  };
}

export default async function UserProfilePage({ params }: PageProps) {
  const profile = await getUserProfileByUsername(params.username);
  
  if (!profile) {
    notFound();
  }

  return <PublicProfile profile={profile} />;
}
