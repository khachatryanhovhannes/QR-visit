import Link from 'next/link';
import { Metadata } from 'next';
// Removed unused Card, CardContent, CardDescription, CardHeader, CardTitle imports
import { Button } from '@/components/ui/button';
import { TEMPLATES } from '@/types';
import { ArrowRight } from 'lucide-react';
import { TemplatePreviewCard } from '@/components/dashboard/TemplatePreviewCard';

export const metadata: Metadata = {
  title: 'Templates - QR Visit',
  description: 'Choose from our collection of professional digital business card templates. Find the perfect design for your brand.',
};

export default function TemplatesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl dark:text-accent">
            Professional Templates
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully designed templates to create a digital business card that reflects your professional style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TEMPLATES.map((template) => (
            <div key={template.id} className="flex flex-col items-stretch">
              <TemplatePreviewCard template={template} />
              <Link href="/register" className="mt-4">
                <Button className="w-full cursor-pointer">
                  Use This Template
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-background dark:bg-card rounded-2xl p-8 text-center shadow-sm border border-border">
          <h2 className="text-3xl font-bold text-foreground dark:text-accent mb-4">
            Ready to create your digital business card?
          </h2>
          <p className="text-lg text-muted-foreground dark:text-accent/80 mb-6 max-w-2xl mx-auto">
            Choose your favorite template and customize it with your information. 
            Get started in less than 2 minutes.
          </p>
          <Link href="/register">
            <Button className="cursor-pointer">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
