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
    email: z.string().email("Invalid email address").optional().or(z.literal("")),
    phone: z.string().optional().or(z.literal("")),
    address: z.string().optional().or(z.literal("")),
  }),

  // 🔹 Main links
  links: z.object({
    instagram: z.string().url("Invalid URL").optional().or(z.literal("")),
    facebook: z.string().url("Invalid URL").optional().or(z.literal("")),
    linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
    website: z.string().url("Invalid URL").optional().or(z.literal("")),
  }),

  // 🔹 50 top platforms for online business cards
  popularWebsites: z.object({
    twitter: z.string().url("Invalid URL").optional().or(z.literal("")),
    tiktok: z.string().url("Invalid URL").optional().or(z.literal("")),
    youtube: z.string().url("Invalid URL").optional().or(z.literal("")),
    pinterest: z.string().url("Invalid URL").optional().or(z.literal("")),
    reddit: z.string().url("Invalid URL").optional().or(z.literal("")),
    whatsapp: z.string().url("Invalid URL").optional().or(z.literal("")),
    telegram: z.string().url("Invalid URL").optional().or(z.literal("")),
    discord: z.string().url("Invalid URL").optional().or(z.literal("")),
    twitch: z.string().url("Invalid URL").optional().or(z.literal("")),
    snapchat: z.string().url("Invalid URL").optional().or(z.literal("")),
    threads: z.string().url("Invalid URL").optional().or(z.literal("")),
    github: z.string().url("Invalid URL").optional().or(z.literal("")),
    gitlab: z.string().url("Invalid URL").optional().or(z.literal("")),
    medium: z.string().url("Invalid URL").optional().or(z.literal("")),
    devto: z.string().url("Invalid URL").optional().or(z.literal("")),
    stackoverflow: z.string().url("Invalid URL").optional().or(z.literal("")),
    quora: z.string().url("Invalid URL").optional().or(z.literal("")),
    spotify: z.string().url("Invalid URL").optional().or(z.literal("")),
    soundcloud: z.string().url("Invalid URL").optional().or(z.literal("")),
    appleMusic: z.string().url("Invalid URL").optional().or(z.literal("")),
    bandcamp: z.string().url("Invalid URL").optional().or(z.literal("")),
    behance: z.string().url("Invalid URL").optional().or(z.literal("")),
    dribbble: z.string().url("Invalid URL").optional().or(z.literal("")),
    artstation: z.string().url("Invalid URL").optional().or(z.literal("")),
    flickr: z.string().url("Invalid URL").optional().or(z.literal("")),
    tripadvisor: z.string().url("Invalid URL").optional().or(z.literal("")),
    researchgate: z.string().url("Invalid URL").optional().or(z.literal("")),
    kaggle: z.string().url("Invalid URL").optional().or(z.literal("")),
    coursera: z.string().url("Invalid URL").optional().or(z.literal("")),
    udemy: z.string().url("Invalid URL").optional().or(z.literal("")),
    khanacademy: z.string().url("Invalid URL").optional().or(z.literal("")),
    goodreads: z.string().url("Invalid URL").optional().or(z.literal("")),
    substack: z.string().url("Invalid URL").optional().or(z.literal("")),
    patreon: z.string().url("Invalid URL").optional().or(z.literal("")),
    linktree: z.string().url("Invalid URL").optional().or(z.literal("")),
    aboutme: z.string().url("Invalid URL").optional().or(z.literal("")),
    carrd: z.string().url("Invalid URL").optional().or(z.literal("")),
    wechat: z.string().url("Invalid URL").optional().or(z.literal("")),
    vkontakte: z.string().url("Invalid URL").optional().or(z.literal("")),
    yandex: z.string().url("Invalid URL").optional().or(z.literal("")),
    skype: z.string().url("Invalid URL").optional().or(z.literal("")),
    zoom: z.string().url("Invalid URL").optional().or(z.literal("")),
    dropbox: z.string().url("Invalid URL").optional().or(z.literal("")),
    googleDrive: z.string().url("Invalid URL").optional().or(z.literal("")),
    adobe: z.string().url("Invalid URL").optional().or(z.literal("")),
    microsoft: z.string().url("Invalid URL").optional().or(z.literal("")),
    imdb: z.string().url("Invalid URL").optional().or(z.literal("")),
  }),
});

export type ProfileFormData = z.input<typeof profileSchema>;
export type ParsedProfile = z.output<typeof profileSchema>;
