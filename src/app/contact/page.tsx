import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Mail, 
  MessageSquare, 
  HelpCircle,
  Clock,
  MapPin,
  Send
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - QR Visit',
  description: 'Get in touch with the QR Visit team. We\'re here to help with questions, support, and feedback about our digital business card platform.',
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we&apos;ll get back to you within 24 hours.',
      value: 'support@qrvisit.com',
      action: 'mailto:support@qrvisit.com',
      cta: 'Send Email',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time during business hours.',
      value: 'Available 9 AM - 6 PM EST',
      action: '#',
      cta: 'Start Chat',
    },
    {
      icon: HelpCircle,
      title: 'Help Center',
      description: 'Browse our comprehensive guides and frequently asked questions.',
      value: 'Self-service support',
      action: '/help',
      cta: 'Browse Help',
    },
  ];

  const faqs = [
    {
      question: 'How quickly can I get my digital business card?',
      answer: 'You can create and start using your digital business card immediately after signing up. The entire process takes less than 5 minutes.',
    },
    {
      question: 'Can I use QR Visit for my team or company?',
      answer: 'Yes! We&apos;re working on team and enterprise plans. Contact our sales team to discuss bulk pricing and custom solutions for your organization.',
    },
    {
      question: 'What happens if I forget my password?',
      answer: 'You can reset your password anytime using the "Forgot Password" link on the login page. You&apos;ll receive an email with reset instructions.',
    },
    {
      question: 'Can I export my contact data?',
      answer: 'Yes, you can download your profile data at any time from your dashboard settings. Your data belongs to you.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 14-day free trial for Premium features. If you&apos;re not satisfied, contact us within 30 days for a full refund.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            We&apos;re Here to Help
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about QR Visit? Need help with your digital business card? 
            Our support team is ready to assist you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {method.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{method.value}</p>
                <Link href={method.action}>
                  <Button className="w-full cursor-pointer">
                    {method.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required 
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required 
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select 
                  id="subject" 
                  name="subject" 
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:ring-primary"
                >
                  <option value="">Select a topic</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="bug">Bug Report</option>
                  <option value="sales">Sales Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:border-primary focus:ring-primary"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full cursor-pointer">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Other Ways to Reach Us</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Support Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 4:00 PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-muted-foreground">General: info@qrvisit.com</p>
                  <p className="text-muted-foreground">Support: support@qrvisit.com</p>
                  <p className="text-muted-foreground">Sales: sales@qrvisit.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Address</h3>
                  <p className="text-muted-foreground">QR Visit Inc.</p>
                  <p className="text-muted-foreground">123 Innovation Drive</p>
                  <p className="text-muted-foreground">San Francisco, CA 94107</p>
                </div>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Enterprise Sales</h3>
                <p className="text-muted-foreground mb-4">
                  Looking for a custom solution for your organization? Our sales team can help 
                  you find the perfect plan for your needs.
                </p>
                <Link href="mailto:sales@qrvisit.com">
                  <Button variant="outline" className="border-primary cursor-pointer">
                    Contact Sales
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link href="/help">
              <Button variant="outline" className="cursor-pointer">
                Visit Help Center
              </Button>
            </Link>
          </div>
        </div>

        {/* Response Time Promise */}
        <Card className="p-8 text-center bg-primary">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Our Promise to You</h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            We respond to all support requests within 24 hours, and most are answered much sooner. 
            Your success is our priority.
          </p>
        </Card>
      </div>
    </div>
  );
}
