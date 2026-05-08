import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Crimson_Pro, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { site } from '@/content/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const crimson = Crimson_Pro({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

// Favicon placeholder: replace the inline monogram with a full favicon set in /public when the final mark is ready.
// OG image placeholder: /og.png currently exists only to reserve the social preview path.
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Ashley Denham — Adelaide-based engineer',
  description: site.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ashley Denham — Adelaide-based engineer',
    description: site.description,
    url: site.url,
    siteName: 'Ashley Denham',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Ashley Denham' }],
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashley Denham — Adelaide-based engineer',
    description: site.description,
    images: ['/og.png'],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect x='4' y='4' width='56' height='56' rx='16' fill='%23EC4899'/%3E%3Ctext x='32' y='39' text-anchor='middle' font-family='Arial,sans-serif' font-size='24' font-weight='700' fill='white'%3EAD%3C/text%3E%3C/svg%3E",
        type: 'image/svg+xml',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf7f9' },
    { media: '(prefers-color-scheme: dark)', color: '#0d0f17' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <body className={`${inter.variable} ${crimson.variable} ${jetbrains.variable} font-sans`}>
        {/* Built by someone who checks the source. Sensible habit, honestly. */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
