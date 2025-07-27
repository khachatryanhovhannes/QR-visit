import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search,
  BookOpen,
  MessageSquare,
  Video,
  FileText,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Help Center - QR Visit',
  description: 'Find answers to your questions about QR Visit. Browse guides, tutorials, and FAQs to get the most out of your digital business cards.',
};

export default function HelpPage() {
  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of creating and using your digital business card',
      articles: [
        'How to create your first digital business card',
        'Setting up your QR code',
        'Choosing the right template',
        'Adding your contact information',
      ],
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all QR Visit features',
      articles: [
        'QR Visit in 5 minutes - Quick start guide',
        'Customizing your digital card design',
        'Sharing your QR code effectively',
        'Understanding analytics (Premium)',
      ],
    },
    {
      icon: FileText,
      title: 'Advanced Features',
      description: 'Master the advanced features available in QR Visit',
      articles: [
        'Adding services to your profile',
        'Connecting multiple social platforms',
        'Using premium templates',
        'Tracking your card performance',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Account & Billing',
      description: 'Manage your account settings and subscription',
      articles: [
        'Upgrading to Premium',
        'Managing your subscription',
        'Updating payment information',
        'Downloading your data',
      ],
    },
  ];

  const popularArticles = [
    {
      title: 'How do I create my first digital business card?',
      category: 'Getting Started',
      readTime: '3 min read',
    },
    {
      title: 'What&apos;s the difference between Free and Premium?',
      category: 'Pricing',
      readTime: '2 min read',
    },
    {
      title: 'How do I add my social media links?',
      category: 'Customization',
      readTime: '4 min read',
    },
    {
      title: 'Can I print my QR code on business cards?',
      category: 'QR Codes',
      readTime: '3 min read',
    },
    {
      title: 'How do I change my username?',
      category: 'Account',
      readTime: '2 min read',
    },
    {
      title: 'What happens when someone scans my QR code?',
      category: 'Getting Started',
      readTime: '3 min read',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            How can we help you?
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to your questions and learn how to get the most out of QR Visit.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help articles..."
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-primary font-medium">
                      {article.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <div className="flex items-center text-primary">
                    <span className="text-sm">Read article</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link 
                          href="#" 
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                        >
                          <span>{article}</span>
                          <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link href="#">
                      <Button variant="outline" size="sm" className="cursor-pointer">
                        View All Articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact Support</h3>
              <p className="text-muted-foreground mb-4">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help.
              </p>
              <Link href="/contact">
                <Button className="w-full cursor-pointer">
                  Get in Touch
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <Video className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Video Tutorials</h3>
              <p className="text-muted-foreground mb-4">
                Watch step-by-step video guides to master QR Visit features.
              </p>
              <Link href="#">
                <Button variant="outline" className="w-full cursor-pointer">
                  Watch Videos
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">User Guide</h3>
              <p className="text-muted-foreground mb-4">
                Download our comprehensive user guide for offline reference.
              </p>
              <Link href="#">
                <Button variant="outline" className="w-full cursor-pointer">
                  Download PDF
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Still Need Help */}
        <Card className="p-8 text-center bg-primary">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Still need help?</h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Our support team responds to all inquiries within 24 hours. Premium users get priority support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                Contact Support
              </Button>
            </Link>
            <Link href="mailto:support@qrvisit.com">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer">
                Email Us
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
