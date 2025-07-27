'use client';

import Link from 'next/link';
import Image from 'next/image';
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
  Download,
  Share2,
  QrCode as QrCodeIcon
} from 'lucide-react';

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
          url: url,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(url);
      // You could show a toast here
    }
  };

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

  const saveContact = () => {
    // Create vCard data
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${profile.fullName}`,
      profile.contact.email ? `EMAIL:${profile.contact.email}` : '',
      profile.contact.phone ? `TEL:${profile.contact.phone}` : '',
      profile.contact.address ? `ADR:;;${profile.contact.address};;;` : '',
      profile.links.website ? `URL:${profile.links.website}` : '',
      profile.bio ? `NOTE:${profile.bio}` : '',
      'END:VCARD'
    ].filter(Boolean).join('\n');

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.fullName.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const renderTemplate = () => {
    const commonContent = (
      <>
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg">
            {profile.avatarUrl ? (
              <Image 
                src={profile.avatarUrl} 
                alt={profile.fullName} 
                width={128}
                height={128}
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-brandBlue-100">
                <span className="text-4xl font-bold text-brandBlue-600">
                  {profile.fullName.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Basic Info */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            {profile.fullName}
          </h1>
          {profile.bio && (
            <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
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
        {(profile.contact.email || profile.contact.phone || profile.contact.address) && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                {profile.contact.email && (
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 mr-4 text-brandBlue-600" />
                    <a 
                      href={`mailto:${profile.contact.email}`} 
                      className="hover:text-brandBlue-600 transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                )}
                {profile.contact.phone && (
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 mr-4 text-brandBlue-600" />
                    <a 
                      href={`tel:${profile.contact.phone}`} 
                      className="hover:text-brandBlue-600 transition-colors"
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                )}
                {profile.contact.address && (
                  <div className="flex items-center text-gray-700">
                    <MapPin className="h-5 w-5 mr-4 text-brandBlue-600" />
                    <span>{profile.contact.address}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Social Links */}
        {(profile.links.website || profile.links.linkedin || profile.links.github || profile.links.telegram) && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Connect Online</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.links.website && (
                  <a 
                    href={profile.links.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Globe className="h-5 w-5 mr-3 text-brandBlue-600" />
                    <span className="font-medium">Website</span>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </a>
                )}
                {profile.links.linkedin && (
                  <a 
                    href={profile.links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-3 text-brandBlue-600" />
                    <span className="font-medium">LinkedIn</span>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </a>
                )}
                {profile.links.github && (
                  <a 
                    href={profile.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-3 text-brandBlue-600" />
                    <span className="font-medium">GitHub</span>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </a>
                )}
                {profile.links.telegram && (
                  <a 
                    href={`https://t.me/${profile.links.telegram.replace('@', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 mr-3 text-brandBlue-600" />
                    <span className="font-medium">Telegram</span>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Premium Social Links */}
        {profile.premiumSocials && Object.keys(profile.premiumSocials).length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(profile.premiumSocials).map(([platform, url]) => (
                  <a 
                    key={platform}
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium capitalize">{platform}</span>
                    <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Services (Premium) */}
        {profile.services && profile.services.length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
              <div className="flex flex-wrap gap-2">
                {profile.services.map((service, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-brandBlue-100 text-brandBlue-800 rounded-lg font-medium"
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
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Share This Profile</h2>
              <div className="inline-block p-4 bg-white rounded-xl shadow-inner border-2 border-gray-100">
                <Image 
                  src={profile.qrCodeUrl} 
                  alt="QR Code" 
                  width={160}
                  height={160}
                  className="w-40 h-40 mx-auto"
                />
              </div>
              <p className="mt-3 text-sm text-gray-600">
                Scan to share this digital business card
              </p>
            </CardContent>
          </Card>
        )}
      </>
    );

    // Template-specific layouts
    switch (profile.template) {
      case 'column':
        return (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="text-center lg:sticky lg:top-8">
                {/* Avatar */}
                <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden shadow-lg mx-auto mb-6">
                  {profile.avatarUrl ? (
                    <Image 
                      src={profile.avatarUrl} 
                      alt={profile.fullName} 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-brandBlue-100">
                      <span className="text-4xl font-bold text-brandBlue-600">
                        {profile.fullName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-3">
                  {profile.fullName}
                </h1>
                {profile.bio && (
                  <p className="text-gray-600 mb-6">{profile.bio}</p>
                )}
                
                {/* QR Code in sidebar for column layout */}
                {profile.qrCodeUrl && (
                  <div className="bg-white p-4 rounded-xl shadow-inner border-2 border-gray-100 mb-6">
                    <Image 
                      src={profile.qrCodeUrl} 
                      alt="QR Code" 
                      width={128}
                      height={128}
                      className="w-32 h-32 mx-auto"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              {/* Action Buttons */}
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
              
              {/* Contact and other info */}
              {(profile.contact.email || profile.contact.phone || profile.contact.address) && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h2>
                    <div className="space-y-3">
                      {profile.contact.email && (
                        <div className="flex items-center text-gray-700">
                          <Mail className="h-5 w-5 mr-4 text-brandBlue-600" />
                          <a 
                            href={`mailto:${profile.contact.email}`} 
                            className="hover:text-brandBlue-600 transition-colors"
                          >
                            {profile.contact.email}
                          </a>
                        </div>
                      )}
                      {profile.contact.phone && (
                        <div className="flex items-center text-gray-700">
                          <Phone className="h-5 w-5 mr-4 text-brandBlue-600" />
                          <a 
                            href={`tel:${profile.contact.phone}`} 
                            className="hover:text-brandBlue-600 transition-colors"
                          >
                            {profile.contact.phone}
                          </a>
                        </div>
                      )}
                      {profile.contact.address && (
                        <div className="flex items-center text-gray-700">
                          <MapPin className="h-5 w-5 mr-4 text-brandBlue-600" />
                          <span>{profile.contact.address}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Rest of the content */}
              {(profile.links.website || profile.links.linkedin || profile.links.github || profile.links.telegram) && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Connect Online</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {profile.links.website && (
                        <a 
                          href={profile.links.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Globe className="h-5 w-5 mr-3 text-brandBlue-600" />
                          <span className="font-medium">Website</span>
                          <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                        </a>
                      )}
                      {profile.links.linkedin && (
                        <a 
                          href={profile.links.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Linkedin className="h-5 w-5 mr-3 text-brandBlue-600" />
                          <span className="font-medium">LinkedIn</span>
                          <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                        </a>
                      )}
                      {profile.links.github && (
                        <a 
                          href={profile.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <Github className="h-5 w-5 mr-3 text-brandBlue-600" />
                          <span className="font-medium">GitHub</span>
                          <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                        </a>
                      )}
                      {profile.links.telegram && (
                        <a 
                          href={`https://t.me/${profile.links.telegram.replace('@', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5 mr-3 text-brandBlue-600" />
                          <span className="font-medium">Telegram</span>
                          <ExternalLink className="h-4 w-4 ml-auto text-gray-400" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Services */}
              {profile.services && profile.services.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Services</h2>
                    <div className="flex flex-wrap gap-2">
                      {profile.services.map((service, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-brandBlue-100 text-brandBlue-800 rounded-lg font-medium"
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
      
      case 'business':
        return (
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-brandBlue-50 to-brandBlue-100 rounded-2xl p-8">
            {commonContent}
          </div>
        );
      
      default: // classic
        return (
          <div className="max-w-2xl mx-auto">
            {commonContent}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="px-4 sm:px-6 lg:px-8">
        {renderTemplate()}
        
        {/* Footer branding */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Powered by{' '}
            <Link 
              href="/" 
              className="text-brandBlue-600 hover:text-brandBlue-700 font-medium"
            >
              QR Visit
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
