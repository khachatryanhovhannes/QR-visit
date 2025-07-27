import { Metadata } from 'next';


import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Cookie Policy - QR Visit',
  description: 'Learn about how QR Visit uses cookies and similar technologies to improve your experience.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: July 27, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you 
                  visit a website. They are widely used to make websites work more efficiently and provide 
                  a better user experience.
                </p>
                <p>
                  This Cookie Policy explains how QR Visit (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and 
                  similar technologies when you visit our website and use our services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Essential Cookies</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    These cookies are necessary for the website to function properly. They enable core 
                    functionality such as security, network management, and accessibility.
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>Authentication and login status</li>
                    <li>Security and fraud prevention</li>
                    <li>Website functionality and navigation</li>
                    <li>Load balancing and performance optimization</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mt-3">
                    <strong>Duration:</strong> Session cookies (deleted when you close your browser) or 
                    persistent cookies (remain until they expire or you delete them).
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Performance Cookies</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    These cookies collect information about how you use our website, such as which pages 
                    you visit most often and if you get error messages.
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>Page visit statistics</li>
                    <li>Error monitoring and reporting</li>
                    <li>Website performance metrics</li>
                    <li>User journey analysis</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mt-3">
                    <strong>Duration:</strong> Typically expire after 1-2 years.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Functional Cookies</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    These cookies allow the website to remember choices you make and provide enhanced, 
                    personalized features.
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>User preferences and settings</li>
                    <li>Language and region settings</li>
                    <li>Personalized content and recommendations</li>
                    <li>Form data and input preferences</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mt-3">
                    <strong>Duration:</strong> Typically expire after 1 year.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Analytics Cookies</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    These cookies help us understand how visitors interact with our website by collecting 
                    and reporting information anonymously.
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>Visitor behavior and usage patterns</li>
                    <li>Popular content and features</li>
                    <li>Traffic sources and referrals</li>
                    <li>Conversion tracking and optimization</li>
                  </ul>
                  <p className="text-foreground leading-relaxed mt-3">
                    <strong>Third-party services:</strong> We may use Google Analytics and similar services.
                    <br />
                    <strong>Duration:</strong> Typically expire after 2 years.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Third-Party Cookies</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We may also use third-party cookies from trusted partners to help us analyze website 
                  usage and improve our services. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                  <li><strong>Firebase:</strong> For authentication and backend services</li>
                  <li><strong>Payment Processors:</strong> For secure payment processing (when applicable)</li>
                  <li><strong>Customer Support:</strong> For chat and support functionality</li>
                </ul>
                <p className="mt-4">
                  These third parties may also place cookies on your device. We recommend reviewing 
                  their privacy policies for more information about their cookie practices.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. How We Use Cookies</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Authentication:</strong> To keep you logged in and remember your session</li>
                  <li><strong>Security:</strong> To protect against fraud and unauthorized access</li>
                  <li><strong>Preferences:</strong> To remember your settings and customizations</li>
                  <li><strong>Performance:</strong> To optimize loading times and website functionality</li>
                  <li><strong>Analytics:</strong> To understand how our service is used and improve it</li>
                  <li><strong>Error Tracking:</strong> To identify and fix technical issues</li>
                  <li><strong>User Experience:</strong> To provide personalized content and features</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Browser Settings</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>View what cookies are stored on your device</li>
                    <li>Delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies (may affect functionality)</li>
                    <li>Set cookies to be deleted when you close your browser</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Browser-Specific Instructions</h3>
                  <ul className="list-disc pl-6 text-foreground space-y-2">
                    <li><strong>Chrome:</strong> Settings &gt; Privacy and security &gt; Cookies and other site data</li>
                    <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                    <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                    <li><strong>Edge:</strong> Settings &gt; Cookies and site permissions &gt; Cookies and site data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Opt-Out Links</h3>
                  <p className="text-foreground leading-relaxed mb-3">
                    You can opt out of specific third-party cookies:
                  </p>
                  <ul className="list-disc pl-6 text-foreground space-y-1">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-brandBlue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a></li>
                    <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org/" className="text-brandBlue-600 hover:underline" target="_blank" rel="noopener noreferrer">NAI Opt-out</a></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Impact of Disabling Cookies</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  While you can disable cookies, please note that doing so may affect your experience 
                  on our website:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may need to log in repeatedly</li>
                  <li>Your preferences and settings may not be saved</li>
                  <li>Some features may not work properly</li>
                  <li>You may see less relevant content</li>
                  <li>Website performance may be slower</li>
                </ul>
                <p className="mt-4">
                  Essential cookies cannot be disabled as they are necessary for the basic functioning 
                  of our website.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookie Consent</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  By using our website, you consent to the use of cookies as described in this Cookie Policy. 
                  We may display a cookie banner when you first visit our site to inform you about our 
                  use of cookies.
                </p>
                <p>
                  You can withdraw your consent at any time by adjusting your browser settings or 
                  contacting us directly.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Updates to This Cookie Policy</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices 
                  or applicable laws. When we make changes, we will update the &quot;Last updated&quot; date at 
                  the top of this policy.
                </p>
                <p>
                  We encourage you to review this Cookie Policy periodically to stay informed about 
                  how we use cookies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                </p>
                <ul className="list-none space-y-2">
                  <li><strong>Email:</strong> privacy@qrvisit.com</li>
                  <li><strong>Address:</strong> QR Visit Inc., 123 Innovation Drive, San Francisco, CA 94107</li>
                  <li><strong>Website:</strong> https://qrvisit.com/contact</li>
                </ul>
                <p className="mt-4">
                  For cookie-related requests, please include &quot;Cookie Policy&quot; in the subject line of your email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 p-6 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            This Cookie Policy was last updated on July 27, 2025. We recommend that you periodically 
            review this policy to stay informed about how we use cookies.
          </p>
        </div>
      </div>

      
    </div>
  );
}
