"use client";

import Link from "next/link";
import Image from "next/image";
import { UserProfile } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Github,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Download,
  Share2,
  QrCode as QrCodeIcon,
} from "lucide-react";

interface PublicProfileProps {
  profile: UserProfile;
}

export function PublicProfile({ profile }: PublicProfileProps) {
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
      profile.contact.email ? `EMAIL:${profile.contact.email}` : "",
      profile.contact.phone ? `TEL:${profile.contact.phone}` : "",
      profile.contact.address ? `ADR:;;${profile.contact.address};;;` : "",
      profile.links.website ? `URL:${profile.links.website}` : "",
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

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-xl font-semibold text-foreground mb-4">{children}</h2>
  );

  const InfoLine = ({
    icon: Icon,
    children,
    href,
  }: {
    icon: any;
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

  const LinkTile = ({
    href,
    icon: Icon,
    label,
  }: {
    href: string;
    icon: any;
    label: string;
  }) => (
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

      {/* Basic Info */}
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

      {/* Action Buttons */}
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

      {/* Contact Information */}
      {(profile.contact.email ||
        profile.contact.phone ||
        profile.contact.address) && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <SectionTitle>Contact Information</SectionTitle>
            <div className="space-y-3">
              {profile.contact.email && (
                <InfoLine icon={Mail} href={`mailto:${profile.contact.email}`}>
                  {profile.contact.email}
                </InfoLine>
              )}
              {profile.contact.phone && (
                <InfoLine icon={Phone} href={`tel:${profile.contact.phone}`}>
                  {profile.contact.phone}
                </InfoLine>
              )}
              {profile.contact.address && (
                <InfoLine icon={MapPin}>{profile.contact.address}</InfoLine>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Social Links */}
      {(profile.links.website ||
        profile.links.linkedin ||
        profile.links.github ||
        profile.links.telegram) && (
        <Card className="mb-6">
          <CardContent className="p-6">
            <SectionTitle>Connect Online</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.links.website && (
                <LinkTile
                  href={profile.links.website}
                  icon={Globe}
                  label="Website"
                />
              )}
              {profile.links.linkedin && (
                <LinkTile
                  href={profile.links.linkedin}
                  icon={Linkedin}
                  label="LinkedIn"
                />
              )}
              {profile.links.github && (
                <LinkTile
                  href={profile.links.github}
                  icon={Github}
                  label="GitHub"
                />
              )}
              {profile.links.telegram && (
                <LinkTile
                  href={`https://t.me/${profile.links.telegram.replace(
                    "@",
                    ""
                  )}`}
                  icon={MessageCircle}
                  label="Telegram"
                />
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Premium Social Links */}
      {profile.premiumSocials &&
        Object.keys(profile.premiumSocials).length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <SectionTitle>Social Media</SectionTitle>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(profile.premiumSocials).map(
                  ([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg border bg-background hover:bg-muted transition-colors"
                    >
                      <span className="font-medium capitalize text-foreground">
                        {platform}
                      </span>
                      <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
                    </a>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        )}

      {/* Services (Premium) */}
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

      {/* QR Code */}
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

  // Template-specific layouts
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
            <div className="lg:col-span-2 space-y-6">
              <div className="flex flex-wrap gap-3">
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

              {(profile.contact.email ||
                profile.contact.phone ||
                profile.contact.address) && (
                <Card>
                  <CardContent className="p-6">
                    <SectionTitle>Contact Information</SectionTitle>
                    <div className="space-y-3">
                      {profile.contact.email && (
                        <InfoLine
                          icon={Mail}
                          href={`mailto:${profile.contact.email}`}
                        >
                          {profile.contact.email}
                        </InfoLine>
                      )}
                      {profile.contact.phone && (
                        <InfoLine
                          icon={Phone}
                          href={`tel:${profile.contact.phone}`}
                        >
                          {profile.contact.phone}
                        </InfoLine>
                      )}
                      {profile.contact.address && (
                        <InfoLine icon={MapPin}>
                          {profile.contact.address}
                        </InfoLine>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {(profile.links.website ||
                profile.links.linkedin ||
                profile.links.github ||
                profile.links.telegram) && (
                <Card>
                  <CardContent className="p-6">
                    <SectionTitle>Connect Online</SectionTitle>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {profile.links.website && (
                        <LinkTile
                          href={profile.links.website}
                          icon={Globe}
                          label="Website"
                        />
                      )}
                      {profile.links.linkedin && (
                        <LinkTile
                          href={profile.links.linkedin}
                          icon={Linkedin}
                          label="LinkedIn"
                        />
                      )}
                      {profile.links.github && (
                        <LinkTile
                          href={profile.links.github}
                          icon={Github}
                          label="GitHub"
                        />
                      )}
                      {profile.links.telegram && (
                        <LinkTile
                          href={`https://t.me/${profile.links.telegram.replace(
                            "@",
                            ""
                          )}`}
                          icon={MessageCircle}
                          label="Telegram"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {profile.services && profile.services.length > 0 && (
                <Card>
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
            </div>
          </div>
        );

      case "business":
        // Օգտագործենք քո global CSS-ը: `.card-template.business` ունի ճիշտ gradient + dark support
        return (
          <div className="card-template business max-w-4xl mx-auto rounded-2xl">
            {commonContent}
          </div>
        );

      default: // classic
        return <div className="max-w-2xl mx-auto">{commonContent}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        {renderTemplate()}

        {/* Footer branding */}
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
