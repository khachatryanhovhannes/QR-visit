"use client";

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
} from "lucide-react";

interface ProfilePreviewProps {
  profile: UserProfile;
}

export function ProfilePreview({ profile }: ProfilePreviewProps) {
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

  const commonContent = (
    <>
      {/* Avatar */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border bg-muted">
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt={profile.fullName}
              width={96}
              height={96}
              unoptimized
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">
                {profile.fullName.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Basic Info */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {profile.fullName}
        </h1>
        {profile.bio && (
          <p className="text-muted-foreground mb-4">{profile.bio}</p>
        )}
      </div>

      {/* Contact */}
      {(profile.contact.email ||
        profile.contact.phone ||
        profile.contact.address) && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Contact
          </h3>
          <div className="space-y-2">
            {profile.contact.email && (
              <div className="flex items-center text-foreground/80">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {profile.contact.email}
                </a>
              </div>
            )}
            {profile.contact.phone && (
              <div className="flex items-center text-foreground/80">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <a
                  href={`tel:${profile.contact.phone}`}
                  className="hover:text-accent transition-colors"
                >
                  {profile.contact.phone}
                </a>
              </div>
            )}
            {profile.contact.address && (
              <div className="flex items-center text-foreground/80">
                <MapPin className="h-4 w-4 mr-3 text-accent" />
                <span>{profile.contact.address}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Links */}
      {(profile.links.website ||
        profile.links.linkedin ||
        profile.links.github ||
        profile.links.telegram) && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">Links</h3>
          <div className="space-y-2">
            {profile.links.website && (
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-3 text-accent" />
                <a
                  href={profile.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center"
                >
                  Website
                  <ExternalLink className="h-3 w-3 ml-1 text-muted-foreground" />
                </a>
              </div>
            )}
            {profile.links.linkedin && (
              <div className="flex items-center">
                <Linkedin className="h-4 w-4 mr-3 text-accent" />
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center"
                >
                  LinkedIn
                  <ExternalLink className="h-3 w-3 ml-1 text-muted-foreground" />
                </a>
              </div>
            )}
            {profile.links.github && (
              <div className="flex items-center">
                <Github className="h-4 w-4 mr-3 text-accent" />
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center"
                >
                  GitHub
                  <ExternalLink className="h-3 w-3 ml-1 text-muted-foreground" />
                </a>
              </div>
            )}
            {profile.links.telegram && (
              <div className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-3 text-accent" />
                <a
                  href={`https://t.me/${profile.links.telegram.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center"
                >
                  Telegram
                  <ExternalLink className="h-3 w-3 ml-1 text-muted-foreground" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Services */}
      {profile.services && profile.services.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Services
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.services.map((service, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm bg-accent/10 text-accent"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* QR */}
      {profile.qrCodeUrl && (
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            QR Code
          </h3>
          <div className="inline-block p-4 rounded-lg shadow-inner border border-border bg-background">
            <Image
              src={profile.qrCodeUrl}
              alt="QR Code"
              width={128}
              height={128}
              unoptimized
              className="w-32 h-32 mx-auto"
            />
          </div>
          <div className="mt-3">
            <Button variant="outline" size="sm" onClick={downloadQRCode}>
              <Download className="h-4 w-4 mr-2" />
              Download QR Code
            </Button>
          </div>
        </div>
      )}
    </>
  );

  const renderTemplate = () => {
    switch (profile.template) {
      case "column":
        return (
          <div className="card-template column">
            <div className="md:col-span-1">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border bg-muted">
                  {profile.avatarUrl ? (
                    <Image
                      src={profile.avatarUrl}
                      alt={profile.fullName}
                      width={96}
                      height={96}
                      unoptimized
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent">
                        {profile.fullName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h1 className="text-xl font-bold text-foreground mb-2">
                  {profile.fullName}
                </h1>
                {profile.bio && (
                  <p className="text-sm text-muted-foreground">{profile.bio}</p>
                )}
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">{commonContent}</div>
          </div>
        );

      case "business":
        return <div className="card-template business">{commonContent}</div>;

      default:
        return <div className="card-template classic">{commonContent}</div>;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Preview</h2>
        <p className="text-muted-foreground">
          This is how your digital business card will look to visitors
        </p>
      </div>

      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-background p-8">{renderTemplate()}</div>
        </CardContent>
      </Card>
    </div>
  );
}
