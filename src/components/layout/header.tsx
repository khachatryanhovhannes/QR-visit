'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, X, QrCode, User, LogOut, ChevronDown, Settings, HelpCircle, Info, Briefcase, DollarSign, Palette } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
  <header className="border-b border-border sticky top-0 z-50" aria-label="Main site header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 cursor-pointer" aria-label="Go to homepage">
            <QrCode className="h-8 w-8 text-accent" aria-label="QR Visit logo" />
            <span className="text-xl font-bold text-primary-text">QR Visit</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-secondary-text  transition-colors cursor-pointer" aria-label="Products menu">
                  <Palette className="h-4 w-4 mr-2" />
                  Products
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/templates" className="cursor-pointer">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Templates
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/features" className="cursor-pointer">
                    <Settings className="h-4 w-4 mr-2" />
                    Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/benefits" className="cursor-pointer">
                    <Info className="h-4 w-4 mr-2" />
                    Benefits
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="text-secondary-text hover:text-primary-text transition-colors cursor-pointer" aria-label="Pricing page">
              <DollarSign className="h-4 w-4 mr-1 inline" />
              Pricing
            </Link>

            {/* Support Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-secondary-text hover:text-primary-text transition-colors cursor-pointer" aria-label="Support menu">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Support
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/help" className="cursor-pointer">
                    <HelpCircle className="h-4 w-4 mr-2" />
                    Help Center
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/faq" className="cursor-pointer">
                    <Info className="h-4 w-4 mr-2" />
                    FAQ
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="cursor-pointer">
                    <User className="h-4 w-4 mr-2" />
                    Contact Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" className="cursor-pointer">
                    <Info className="h-4 w-4 mr-2" />
                    About
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <ThemeToggle aria-label="Toggle theme" />
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="ghost" size="sm" className="cursor-pointer" aria-label="Sign in">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleSignOut} className="cursor-pointer">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost" size="sm" className="cursor-pointer">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="cursor-pointer" aria-label="Get started">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle aria-label="Toggle theme" />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cursor-pointer"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-label="Close menu icon" />
              ) : (
                <Menu className="h-6 w-6" aria-label="Open menu icon" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border bg-card-background">
              <div className="px-3 py-2 text-sm font-semibold text-primary-text">Products</div>
              <Link
                href="/templates"
                className="text-secondary-text hover:text-primary-text block px-6 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Templates
              </Link>
              <Link
                href="/features"
                className="text-secondary-text hover:text-primary-text block px-6 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/benefits"
                className="text-secondary-text hover:text-primary-text block px-6 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link
                href="/pricing"
                className="text-secondary-text hover:text-primary-text block px-3 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <div className="px-3 py-2 text-sm font-semibold text-primary-text">Support</div>
              <Link
                href="/help"
                className="text-secondary-text hover:text-primary-text block px-6 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Help Center
              </Link>
              <Link
                href="/faq"
                className="text-secondary-text hover:text-primary-text block px-6 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-secondary-text hover:text-primary-text block px-6 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className="text-secondary-text hover:text-primary-text block px-6 py-2 text-base font-medium cursor-pointer transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {user ? (
                <div className="space-y-1 pt-4 border-t border-border">
                  <Link
                    href="/dashboard"
                    className="text-secondary-text hover:text-primary-text block px-3 py-2 text-base font-medium cursor-pointer transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="text-secondary-text hover:text-primary-text block px-3 py-2 text-base font-medium w-full text-left cursor-pointer transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="space-y-1 pt-4 border-t border-border">
                  <Link
                    href="/login"
                    className="text-secondary-text hover:text-primary-text block px-3 py-2 text-base font-medium cursor-pointer transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="bg-accent hover:bg-accent-hover text-white block px-3 py-2 text-base font-medium rounded-md cursor-pointer transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
