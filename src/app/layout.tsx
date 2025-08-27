import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Vox-P',
  description:
    'Expert communication and institutional representation solutions for high-level government bodies and national agencies.',
};

export default function RootLayout({
  children,
  params,
  searchParams,
}: Readonly<{
  children: React.ReactNode;
  params: {};
  searchParams: {};
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
