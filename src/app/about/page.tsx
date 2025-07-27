import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Heart, 
  Users, 
  Lightbulb,
  ArrowRight,
  Leaf,
  Globe,
  Zap
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - QR Visit',
  description: 'Learn about QR Visit\'s mission to revolutionize networking with eco-friendly digital business cards that are always up-to-date.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We believe in reducing paper waste and creating an eco-friendly future for professional networking.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly improving our platform with cutting-edge technology to make networking seamless and efficient.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a global community of professionals who value modern, effective networking solutions.',
    },
    {
      icon: Heart,
      title: 'Simplicity',
      description: 'Making complex technology simple and accessible for everyone, regardless of technical expertise.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Digital Cards Created' },
    { number: '50+', label: 'Countries Reached' },
    { number: '100,000+', label: 'QR Codes Scanned' },
    { number: '99.9%', label: 'Uptime Reliability' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Revolutionizing Professional Networking
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            QR Visit was born from the simple idea that business cards should be as dynamic 
            and connected as the digital world we live in. We&apos;re building the future of networking.
          </p>
        </div>

        {/* Story Section */}
        <Card className="p-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                Traditional business cards have remained largely unchanged for decades, despite living in an 
                increasingly digital world. We saw professionals struggling with outdated contact information, 
                lost cards, and the environmental impact of constant reprinting.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                That&apos;s when we realized there had to be a better way. What if your business card could be 
                instantly updated? What if it could connect people to all your social platforms at once? 
                What if networking could be more sustainable and efficient?
              </p>
              <p className="text-lg leading-relaxed">
                QR Visit is our answer to these questions. We&apos;ve created a platform that makes professional 
                networking more dynamic, sustainable, and effective. Every QR code tells a story, connects people, 
                and builds relationships that matter.
              </p>
            </div>
          </div>
        </Card>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To revolutionize professional networking by providing innovative, sustainable, 
                and user-friendly digital business card solutions that empower individuals and 
                businesses to connect more effectively in our digital world.
              </p>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A world where every professional interaction is enhanced by smart, sustainable 
                technology. Where networking is seamless, information is always current, 
                and meaningful connections are just a scan away.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <Card className="p-8 mb-16 bg-primary">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary-foreground">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2 text-primary-foreground">{stat.number}</div>
                <div className="text-primary-foreground/90 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Why Digital */}
        <Card className="p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Go Digital?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Environmental Impact</h3>
              <p className="text-muted-foreground">
                Every digital card saves approximately 1,000 paper cards over its lifetime, 
                reducing waste and protecting our environment.
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Always Updated</h3>
              <p className="text-muted-foreground">
                Change your phone number or job? Update once and everyone who has your card 
                gets the latest information instantly.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Global Accessibility</h3>
              <p className="text-muted-foreground">
                Share your information with anyone, anywhere in the world. No language 
                barriers, no geographic limitations.
              </p>
            </div>
          </div>
        </Card>

        {/* Team Preview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Built by Networking Enthusiasts</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our team consists of designers, developers, and business professionals who understand 
            the challenges of modern networking. We&apos;re passionate about creating solutions that 
            make professional connections more meaningful and efficient.
          </p>
          <Card className="p-8">
            <p className="text-lg text-foreground italic">
              &quot;We believe that great relationships are the foundation of success. Our mission is to make 
              building those relationships easier, more sustainable, and more effective for everyone.&quot;
            </p>
            <p className="text-primary font-semibold mt-4">- The QR Visit Team</p>
          </Card>
        </div>

        {/* CTA */}
        <Card className="p-8 text-center bg-primary">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Join the Digital Revolution</h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Be part of the movement towards smarter, more sustainable professional networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer">
                Learn More
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
