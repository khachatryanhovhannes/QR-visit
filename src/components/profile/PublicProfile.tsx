"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Share2,
  QrCode as QrCodeIcon,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send, // Telegram
  MessageCircle, // Wh
  Twitch,
  GitBranch, // GitLab
  PenSquare, // Medium
  Code2, // dev.to
  Braces, // Stack Overflow generic
  MessageSquare, // Quora
  Music, // Spotify / AppleMusic / TikTok
  Cloud, // Soundcloud
  Disc, // Bandcamp
  Palette, // Behance / Adobe
  Dribbble as DribbbleIcon,
  PenTool, // ArtStation
  Camera, // Flickr
  GraduationCap, // Coursera / Udemy / KhanAcademy / ResearchGate
  BookOpen, // Goodreads
  Newspaper, // Substack
  BadgeDollarSign, // Patreon
  Link as LinkIcon, // Linktree
  IdCard, // about.me / carrd
  Users, // VK
  Languages, // Yandex (generic)
  PhoneCall, // Skype
  Video, // Zoom
  Box, // Dropbox
  Folder, // Google Drive
  Film, // IMDb
  AtSign, // Threads / generic
  MapPinned, // TripAdvisor
} from "lucide-react";

// ---- Types ----
interface LinksMain {
  website?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

type PopularWebsites = Partial<
  Record<
    | "twitter"
    | "tiktok"
    | "youtube"
    | "pinterest"
    | "reddit"
    | "whatsapp"
    | "telegram"
    | "discord"
    | "twitch"
    | "snapchat"
    | "threads"
    | "github"
    | "gitlab"
    | "medium"
    | "devto"
    | "stackoverflow"
    | "quora"
    | "spotify"
    | "soundcloud"
    | "appleMusic"
    | "bandcamp"
    | "behance"
    | "dribbble"
    | "artstation"
    | "flickr"
    | "tripadvisor"
    | "researchgate"
    | "kaggle"
    | "coursera"
    | "udemy"
    | "khanacademy"
    | "goodreads"
    | "substack"
    | "patreon"
    | "linktree"
    | "aboutme"
    | "carrd"
    | "wechat"
    | "vkontakte"
    | "yandex"
    | "skype"
    | "zoom"
    | "dropbox"
    | "googleDrive"
    | "adobe"
    | "microsoft"
    | "imdb",
    string
  >
>;

// premiumSocials կարող է լինել array կամ object
type PremiumSocials = string[] | Record<string, string> | undefined;

export interface PublicUserProfile {
  username: string;
  fullName: string;
  avatarUrl?: string;
  bio?: string;
  qrCodeUrl?: string;
  template?: "classic" | "column" | "business";
  contact: { email?: string; phone?: string; address?: string };
  links: LinksMain;
  popularWebsites?: PopularWebsites;
  premiumSocials?: PremiumSocials;
  services?: string[];
}

// ---- Helpers ----
const isFilled = (v?: string | null) =>
  typeof v === "string" && v.trim().length > 0;

const prettyLabel = (k: string) =>
  k
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();

const normalizePremium = (premiumSocials: PremiumSocials) => {
  if (!premiumSocials) return [] as Array<{ label: string; url: string }>;
  if (Array.isArray(premiumSocials)) {
    return premiumSocials
      .filter(isFilled)
      .map((url) => ({ label: inferLabelFromUrl(url) ?? "Social", url }));
  }
  return Object.entries(premiumSocials)
    .filter(([, v]) => isFilled(v))
    .map(([label, url]) => ({ label, url }));
};

function inferLabelFromUrl(url: string): string | null {
  try {
    const host = new URL(url).hostname.replace(/^www\./, "");
    const base = host.split(".")[0];
    return prettyLabel(base);
  } catch {
    return null;
  }
}

// ---- Icon map for 50 platforms ----
const platformIcons: Record<string, LucideIcon> = {
  // Main
  website: Globe,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,

  // 50-list
  twitter: Twitter,
  tiktok: Music, // TikTok ≈ music/shorts
  youtube: Youtube,
  whatsapp: MessageCircle,
  telegram: Send,
  twitch: Twitch,
  threads: AtSign,
  github: Github,
  gitlab: GitBranch,
  medium: PenSquare,
  devto: Code2,
  stackoverflow: Braces,
  quora: MessageSquare,
  spotify: Music,
  soundcloud: Cloud,
  appleMusic: Music,
  bandcamp: Disc,
  behance: Palette,
  dribbble: DribbbleIcon,
  artstation: PenTool,
  flickr: Camera,
  tripadvisor: MapPinned,
  researchgate: GraduationCap,
  kaggle: GraduationCap,
  coursera: GraduationCap,
  udemy: GraduationCap,
  khanacademy: GraduationCap,
  goodreads: BookOpen,
  substack: Newspaper,
  patreon: BadgeDollarSign,
  linktree: LinkIcon,
  aboutme: IdCard,
  carrd: IdCard,
  wechat: MessageCircle,
  vkontakte: Users,
  yandex: Languages,
  skype: PhoneCall,
  zoom: Video,
  dropbox: Box,
  googleDrive: Folder,
  adobe: Palette,
  imdb: Film,
};

// fallback for Microsoft (no exact brand): use a composed boxes icon
function BoxesIconFallback(props: React.ComponentProps<LucideIcon>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      {...props}
    >
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
  );
}

// alias to valid component name
const BoxesIcon = BoxesIconFallback as unknown as LucideIcon;
platformIcons["microsoft"] = BoxesIcon;

// ---- Small tiles ----
function LinkTile({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-3 rounded-lg border bg-background hover:bg-muted transition-colors"
    >
      <Icon className="h-5 w-5 mr-3 text-accent" />
      <span className="font-medium text-foreground">{label}</span>
      <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
    </a>
  );
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold text-foreground mb-4">{children}</h2>
);

const InfoLine = ({
  icon: Icon,
  children,
  href,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
}) => (
  <div className="flex items-center text-foreground/80">
    <Icon className="h-5 w-5 mr-4 text-accent" />
    {href ? (
      <a href={href} className="hover:text-accent transition-colors">
        {children}
      </a>
    ) : (
      <span>{children}</span>
    )}
  </div>
);

// ---- Component ----
export function PublicProfile({ profile }: { profile: PublicUserProfile }) {
  const shareProfile = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.fullName} - Digital Business Card`,
          text: profile.bio || `Connect with ${profile.fullName}`,
          url,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  const downloadQRCode = () => {
    if (profile.qrCodeUrl) {
      const link = document.createElement("a");
      link.href = profile.qrCodeUrl;
      link.download = `${profile.username}-qr-code.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const saveContact = () => {
    const vCardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${profile.fullName}`,
      profile.contact?.email ? `EMAIL:${profile.contact.email}` : "",
      profile.contact?.phone ? `TEL:${profile.contact.phone}` : "",
      profile.contact?.address ? `ADR:;;${profile.contact.address};;;` : "",
      profile.links?.website ? `URL:${profile.links.website}` : "",
      profile.bio ? `NOTE:${profile.bio}` : "",
      "END:VCARD",
    ]
      .filter(Boolean)
      .join("\n");

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${profile.fullName.replace(/\s+/g, "_")}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  // Main links presence
  const hasAnyMainLink =
    isFilled(profile.links?.website) ||
    isFilled(profile.links?.linkedin) ||
    isFilled(profile.links?.instagram) ||
    isFilled(profile.links?.facebook);

  // Build the list of socials to show (50 platforms)
  const allSocials = useMemo(() => {
    const entries: Array<{
      key: string;
      label: string;
      url: string;
      icon: LucideIcon;
    }> = [];

    // popularWebsites
    if (profile.popularWebsites) {
      Object.entries(profile.popularWebsites).forEach(([k, v]) => {
        if (!isFilled(v)) return;
        const key = k as keyof PopularWebsites as string;
        const Icon = platformIcons[key] ?? LinkIcon;
        entries.push({
          key,
          label: prettyLabel(key),
          url: v as string,
          icon: Icon,
        });
      });
    }

    // premiumSocials (array or map)
    const prem = normalizePremium(profile.premiumSocials);
    prem.forEach(({ label, url }) => {
      const key = label.toLowerCase().replace(/\s+/g, "");
      const Icon = platformIcons[key] ?? LinkIcon;
      entries.push({ key, label: prettyLabel(label), url, icon: Icon });
    });

    // Deduplicate by url (some may repeat)
    const seen = new Set<string>();
    const unique = entries.filter((e) => {
      if (seen.has(e.url)) return false;
      seen.add(e.url);
      return true;
    });

    return unique;
  }, [profile.popularWebsites, profile.premiumSocials]);

  const commonContent = (
    <>
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border bg-muted">
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt={profile.fullName}
              width={128}
              height={128}
              unoptimized
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-4xl font-bold text-accent">
                {profile.fullName.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Name + Bio */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-3">
          {profile.fullName}
        </h1>
        {profile.bio && (
          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            {profile.bio}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <Button onClick={saveContact} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Save Contact
        </Button>
        <Button onClick={shareProfile} variant="outline">
          <Share2 className="h-4 w-4 mr-2" />
          Share Profile
        </Button>
        {profile.qrCodeUrl && (
          <Button onClick={downloadQRCode} variant="outline">
            <QrCodeIcon className="h-4 w-4 mr-2" />
            Download QR
          </Button>
        )}
      </div>

      {/* Contact */}
      {(profile.contact?.email ||
        profile.contact?.phone ||
        profile.contact?.address) && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <SectionTitle>Contact Information</SectionTitle>
            <div className="space-y-3">
              {isFilled(profile.contact?.email) && (
                <InfoLine icon={Mail} href={`mailto:${profile.contact!.email}`}>
                  {profile.contact!.email}
                </InfoLine>
              )}
              {isFilled(profile.contact?.phone) && (
                <InfoLine icon={Phone} href={`tel:${profile.contact!.phone}`}>
                  {profile.contact!.phone}
                </InfoLine>
              )}
              {isFilled(profile.contact?.address) && (
                <InfoLine icon={MapPin}>{profile.contact!.address}</InfoLine>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Links */}
      {hasAnyMainLink && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <SectionTitle>Connect Online</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {isFilled(profile.links?.website) && (
                <LinkTile
                  href={profile.links.website!}
                  icon={Globe}
                  label="Website"
                />
              )}
              {isFilled(profile.links?.linkedin) && (
                <LinkTile
                  href={profile.links.linkedin!}
                  icon={Linkedin}
                  label="LinkedIn"
                />
              )}
              {isFilled(profile.links?.instagram) && (
                <LinkTile
                  href={profile.links.instagram!}
                  icon={Instagram}
                  label="Instagram"
                />
              )}
              {isFilled(profile.links?.facebook) && (
                <LinkTile
                  href={profile.links.facebook!}
                  icon={Facebook}
                  label="Facebook"
                />
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Socials (50 list + premium) */}
      {allSocials.length > 0 && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <SectionTitle>All Socials</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allSocials.map(({ key, label, url, icon: Icon }) => (
                <a
                  key={`${key}-${url}`}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-lg border bg-background hover:bg-muted transition-colors"
                >
                  <Icon className="h-5 w-5 mr-3 text-accent" />
                  <span className="font-medium text-foreground">{label}</span>
                  <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Services */}
      {profile.services && profile.services.length > 0 && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <SectionTitle>Services</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {profile.services.map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg font-medium bg-accent/10 text-accent"
                >
                  {service}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* QR */}
      {profile.qrCodeUrl && (
        <Card>
          <CardContent className="p-6 text-center">
            <SectionTitle>Share This Profile</SectionTitle>
            <div className="inline-block p-4 rounded-xl shadow-inner border-2 border-border bg-background">
              <Image
                src={profile.qrCodeUrl}
                alt="QR Code"
                width={160}
                height={160}
                unoptimized
                className="w-40 h-40 mx-auto"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Scan to share this digital business card
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );

  // Layout variants
  const renderTemplate = () => {
    switch (profile.template) {
      case "column":
        return (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="text-center lg:sticky lg:top-8">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mx-auto mb-6 border bg-muted">
                  {profile.avatarUrl ? (
                    <Image
                      src={profile.avatarUrl}
                      alt={profile.fullName}
                      width={128}
                      height={128}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-accent">
                        {profile.fullName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-foreground mb-3">
                  {profile.fullName}
                </h1>
                {profile.bio && (
                  <p className="text-muted-foreground mb-6">{profile.bio}</p>
                )}
                {profile.qrCodeUrl && (
                  <div className="p-4 rounded-xl shadow-inner border-2 border-border bg-background mb-6">
                    <Image
                      src={profile.qrCodeUrl}
                      alt="QR Code"
                      width={128}
                      height={128}
                      unoptimized
                      className="w-32 h-32 mx-auto"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">{commonContent}</div>
          </div>
        );
      case "business":
        return (
          <div className="card-template business max-w-4xl mx-auto rounded-2xl">
            {commonContent}
          </div>
        );
      default:
        return <div className="max-w-2xl mx-auto">{commonContent}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        {renderTemplate()}
        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <Link href="/" className="text-accent hover:underline font-medium">
              QR Visit
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
