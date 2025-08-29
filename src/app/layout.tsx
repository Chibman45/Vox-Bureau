
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const siteConfig = {
  name: 'Vox Bureau',
  url: 'https://voxbureau.com',
  description:
    'Vox Bureau offers expert communication and institutional representation solutions tailored for high-level government bodies and national agencies.',
  ogImage: 'https://voxbureau.com/og-image.png', // Add a path to your OG image
  links: {
    twitter: 'https://twitter.com/voxbureau', // Add your Twitter handle
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Institutional Communication',
    'Government Representation',
    'Public Sector Advisory',
    'Stakeholder Engagement',
    'GRC Advisory',
    'Reputation Management',
  ],
  authors: [
    {
      name: 'Vox Bureau',
      url: siteConfig.url,
    },
  ],
  creator: 'Vox Bureau',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@voxbureau', // Add your Twitter handle
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head />
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
