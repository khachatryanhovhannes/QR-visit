import { z } from "zod";

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .regex(
      /^[a-z0-9_]+$/,
      "Username can only contain lowercase letters, numbers, and underscores"
    ),
  fullName: z.string().min(2).max(50),
  bio: z.string().max(200).optional().or(z.literal("")),
  template: z.enum(["classic", "column", "business"]),
  contact: z.object({
    email: z
      .string()
      .email("Invalid email address")
      .optional()
      .or(z.literal("")),
    phone: z.string().optional().or(z.literal("")),
    address: z.string().optional().or(z.literal("")),
  }),
  links: z.object({
    github: z.string().url("Invalid URL").optional().or(z.literal("")),
    linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
    telegram: z.string().optional().or(z.literal("")),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),
  }),
});

export type ProfileFormData = z.input<typeof profileSchema>;

export type ParsedProfile = z.output<typeof profileSchema>;
