import Link from 'next/link';
import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TEMPLATES } from '@/types';
import { ArrowRight, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Templates - QR Visit',
  description: 'Choose from our collection of professional digital business card templates. Find the perfect design for your brand.',
};

export default function TemplatesPage() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-primary-text sm:text-5xl">
            Professional Templates
          </h1>
          <p className="mt-4 text-xl text-secondary-text max-w-3xl mx-auto">
            Choose from our carefully designed templates to create a digital business card that reflects your professional style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {TEMPLATES.map((template) => (
            <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {template.name}
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </CardTitle>
                <CardDescription>{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-[3/4] bg-gradient-to-br from-card-background to-background rounded-lg mb-4 flex items-center justify-center border border-border">
                  <div className="text-center text-secondary-text">
                    <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-accent font-bold text-lg">JD</span>
                    </div>
                    <h3 className="font-semibold text-primary-text">John Doe</h3>
                    <p className="text-sm text-secondary-text">Software Developer</p>
                    {template.id === 'column' && (
                      <div className="mt-2 grid grid-cols-2 gap-1 text-xs">
                        <div className="bg-border h-2 rounded"></div>
                        <div className="bg-border h-2 rounded"></div>
                      </div>
                    )}
                    {template.id === 'business' && (
                      <div className="mt-2 bg-accent bg-opacity-20 p-2 rounded text-xs text-accent">
                        Professional Layout
                      </div>
                    )}
                  </div>
                </div>
                <Link href="/register">
                  <Button className="w-full cursor-pointer">
                    Use This Template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card-background rounded-2xl p-8 text-center shadow-sm border border-border">
          <h2 className="text-3xl font-bold text-primary-text mb-4">
            Ready to create your digital business card?
          </h2>
          <p className="text-lg text-secondary-text mb-6 max-w-2xl mx-auto">
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
