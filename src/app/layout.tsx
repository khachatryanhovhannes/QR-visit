import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "QR Visit - Digital Business Cards",
  description: "Create, manage, and share your digital business card with QR codes. Professional networking made simple.",
  keywords: "digital business card, QR code, networking, contact sharing, professional profile",
  authors: [{ name: "QR Visit" }],
  openGraph: {
    title: "QR Visit - Digital Business Cards",
    description: "Create, manage, and share your digital business card with QR codes",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "QR Visit - Digital Business Cards",
    description: "Create, manage, and share your digital business card with QR codes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-primary-text transition-colors`}>
        <ThemeProvider defaultTheme="system" storageKey="qr-visit-theme">
          <AuthProvider>
            <div className="min-h-screen bg-background">
              <Header />
              <main>
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
