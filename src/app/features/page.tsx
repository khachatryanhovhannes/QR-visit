import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  QrCode, 
  Smartphone, 
  Palette, 
  Link as LinkIcon, 
  Shield, 
  Zap,
  Users,
  BarChart3,
  Globe,
  Download,
  Star,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features - QR Visit',
  description: 'Discover all the powerful features that make QR Visit the best platform for creating digital business cards and sharing your professional information.',
};

export default function FeaturesPage() {
  const features = [
    {
      icon: QrCode,
      title: 'QR Code Generation',
      description: 'Instantly generate high-quality QR codes that link to your digital business card. Download in multiple formats for printing.',
      free: true,
      premium: true,
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Your digital cards look perfect on any device. Responsive design ensures optimal viewing on phones, tablets, and desktops.',
      free: true,
      premium: true,
    },
    {
      icon: Palette,
      title: 'Professional Templates',
      description: 'Choose from beautifully designed templates. Free users get 3 templates, Premium users unlock all premium designs.',
      free: true,
      premium: true,
    },
    {
      icon: LinkIcon,
      title: 'Social Media Integration',
      description: 'Connect all your social platforms. Free users get 4 links, Premium users can add up to 50 different platforms.',
      free: true,
      premium: true,
    },
    {
      icon: Globe,
      title: 'Custom Public URLs',
      description: 'Get your own branded URL (qrvisit.com/u/yourname) that&apos;s easy to remember and share.',
      free: true,
      premium: true,
    },
    {
      icon: Download,
      title: 'QR Code Downloads',
      description: 'Download your QR codes in PNG, SVG, or PDF formats. Perfect for business cards, flyers, or digital use.',
      free: true,
      premium: true,
    },
    {
      icon: Users,
      title: 'Service Listings',
      description: 'Showcase the services you offer directly on your digital card. Perfect for freelancers and service providers.',
      free: false,
      premium: true,
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track who visits your digital card and when. Understand your networking effectiveness with detailed analytics.',
      free: false,
      premium: true,
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your data is secure and private. Control what information you share and with whom.',
      free: true,
      premium: true,
    },
    {
      icon: Zap,
      title: 'Instant Updates',
      description: 'Update your information anytime and it&apos;s instantly reflected on your QR code links. No need to reprint cards.',
      free: true,
      premium: true,
    },
    {
      icon: Star,
      title: 'Priority Support',
      description: 'Get fast, helpful support when you need it. Premium users receive priority assistance.',
      free: false,
      premium: true,
    },
    {
      icon: Palette,
      title: 'Advanced Customization',
      description: 'Customize colors, fonts, and layouts to match your personal brand. Make your card truly unique.',
      free: false,
      premium: true,
    },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary-text sm:text-5xl">
            Everything You Need to Network Digitally
          </h1>
          <p className="mt-4 text-xl text-secondary-text max-w-3xl mx-auto">
            QR Visit provides all the tools you need to create, customize, and share your digital business card. 
            Start free and upgrade for advanced features.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="relative h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex gap-1">
                    {feature.free && (
                      <span className="bg-success bg-opacity-20 text-success text-xs px-2 py-1 rounded-full">
                        Free
                      </span>
                    )}
                    {feature.premium && !feature.free && (
                      <span className="bg-accent bg-opacity-20 text-accent text-xs px-2 py-1 rounded-full">
                        Premium
                      </span>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary-text mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brandBlue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p className="text-gray-600">
                Sign up and fill in your contact information, social links, and services. 
                Choose from our professional templates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brandBlue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Generate QR Code</h3>
              <p className="text-gray-600">
                Instantly generate your unique QR code that links to your digital business card. 
                Download and use it anywhere.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brandBlue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Share & Network</h3>
              <p className="text-gray-600">
                Share your QR code or URL with anyone. They can save your contact info instantly 
                and connect with you on all platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-card-background border border-border rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-primary-text mb-8">
            Why Choose QR Visit?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <QrCode className="h-6 w-6 text-brandBlue-600 mr-2" />
                Eco-Friendly & Cost-Effective
              </h3>
              <p className="text-gray-600 mb-6">
                Stop wasting money on paper business cards that get lost or thrown away. 
                Digital cards are always up-to-date and environmentally friendly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Zap className="h-6 w-6 text-brandBlue-600 mr-2" />
                Always Current
              </h3>
              <p className="text-gray-600 mb-6">
                Update your information anytime and it&apos;s instantly available to everyone who has your QR code. 
                No more outdated contact details.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="h-6 w-6 text-brandBlue-600 mr-2" />
                Professional Networking
              </h3>
              <p className="text-gray-600 mb-6">
                Make a lasting impression with professional, customizable digital business cards 
                that showcase your brand and personality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart3 className="h-6 w-6 text-brandBlue-600 mr-2" />
                Track Your Impact
              </h3>
              <p className="text-gray-600 mb-6">
                See how your networking efforts are performing with detailed analytics 
                on who&apos;s viewing your digital card and when.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-card-background rounded-2xl p-8 text-center border border-border">
          <h2 className="text-3xl font-bold mb-4 text-primary-text">
            Ready to Go Digital?
          </h2>
          <p className="text-xl text-secondary-text mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who&apos;ve already made the switch to digital business cards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="cursor-pointer">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/templates">
              <Button size="lg" variant="outline" className="cursor-pointer">
                View Templates
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
