import { z } from 'zod';

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .regex(/^[a-z0-9_]+$/, 'Username can only contain lowercase letters, numbers, and underscores'),
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be at most 50 characters'),
  bio: z
    .string()
    .max(200, 'Bio must be at most 200 characters')
    .optional(),
  template: z.enum(['classic', 'column', 'business']),
  contact: z.object({
    email: z.string().email('Invalid email address').optional().or(z.literal('')),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
  links: z.object({
    github: z.string().url('Invalid URL').optional().or(z.literal('')),
    linkedin: z.string().url('Invalid URL').optional().or(z.literal('')),
    telegram: z.string().optional(),
    website: z.string().url('Invalid URL').optional().or(z.literal('')),
  }),
  premiumSocials: z.record(z.string(), z.string()).optional(),
  services: z.array(z.string()).optional(),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
