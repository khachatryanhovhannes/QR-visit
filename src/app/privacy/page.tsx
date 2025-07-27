import { Metadata } from 'next';


import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Privacy Policy - QR Visit',
  description: 'Learn how QR Visit collects, uses, and protects your personal information in our comprehensive Privacy Policy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: July 27, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  QR Visit (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website and use our service.
                </p>
                <p>
                  Please read this Privacy Policy carefully. If you do not agree with the terms of this 
                  Privacy Policy, please do not access or use our Service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>Register for an account</li>
                    <li>Create your digital business card</li>
                    <li>Contact us for support</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Use our services</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mt-3">
                    This information may include:
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>Name and contact information (email, phone number, address)</li>
                    <li>Profile photos and images</li>
                    <li>Social media profiles and links</li>
                    <li>Professional information and bio</li>
                    <li>Payment information (processed securely by third-party providers)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Automatically Collected Information</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    When you visit our Service, we may automatically collect certain information about your 
                    device and usage patterns, including:
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring websites</li>
                    <li>Device identifiers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Cookies and Tracking Technologies</h3>
                  <p className="text-foreground leading-relaxed">
                    We use cookies, web beacons, and similar tracking technologies to collect and store 
                    information about your preferences and interactions with our Service. You can control 
                    cookies through your browser settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing, operating, and maintaining our Service</li>
                  <li>Creating and managing your digital business card</li>
                  <li>Processing transactions and managing subscriptions</li>
                  <li>Sending you updates, security alerts, and support messages</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Analyzing usage patterns to improve our Service</li>
                  <li>Detecting, preventing, and addressing technical issues</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting against fraudulent or illegal activity</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing and Disclosure</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Public Information</h3>
                  <p className="text-foreground leading-relaxed">
                    Your digital business card profile is designed to be shared publicly. Information you 
                    include in your public profile (name, contact information, bio, social links) will be 
                    visible to anyone who accesses your QR code or profile URL.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Service Providers</h3>
                  <p className="text-foreground leading-relaxed">
                    We may share your information with trusted third-party service providers who assist us 
                    in operating our Service, including:
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1 mt-2">
                    <li>Cloud hosting and storage providers</li>
                    <li>Payment processing services</li>
                    <li>Email service providers</li>
                    <li>Analytics and monitoring services</li>
                    <li>Customer support platforms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Legal Requirements</h3>
                  <p className="text-foreground leading-relaxed">
                    We may disclose your information if required to do so by law or in response to valid 
                    requests by public authorities, such as a court or government agency.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Business Transfers</h3>
                  <p className="text-foreground leading-relaxed">
                    In the event of a merger, acquisition, or sale of all or a portion of our assets, 
                    your information may be transferred as part of that transaction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication requirements</li>
                  <li>Secure data centers and infrastructure</li>
                  <li>Employee training on data protection</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. 
                  While we strive to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
                <p>
                  When you delete your account, we will delete or anonymize your personal information within 
                  30 days, except for information we are required to retain for legal or regulatory purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights and Choices</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request a copy of your information in a machine-readable format</li>
                  <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing under certain circumstances</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided in the 
                  &quot;Contact Us&quot; section below. We may need to verify your identity before processing your request.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Data Transfers</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  These countries may have different data protection laws than your jurisdiction.
                </p>
                <p>
                  When we transfer your personal information internationally, we implement appropriate 
                  safeguards to ensure your information remains protected in accordance with this Privacy Policy.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children&apos;s Privacy</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Our Service is not intended for children under the age of 13. We do not knowingly collect 
                  personal information from children under 13. If you are a parent or guardian and you are 
                  aware that your child has provided us with personal information, please contact us.
                </p>
                <p>
                  If we become aware that we have collected personal information from children under 13 
                  without verification of parental consent, we will take steps to remove that information 
                  from our servers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Third-Party Links</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Our Service may contain links to third-party websites, applications, or services that are 
                  not owned or controlled by QR Visit. We have no control over and assume no responsibility 
                  for the content, privacy policies, or practices of any third-party sites or services.
                </p>
                <p>
                  We strongly advise you to read the privacy policy of every site you visit. This Privacy 
                  Policy applies only to information collected by our Service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. California Privacy Rights</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  If you are a California resident, you have additional rights under the California Consumer 
                  Privacy Act (CCPA), including:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>The right to know what personal information is collected about you</li>
                  <li>The right to delete personal information</li>
                  <li>The right to opt-out of the sale of personal information</li>
                  <li>The right to non-discrimination for exercising your privacy rights</li>
                </ul>
                <p className="mt-4">
                  Note: We do not sell personal information to third parties.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
                <p>
                  For material changes, we may also send you an email notification or display a prominent 
                  notice in our Service. We encourage you to review this Privacy Policy periodically to 
                  stay informed about how we are protecting your information.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> privacy@qrvisit.com</li>
                  <li><strong>Address:</strong> QR Visit Inc., 123 Innovation Drive, San Francisco, CA 94107</li>
                  <li><strong>Website:</strong> https://qrvisit.com/contact</li>
                </ul>
                <p className="mt-4">
                  For requests related to your personal information, please include &quot;Privacy Request&quot; 
                  in the subject line of your email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            This Privacy Policy was last updated on July 27, 2025. We recommend that you periodically 
            review this policy to stay informed about how we protect your information.
          </p>
        </div>
      </div>

      
    </div>
  );
}
