import { Timestamp } from 'firebase/firestore';

export type TemplateType = 'classic' | 'column' | 'business';

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  telegram?: string;
  website?: string;
}

export interface PremiumSocials {
  [platform: string]: string; // Up to 50 top social platforms
}

export interface UserProfile {
  uid: string;
  username: string;
  fullName: string;
  bio: string;
  avatarUrl: string;
  qrCodeUrl: string;
  template: TemplateType;
  contact: ContactInfo;
  links: SocialLinks;
  premiumSocials?: PremiumSocials;
  services?: string[]; // Up to 4 listed services (Premium only)
  isPremium: boolean;
  createdAt: Timestamp;
}

export interface UserFormData {
  username: string;
  fullName: string;
  bio: string;
  avatar?: File;
  template: TemplateType;
  contact: ContactInfo;
  links: SocialLinks;
  premiumSocials?: PremiumSocials;
  services?: string[];
}

// Social platform definitions for premium features
export const PREMIUM_SOCIAL_PLATFORMS = [
  'instagram',
  'tiktok',
  'discord',
  'twitter',
  'facebook',
  'youtube',
  'snapchat',
  'pinterest',
  'behance',
  'dribbble',
  'spotify',
  'soundcloud',
  'twitch',
  'medium',
  'dev',
  'stackoverflow',
  'reddit',
  'whatsapp',
  'viber',
  'skype',
  'zoom',
  'calendly',
] as const;

export type PremiumSocialPlatform = typeof PREMIUM_SOCIAL_PLATFORMS[number];

// Template definitions
export const TEMPLATES: { id: TemplateType; name: string; description: string }[] = [
  {
    id: 'classic',
    name: 'Classic',
    description: 'Clean and professional layout with centered content',
  },
  {
    id: 'column',
    name: 'Column',
    description: 'Modern two-column layout with profile on the left',
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Corporate style with emphasis on professional information',
  },
];

export interface AuthContextType {
  user: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}
