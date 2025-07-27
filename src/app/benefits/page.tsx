import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Leaf, 
  DollarSign, 
  Zap, 
  Globe, 
  Users, 
  Shield,
  BarChart3,
  Clock,
  ArrowRight,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Benefits - QR Visit',
  description: 'Discover the powerful benefits of using QR Visit for your digital business cards. Save money, protect the environment, and network more effectively.',
};

export default function BenefitsPage() {
  const mainBenefits = [
    {
      icon: Leaf,
      title: 'Environmentally Friendly',
      description: 'Reduce paper waste and your carbon footprint',
      details: [
        'Save approximately 1,000 paper cards per digital card',
        'Eliminate the need for reprinting when information changes',
        'Reduce transportation and shipping emissions',
        'Support sustainable business practices'
      ],
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Solution',
      description: 'Save money on printing and design costs',
      details: [
        'No recurring printing costs',
        'Free updates and changes',
        'Eliminate design and setup fees',
        'Scale without additional per-card costs'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: Zap,
      title: 'Always Up-to-Date',
      description: 'Instant updates across all shared cards',
      details: [
        'Change information once, update everywhere',
        'No more outdated contact details',
        'Real-time synchronization',
        'Never run out of business cards'
      ],
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Share your information anywhere in the world',
      details: [
        'No language barriers with QR codes',
        'Works on any smartphone',
        'Instant access without apps to download',
        'Share via multiple channels (QR, link, NFC)'
      ],
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: Users,
      title: 'Enhanced Networking',
      description: 'Build stronger professional connections',
      details: [
        'Connect on multiple social platforms instantly',
        'Share comprehensive professional information',
        'Make memorable first impressions',
        'Track networking effectiveness (Premium)'
      ],
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Control your information and privacy',
      details: [
        'You control what information to share',
        'Update or remove data anytime',
        'Enterprise-grade security',
        'GDPR and privacy compliant'
      ],
      color: 'text-accent',
      bgColor: 'bg-accent bg-opacity-10',
    },
  ];

  const comparisonData = {
    traditional: {
      title: 'Traditional Business Cards',
      items: [
        { feature: 'Initial Cost', value: '$50-200 per 1000 cards', negative: true },
        { feature: 'Reprinting Cost', value: '$50-200 every update', negative: true },
        { feature: 'Update Time', value: '1-2 weeks for new cards', negative: true },
        { feature: 'Environmental Impact', value: 'High paper waste', negative: true },
        { feature: 'Information Limit', value: 'Limited to card space', negative: true },
        { feature: 'Lost Cards', value: 'Frequent replacement needed', negative: true },
        { feature: 'Contact Saving', value: 'Manual data entry', negative: true },
      ]
    },
    digital: {
      title: 'QR Visit Digital Cards',
      items: [
        { feature: 'Initial Cost', value: 'Free to start', negative: false },
        { feature: 'Update Cost', value: 'Free unlimited updates', negative: false },
        { feature: 'Update Time', value: 'Instant changes', negative: false },
        { feature: 'Environmental Impact', value: 'Zero paper waste', negative: false },
        { feature: 'Information Limit', value: 'Unlimited content', negative: false },
        { feature: 'Lost Cards', value: 'Never lose your card', negative: false },
        { feature: 'Contact Saving', value: 'One-tap save to phone', negative: false },
      ]
    }
  };

  const statistics = [
    { number: '500+', label: 'Trees saved annually', icon: Leaf },
    { number: '80%', label: 'Cost reduction vs traditional', icon: DollarSign },
    { number: '95%', label: 'Faster information sharing', icon: Zap },
    { number: '24/7', label: 'Always accessible', icon: Clock },
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-primary-text sm:text-5xl">
            Why Choose Digital Business Cards?
          </h1>
          <p className="mt-4 text-xl text-secondary-text max-w-3xl mx-auto">
            Discover the powerful benefits of switching to QR Visit digital business cards. 
            Save money, protect the environment, and network more effectively.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-brandBlue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-text mb-1">{stat.number}</div>
                <div className="text-sm text-secondary-text">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Benefits */}
        <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-primary-text mb-12">
            Core Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainBenefits.map((benefit, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-12 h-12 ${benefit.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-secondary-text">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-secondary-text">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary-text mb-12">
            Traditional vs Digital: Side-by-Side Comparison
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Cards */}
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-center text-red-800">
                  {comparisonData.traditional.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {comparisonData.traditional.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border-b border-border last:border-b-0">
                      <span className="font-medium text-primary-text">{item.feature}</span>
                      <span className="text-error text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Digital Cards */}
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-center text-green-800">
                  {comparisonData.digital.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {comparisonData.digital.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border-b border-border last:border-b-0">
                      <span className="font-medium text-primary-text">{item.feature}</span>
                      <span className="text-success text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bg-success bg-opacity-10 rounded-2xl p-8 mb-16 border border-success border-opacity-20">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-primary-text mb-6">
              Environmental Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-success mb-2">100%</div>
                <div className="text-primary-text">Paper waste reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">500+</div>
                <div className="text-primary-text">Trees saved per year</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-success mb-2">90%</div>
                <div className="text-primary-text">Lower carbon footprint</div>
              </div>
            </div>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              By choosing digital business cards, you&apos;re contributing to a more sustainable future. 
              Every QR Visit user helps reduce paper waste and supports environmental conservation.
            </p>
          </div>
        </div>

        {/* Business Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary-text mb-12">
            Business Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary-text mb-3">Increased Conversion</h3>
                <p className="text-secondary-text mb-4">
                  Digital cards have a 40% higher contact save rate compared to traditional cards. 
                  People are more likely to save and act on digital contact information.
                </p>
                <ul className="space-y-2 text-sm text-secondary-text">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    One-tap contact saving
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Direct social media connections
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Immediate access to services
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <BarChart3 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary-text mb-3">Trackable Results</h3>
                <p className="text-secondary-text mb-4">
                  With Premium analytics, track how your networking efforts perform. 
                  See who visits your profile and when they engage with your content.
                </p>
                <ul className="space-y-2 text-sm text-secondary-text">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    View count tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Geographic insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Engagement metrics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <DollarSign className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Calculate Your Savings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Traditional Cards (Annual)</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Initial printing (1000 cards)</span>
                    <span className="font-semibold text-foreground">$150</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2 reprints per year</span>
                    <span className="font-semibold text-foreground">$300</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Design updates</span>
                    <span className="font-semibold text-foreground">$100</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold text-foreground">Total Annual Cost</span>
                    <span className="font-bold text-destructive">$550</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">QR Visit (Annual)</h3>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Free plan</span>
                    <span className="font-semibold text-foreground">$0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Premium plan (optional)</span>
                    <span className="font-semibold text-foreground">$108</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Unlimited updates</span>
                    <span className="font-semibold text-foreground">$0</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold text-foreground">Total Annual Cost</span>
                    <span className="font-bold text-primary">$0-108</span>
                  </div>
                </div>
              </Card>
            </div>
            <p className="text-lg font-semibold text-primary">
              Save up to $442 per year with QR Visit digital business cards!
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-primary">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Ready to Experience the Benefits?</h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who&apos;ve already discovered the power of digital networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button size="lg" className="cursor-pointer">
                Start Free Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer">
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
}
