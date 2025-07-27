import Link from 'next/link';
import { QrCode } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 cursor-pointer">
              <QrCode className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold text-primary-text">QR Visit</span>
            </Link>
            <p className="text-secondary-text mb-4 max-w-md">
              Create, manage, and share your digital business card with QR codes. 
              Professional networking made simple and accessible.
            </p>
            <p className="text-sm text-secondary-text">
              © 2025 QR Visit. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-primary-text uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-secondary-text hover:text-accent transition-colors cursor-pointer">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-secondary-text hover:text-accent transition-colors cursor-pointer">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-secondary-text hover:text-accent transition-colors cursor-pointer">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-secondary-text hover:text-accent transition-colors cursor-pointer">
                  Benefits
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-primary-text uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-secondary-text hover:text-accent transition-colors cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-text hover:text-accent transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-secondary-text hover:text-accent transition-colors cursor-pointer">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-text hover:text-accent transition-colors cursor-pointer">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="/terms" className="text-sm text-secondary-text hover:text-accent cursor-pointer">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm text-secondary-text hover:text-accent cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-sm text-secondary-text hover:text-accent cursor-pointer">
                Cookie Policy
              </Link>
            </div>
            <div className="text-sm text-secondary-text">
              Made with ❤️ for digital networking
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
