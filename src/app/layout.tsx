import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import '../styles/tailwind.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'African Roots Transformation — Agroecology & Community Resilience',
  description: 'ART is a Kenya-based nonprofit advancing agroecology, food sovereignty, and social justice through locally led community programs across Africa.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'African Roots Transformation (ART)',
    description: 'Nurturing Communities. Transforming Lives. Sustaining Futures.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}