import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search,
  HelpCircle,
  MessageSquare,
  Mail,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - QR Visit',
  description: 'Find answers to common questions about QR Visit digital business cards, pricing, features, and how to get started.',
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: HelpCircle,
      faqs: [
        {
          question: 'How do I create my first digital business card?',
          answer: 'Creating your digital business card is simple! First, sign up for a free account at QR Visit. Then, go to your dashboard and fill out the profile form with your contact information, bio, and social links. Choose from our professional templates, and your digital card will be generated automatically with a unique QR code.'
        },
        {
          question: 'Do I need any special equipment or software?',
          answer: 'No special equipment needed! QR Visit works entirely in your web browser. To share your card, recipients just need a smartphone with a camera to scan your QR code. Most modern smartphones can scan QR codes using their built-in camera app.'
        },
        {
          question: 'How long does it take to set up my digital business card?',
          answer: 'You can create your digital business card in under 5 minutes. The sign-up process takes about 1 minute, and filling out your profile information typically takes 3-4 minutes. Once saved, your QR code is generated instantly and ready to share.'
        },
        {
          question: 'Can I use QR Visit on my mobile device?',
          answer: 'Absolutely! QR Visit is fully responsive and works perfectly on mobile devices, tablets, and desktop computers. You can create, edit, and share your digital business card from any device with an internet connection.'
        }
      ]
    },
    {
      title: 'Features & Functionality',
      icon: HelpCircle,
      faqs: [
        {
          question: 'What information can I include on my digital business card?',
          answer: 'You can include your name, title, company, contact information (email, phone, address), bio, profile photo, and links to your social media profiles. Premium users can also add services they offer and connect up to 50 different social platforms.'
        },
        {
          question: 'How many social media links can I add?',
          answer: 'Free users can add up to 4 social media links (Website, LinkedIn, GitHub, Telegram). Premium users can connect up to 50 different social platforms including Instagram, TikTok, Discord, Twitter, Facebook, YouTube, and many more.'
        },
        {
          question: 'Can I customize the design of my digital business card?',
          answer: 'Yes! We offer multiple professional templates (Classic, Column, Business) that you can choose from. Premium users get access to additional premium templates and advanced customization options including colors, fonts, and layouts.'
        },
        {
          question: 'What happens when someone scans my QR code?',
          answer: 'When someone scans your QR code, they&apos;re taken directly to your public profile page. From there, they can view all your information, save your contact details to their phone with one tap, and connect with you on your social platforms.'
        },
        {
          question: 'Can I track who views my digital business card?',
          answer: 'Yes! Premium users get access to analytics that show how many people have viewed your profile, when they visited, and basic geographic information. This helps you track the effectiveness of your networking efforts.'
        }
      ]
    },
    {
      title: 'Pricing & Plans',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Is QR Visit really free?',
          answer: 'Yes! Our free plan includes all essential features: basic contact information, 3 professional templates, QR code generation, up to 4 social links, and a public profile page. There are no hidden fees or time limits on the free plan.'
        },
        {
          question: 'What&apos;s the difference between Free and Premium plans?',
          answer: 'The Free plan includes basic features for individual use. Premium ($9/month) adds up to 50 social platforms, service listings, premium templates, advanced customization, priority support, and analytics. Premium is perfect for professionals who want more features and customization.'
        },
        {
          question: 'Can I upgrade or downgrade my plan anytime?',
          answer: 'Absolutely! You can upgrade to Premium at any time to unlock additional features. If you decide to downgrade, your premium features will remain active until the end of your billing period, then your account will revert to the free plan.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'We offer a 14-day free trial for Premium features so you can try before you commit. If you&apos;re not satisfied after subscribing, contact us within 30 days of your purchase for a full refund.'
        },
        {
          question: 'Are there any team or enterprise plans?',
          answer: 'We&apos;re currently working on team and enterprise plans with bulk management, custom domains, and advanced analytics. Contact our sales team at sales@qrvisit.com to discuss your organization&apos;s needs.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      faqs: [
        {
          question: 'What if I forget my password?',
          answer: 'No worries! Click the "Forgot Password" link on the login page, enter your email address, and we&apos;ll send you instructions to reset your password. The reset link will be valid for 24 hours.'
        },
        {
          question: 'Can I change my username after creating my account?',
          answer: 'Currently, usernames cannot be changed after account creation as they form part of your unique profile URL (qrvisit.com/u/yourname). If you need to change your username, please contact our support team to discuss options.'
        },
        {
          question: 'How do I delete my account?',
          answer: 'You can delete your account by going to your dashboard settings and clicking "Delete Account." This will permanently remove all your data within 30 days. You can also contact support if you need assistance with account deletion.'
        },
        {
          question: 'Is my data secure and private?',
          answer: 'Yes! We use enterprise-grade security measures including data encryption, secure servers, and regular security audits. Your personal information is protected and we never sell your data to third parties. Read our Privacy Policy for complete details.'
        },
        {
          question: 'What if someone misuses my QR code?',
          answer: 'Your QR code links to your public profile, which only shows information you choose to share. If you experience any issues, you can update your profile information or contact our support team. We take misuse seriously and will investigate any reports.'
        }
      ]
    },
    {
      title: 'Business Use',
      icon: HelpCircle,
      faqs: [
        {
          question: 'Can I use QR Visit for my business or company?',
          answer: 'Absolutely! QR Visit is perfect for businesses of all sizes. Individual employees can create their own professional cards, and we&apos;re developing team management features for organizations. Contact us about enterprise solutions.'
        },
        {
          question: 'Can I print my QR code on physical materials?',
          answer: 'Yes! You can download your QR code in high-resolution PNG, SVG, or PDF formats. These are perfect for printing on business cards, flyers, brochures, or any other marketing materials. The QR code will always link to your up-to-date digital profile.'
        },
        {
          question: 'How do I share my digital business card at networking events?',
          answer: 'There are several ways to share your card: show your QR code on your phone screen for others to scan, print your QR code on physical cards or name tags, share your profile URL (qrvisit.com/u/yourname) verbally or in writing, or use NFC technology if supported.'
        },
        {
          question: 'Can I integrate QR Visit with my CRM or other business tools?',
          answer: 'We&apos;re working on API integrations and business tool connections. Currently, you can export your contact data and import contacts who save your information. Contact us about specific integration needs for your business.'
        }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: HelpCircle,
      faqs: [
        {
          question: 'My QR code isn&apos;t working. What should I do?',
          answer: 'First, ensure the QR code image is clear and not damaged. Try scanning with a different device or QR code scanner app. If the problem persists, regenerate your QR code from your dashboard or contact support for assistance.'
        },
        {
          question: 'Why can&apos;t people save my contact information to their phone?',
          answer: 'Make sure you&apos;ve filled in your contact information completely in your profile. The save-to-phone feature requires at least your name and either email or phone number. Also, ensure the person scanning has a modern smartphone with contact-saving capabilities.'
        },
        {
          question: 'My profile picture isn&apos;t uploading. What&apos;s wrong?',
          answer: 'Profile pictures should be in JPG, PNG, or GIF format and under 5MB in size. Make sure you have a stable internet connection. If you continue having issues, try resizing your image or contact support for help.'
        },
        {
          question: 'I&apos;m not receiving email notifications. How do I fix this?',
          answer: 'Check your spam/junk folder for QR Visit emails. Add support@qrvisit.com and notifications@qrvisit.com to your contacts. You can also check your notification preferences in your dashboard settings.'
        }
      ]
    }
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about QR Visit. Can&apos;t find what you&apos;re looking for? 
            Contact our support team for personalized help.
          </p>
          
          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for answers..."
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center mb-8">
                <category.icon className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => (
                  <Card key={faqIndex} className="overflow-hidden">
                    <CardContent className="p-0">
                      <details className="group">
                        <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-muted/50 transition-colors">
                          <h3 className="font-semibold text-foreground text-lg pr-4">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            <Plus className="h-5 w-5 text-muted-foreground group-open:hidden" />
                            <Minus className="h-5 w-5 text-muted-foreground hidden group-open:block" />
                          </div>
                        </summary>
                        <div className="px-6 pb-6">
                          <div className="text-foreground leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </details>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Popular Topics */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Popular Topics
          </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Getting Started Guide</h3>
                <p className="text-muted-foreground text-sm">
                  Step-by-step instructions for creating your first digital business card
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Premium Features</h3>
                <p className="text-muted-foreground text-sm">
                  Learn about advanced features available with Premium subscription
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Contact Support</h3>
                <p className="text-muted-foreground text-sm">
                  Get personalized help from our support team
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Help Links */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-foreground mb-8">
            Quick Help Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/help" className="block">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-primary font-semibold mb-2">Help Center</div>
                  <div className="text-sm text-muted-foreground">Browse guides and tutorials</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/contact" className="block">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-primary font-semibold mb-2">Contact Us</div>
                  <div className="text-sm text-muted-foreground">Email or chat with support</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/features" className="block">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-primary font-semibold mb-2">Features</div>
                  <div className="text-sm text-muted-foreground">Explore all features</div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/pricing" className="block">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-primary font-semibold mb-2">Pricing</div>
                  <div className="text-sm text-muted-foreground">Compare plans and pricing</div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Still Need Help */}
        <Card className="p-8 text-center bg-primary">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Still Need Help?</h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our support team is here to help you 
            get the most out of QR Visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="cursor-pointer">
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="mailto:support@qrvisit.com">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary cursor-pointer">
                Email Us
              </Button>
            </Link>
          </div>
          <p className="text-primary-foreground/90 text-sm mt-4">
            We typically respond within 24 hours • Premium users get priority support
          </p>
        </Card>
      </div>
    </>
  );
}
