import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  QrCode, 
  Smartphone, 
  Share2, 
  Users, 
  Zap, 
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  Star
} from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-4 pt-20 pb-32 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Your Digital
              <span className="text-accent block">Business Card</span>
              Made Simple
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Create, customize, and share your professional profile with a QR code. 
              Connect instantly, impress professionally, and never run out of business cards again.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer">
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Demo Card Preview */}
          <div className="mt-16 max-w-sm mx-auto">
            <Card className="shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-accent bg-opacity-10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">John Doe</h3>
                <p className="text-muted-foreground mb-4">Senior Developer at TechCorp</p>
                <div className="flex justify-center space-x-4 text-muted-foreground">
                  <Globe className="h-5 w-5" />
                  <Share2 className="h-5 w-5" />
                  <QrCode className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Everything you need for digital networking
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Professional, secure, and incredibly easy to use
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <QrCode className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Instant QR Sharing</CardTitle>
                <CardDescription>
                  Generate a unique QR code for your digital card. Share instantly with a simple scan.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Smartphone className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Mobile Optimized</CardTitle>
                <CardDescription>
                  Perfect viewing experience on all devices. Your card looks great everywhere.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Create your digital business card in under 2 minutes. No technical skills required.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your data is encrypted and secure. Full control over what information you share.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Share2 className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Easy Sharing</CardTitle>
                <CardDescription>
                  Share via QR code, link, email, or social media. Your choice, your way.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Professional Templates</CardTitle>
                <CardDescription>
                  Choose from beautiful, professionally designed templates that suit your style.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Start free, upgrade when you need more features
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="relative">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Free</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">$0</span>
                  <span className="text-lg text-muted-foreground ml-2">forever</span>
                </div>
                <CardDescription className="text-lg mt-2">
                  Perfect for individuals getting started with digital networking
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Basic contact information (email, phone, address)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">3 professional templates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">QR code generation and download</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      Up to 4 social links (Website, LinkedIn, GitHub, Telegram)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Public profile page</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Mobile-responsive design</span>
                  </li>
                </ul>
                <Link href="/register" className="block">
                  <Button className="w-full" size="lg">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="relative border-primary/20 shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center shadow-lg">
                  <Star className="h-4 w-4 mr-1" />
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Premium</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">$2.99</span>
                  <span className="text-lg text-muted-foreground ml-2">/month</span>
                </div>
                <CardDescription className="text-lg mt-2">
                  For professionals who want advanced features and customization
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-foreground">Everything in Free, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">
                      Up to 50 social platforms (Instagram, TikTok, Discord, etc.)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Add up to 4 services you offer</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Premium template designs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Advanced customization options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Priority customer support</span>
                  </li>
                </ul>
                <Link href="/register" className="block">
                  <Button className="w-full" size="lg">
                    Start Premium Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  14-day free trial, then $2.99/month
                </p>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative border-purple-200 dark:border-purple-800">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-foreground">Custom</span>
                  <span className="text-lg text-muted-foreground ml-2">pricing</span>
                </div>
                <CardDescription className="text-lg mt-2">
                  For businesses that need unlimited everything and custom solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium text-foreground">Everything in Premium, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Unlimited social platforms and services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Unlimited actions and interactions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Custom design and branding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Separate custom domain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Dedicated support and service</span>
                  </li>
                </ul>
                <Link href="/contact" className="block">
                  <Button className="w-full" size="lg">
                    Contact for Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <p className="text-center text-sm text-muted-foreground mt-3">
                  Custom pricing based on your needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to transform your networking?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Join thousands of professionals already using QR Visit
          </p>
          <div className="mt-8">
            <Link href="/register">
              <Button size="lg" className="cursor-pointer">
                Create Your Digital Card Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-muted-foreground">
            No credit card required • Setup in 2 minutes
          </p>
        </div>
      </section>
    </>
  );
}
