import { Timestamp } from 'firebase/firestore';
import { User } from 'firebase/auth';

export type TemplateType =
  | 'classic'
  | 'column'
  | 'business'
  | 'modern'
  | 'minimal'
  | 'elegant'
  | 'creative'
  | 'portfolio'
  | 'personal'
  | 'agency';

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
  instagram?: string;
  facebook?: string;
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
  services?: { title: string; description?: string }[]; // Up to 4 listed services (Premium only)
  popularWebsites?: Record<string, string>;
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
  services?: { title: string; description?: string }[];
  popularWebsites?: Record<string, string>;
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
  {
    id: 'modern',
    name: 'Modern',
    description: 'Trendy layout with bold colors and large headings',
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple, clean, and distraction-free design',
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Sophisticated style with refined typography',
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Playful layout for designers and artists',
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    description: 'Showcase your work and projects visually',
  },
  {
    id: 'personal',
    name: 'Personal',
    description: 'Friendly layout for personal branding',
  },
  {
    id: 'agency',
    name: 'Agency',
    description: 'Team-focused design for agencies and groups',
  },
];

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}
