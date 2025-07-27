'use client';

import { UserProfile } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin,
  MessageCircle,
  ExternalLink,
  Download
} from 'lucide-react';

interface ProfilePreviewProps {
  profile: UserProfile;
}

export function ProfilePreview({ profile }: ProfilePreviewProps) {
  const downloadQRCode = () => {
    if (profile.qrCodeUrl) {
      const link = document.createElement('a');
      link.href = profile.qrCodeUrl;
      link.download = `${profile.username}-qr-code.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const renderTemplate = () => {
    const commonContent = (
      <>
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            {profile.avatarUrl ? (
              <img 
                src={profile.avatarUrl} 
                alt={profile.fullName} 
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-brandBlue-100">
                <span className="text-2xl font-bold text-brandBlue-600">
                  {profile.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Basic Info */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {profile.fullName}
          </h1>
          {profile.bio && (
            <p className="text-gray-600 mb-4">{profile.bio}</p>
          )}
        </div>

        {/* Contact Information */}
        {(profile.contact.email || profile.contact.phone || profile.contact.address) && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact</h3>
            <div className="space-y-2">
              {profile.contact.email && (
                <div className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-3 text-gray-400" />
                  <a href={`mailto:${profile.contact.email}`} className="hover:text-brandBlue-600">
                    {profile.contact.email}
                  </a>
                </div>
              )}
              {profile.contact.phone && (
                <div className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-3 text-gray-400" />
                  <a href={`tel:${profile.contact.phone}`} className="hover:text-brandBlue-600">
                    {profile.contact.phone}
                  </a>
                </div>
              )}
              {profile.contact.address && (
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                  <span>{profile.contact.address}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Social Links */}
        {(profile.links.website || profile.links.linkedin || profile.links.github || profile.links.telegram) && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Links</h3>
            <div className="space-y-2">
              {profile.links.website && (
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-3 text-gray-400" />
                  <a 
                    href={profile.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brandBlue-600 hover:text-brandBlue-700 flex items-center"
                  >
                    Website
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              )}
              {profile.links.linkedin && (
                <div className="flex items-center">
                  <Linkedin className="h-4 w-4 mr-3 text-gray-400" />
                  <a 
                    href={profile.links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brandBlue-600 hover:text-brandBlue-700 flex items-center"
                  >
                    LinkedIn
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              )}
              {profile.links.github && (
                <div className="flex items-center">
                  <Github className="h-4 w-4 mr-3 text-gray-400" />
                  <a 
                    href={profile.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brandBlue-600 hover:text-brandBlue-700 flex items-center"
                  >
                    GitHub
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              )}
              {profile.links.telegram && (
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-3 text-gray-400" />
                  <a 
                    href={`https://t.me/${profile.links.telegram.replace('@', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brandBlue-600 hover:text-brandBlue-700 flex items-center"
                  >
                    Telegram
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Services (Premium) */}
        {profile.services && profile.services.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Services</h3>
            <div className="flex flex-wrap gap-2">
              {profile.services.map((service, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-brandBlue-100 text-brandBlue-800 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* QR Code */}
        {profile.qrCodeUrl && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">QR Code</h3>
            <div className="inline-block p-4 bg-white rounded-lg shadow-inner">
              <img 
                src={profile.qrCodeUrl} 
                alt="QR Code" 
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

    // Template-specific layouts
    switch (profile.template) {
      case 'column':
        return (
          <div className="card-template column">
            <div className="md:col-span-1">
              <div className="text-center">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mx-auto mb-4">
                  {profile.avatarUrl ? (
                    <img 
                      src={profile.avatarUrl} 
                      alt={profile.fullName} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-brandBlue-100">
                      <span className="text-2xl font-bold text-brandBlue-600">
                        {profile.fullName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h1 className="text-xl font-bold text-gray-900 mb-2">
                  {profile.fullName}
                </h1>
                {profile.bio && (
                  <p className="text-sm text-gray-600">{profile.bio}</p>
                )}
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              {/* Contact and Links in columns */}
              {commonContent}
            </div>
          </div>
        );
      
      case 'business':
        return (
          <div className="card-template business">
            {commonContent}
          </div>
        );
      
      default: // classic
        return (
          <div className="card-template classic">
            {commonContent}
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview</h2>
        <p className="text-gray-600">
          This is how your digital business card will look to visitors
        </p>
      </div>
      
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-8">
            {renderTemplate()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
