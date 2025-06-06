import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { WhatsAppButton } from '@/components/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '  About Kedar Krushi Seva Kendra - Premium Agricultural Solutions |Chandrakant Kshirsagar',
  description: 'Leading agricultural shop in Chhatrapati Sambhajinagar offering quality insecticides, herbicides, fungicides, and seeds. Expert guidance for farmers with premium products.',
  keywords: 'agriculture, farming, pesticides, insecticides, herbicides, fungicides, seeds, fertilizers, Aurangabad, Sambhajinagar, Maharashtra',
  authors: [{ name: ' Chandrakant Kshirsagar' }],
  creator: '  About Kedar Krushi Seva Kendra',
  publisher: '  About Kedar Krushi Seva Kendra',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourshopname.com',
    title: '  About Kedar Krushi Seva Kendra - Premium Agricultural Solutions',
    description: 'Leading agricultural shop offering quality farming products and expert guidance.',
    siteName: '  About Kedar Krushi Seva Kendra',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: '  About Kedar Krushi Seva Kendra - Agricultural Solutions',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '  About Kedar Krushi Seva Kendra - Premium Agricultural Solutions',
    description: 'Leading agricultural shop offering quality farming products and expert guidance.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}