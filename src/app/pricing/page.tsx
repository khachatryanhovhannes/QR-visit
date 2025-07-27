import Link from "next/link";
import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - QR Visit",
  description:
    "Simple, transparent pricing for QR Visit. Start free and upgrade when you need more features.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that&apos;s right for you. Start free and upgrade
            anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {/* Free Plan */}
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

          {/* Premium Plan */}
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
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Analytics and insights (coming soon)</span>
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
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">White-label solutions available</span>
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

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Can I switch between plans?
                </h3>
                <p className="text-muted-foreground">
                  Yes! You can upgrade to Premium at any time. If you decide to
                  downgrade, your premium features will remain active until the
                  end of your billing period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Is there a setup fee?
                </h3>
                <p className="text-muted-foreground">
                  No setup fees, ever. You only pay the monthly subscription for
                  Premium features. The Free plan is completely free with no
                  hidden costs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  What happens to my data if I cancel?
                </h3>
                <p className="text-muted-foreground">
                  Your profile remains active with Free plan features. Premium
                  features are disabled, but your data is preserved. You can
                  reactivate Premium anytime.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Do you offer refunds?
                </h3>
                <p className="text-muted-foreground">
                  We offer a 14-day free trial for Premium. If you&apos;re not
                  satisfied, contact us within 30 days for a full refund.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  What&apos;s included in Enterprise pricing?
                </h3>
                <p className="text-muted-foreground">
                  Enterprise pricing is custom-tailored to your specific needs. This includes 
                  unlimited everything, custom domains, white-label options, dedicated support, 
                  and custom development. Contact us for a personalized quote.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enterprise CTA */}
        <Card className="p-8 text-center bg-primary">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
            Ready to scale your business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who trust QR Visit for their digital networking needs. 
            Start free today and upgrade when you&apos;re ready for more.
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary" className="cursor-pointer">
              Get Started Now
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
