import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUserProfileByUsername } from "@/lib/firestore";
import { PublicProfile } from "@/components/profile/PublicProfile";

interface PageProps {
  params: {
    username: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { username } = params;
  const profile = await getUserProfileByUsername(username);

  if (!profile) {
    return {
      title: "Profile Not Found - QR Visit",
      description: "This QR Visit profile does not exist.",
      alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/u/${username}` },
      openGraph: {
        title: "Profile Not Found - QR Visit",
        description: "This QR Visit profile does not exist.",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/u/${username}`,
      },
      twitter: {
        card: "summary",
        title: "Profile Not Found - QR Visit",
        description: "This QR Visit profile does not exist.",
      },
    };
  }

  return {
    title: `${profile.fullName} - Digital Business Card`,
    description:
      profile.bio ||
      `Connect with ${profile.fullName} through their digital business card`,
    alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/u/${profile.username}` },
    openGraph: {
      title: `${profile.fullName} - Digital Business Card`,
      description: profile.bio || `Connect with ${profile.fullName}`,
      images: profile.avatarUrl ? [profile.avatarUrl] : [],
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/u/${profile.username}`,
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${profile.fullName} - Digital Business Card`,
      description: profile.bio || `Connect with ${profile.fullName}`,
      images: profile.avatarUrl ? [profile.avatarUrl] : [],
    },
  };
}

export default async function UserProfilePage({ params }: PageProps) {
  const { username } = params;
  const profile = await getUserProfileByUsername(username);

  if (!profile) notFound();

  // Convert Firestore Timestamp → ISO string or number
  const plainProfile = {
    ...profile,
    createdAt: profile.createdAt
      ? profile.createdAt.toDate().toISOString()
      : null,
  };

  return <PublicProfile profile={plainProfile} />;
}
