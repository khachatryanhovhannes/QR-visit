import { Metadata } from 'next';


import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Terms of Service - QR Visit',
  description: 'Read our Terms of Service to understand the rules and regulations governing the use of QR Visit.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: July 27, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By accessing and using QR Visit (&quot;Service&quot;), you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by these Terms of Service, 
                you are not authorized to use or access this service.
              </p>
              <p className="text-foreground leading-relaxed">
                These Terms of Service apply to all users of the service, including without limitation 
                users who are browsers, vendors, customers, merchants, and/or contributors of content.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
              <p className="text-foreground leading-relaxed mb-4">
                QR Visit is a digital business card platform that allows users to create, customize, 
                and share professional profiles through QR codes and web links. Our service includes:
              </p>
              <ul className="list-disc pl-6 text-foreground space-y-2">
                <li>Digital business card creation and customization</li>
                <li>QR code generation and management</li>
                <li>Public profile hosting and sharing</li>
                <li>Contact information management</li>
                <li>Social media integration</li>
                <li>Analytics and insights (Premium features)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  <strong>Account Creation:</strong> To use certain features of QR Visit, you must create 
                  an account. You agree to provide accurate, current, and complete information during the 
                  registration process.
                </p>
                <p>
                  <strong>Account Security:</strong> You are responsible for safeguarding the password and 
                  for maintaining the confidentiality of your account. You agree not to disclose your 
                  password to any third party.
                </p>
                <p>
                  <strong>Account Responsibility:</strong> You are fully responsible for all activities 
                  that occur under your account, whether or not you have authorized such activities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. User Content and Conduct</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  <strong>Content Ownership:</strong> You retain ownership of any content you submit, 
                  post, or display on or through the Service. By submitting content, you grant QR Visit 
                  a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, 
                  adapt, modify, publish, transmit, display, and distribute such content.
                </p>
                <p>
                  <strong>Prohibited Content:</strong> You agree not to post, upload, or transmit any content that:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Is unlawful, harmful, threatening, abusive, or defamatory</li>
                  <li>Violates any intellectual property rights</li>
                  <li>Contains viruses or malicious code</li>
                  <li>Is spam, commercial solicitation, or promotional material</li>
                  <li>Impersonates any person or entity</li>
                  <li>Contains false or misleading information</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Subscription and Payment Terms</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  <strong>Free Plan:</strong> QR Visit offers a free plan with basic features. Free accounts 
                  are subject to certain limitations as described on our pricing page.
                </p>
                <p>
                  <strong>Premium Plan:</strong> Premium features are available through paid subscription plans. 
                  Subscription fees are billed in advance on a monthly basis and are non-refundable except 
                  as required by law.
                </p>
                <p>
                  <strong>Billing:</strong> By subscribing to a Premium plan, you authorize us to charge 
                  your payment method for the applicable fees. Subscriptions automatically renew unless 
                  cancelled before the renewal date.
                </p>
                <p>
                  <strong>Cancellation:</strong> You may cancel your subscription at any time. Cancellation 
                  will take effect at the end of your current billing period.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectual Property</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  The Service and its original content, features, and functionality are and will remain 
                  the exclusive property of QR Visit and its licensors. The Service is protected by 
                  copyright, trademark, and other laws.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection with any product or 
                  service without our prior written consent.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Privacy Policy</h2>
              <p className="text-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of the Service, to understand our practices regarding the collection and use 
                of your personal information.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitation of Liability</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  In no event shall QR Visit, nor its directors, employees, partners, agents, suppliers, 
                  or affiliates, be liable for any indirect, incidental, special, consequential, or 
                  punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                  or other intangible losses.
                </p>
                <p>
                  We do not warrant that the service will be uninterrupted, timely, secure, or error-free.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Service Availability</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We strive to maintain high service availability but do not guarantee that the Service 
                  will be available at all times. The Service may be temporarily unavailable due to 
                  maintenance, updates, or technical issues.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue the Service (or any part thereof) 
                  at any time with reasonable notice.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We may terminate or suspend your account and bar access to the Service immediately, 
                  without prior notice or liability, under our sole discretion, for any reason whatsoever 
                  and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p>
                  If you wish to terminate your account, you may simply discontinue using the Service 
                  or contact us to request account deletion.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-foreground leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of California, 
                United States, without regard to its conflict of law provisions. Our failure to enforce 
                any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any new terms 
                  taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion. By continuing 
                  to access or use our Service after any revisions become effective, you agree to be bound 
                  by the revised terms.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> legal@qrvisit.com</li>
                  <li><strong>Address:</strong> QR Visit Inc., 123 Innovation Drive, San Francisco, CA 94107</li>
                  <li><strong>Website:</strong> https://qrvisit.com/contact</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            These Terms of Service were last updated on July 27, 2025. We recommend that you periodically 
            review these terms to stay informed of our practices.
          </p>
        </div>
      </div>

      
    </div>
  );
}
