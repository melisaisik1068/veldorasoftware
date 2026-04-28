import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import '../styles/tailwind.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Veldora Yazılım — Next.js & TypeScript Uzmanlığı',
  description:
    'Veldora Yazılım, 5 yıllık full-stack deneyimiyle Next.js 16 ve TypeScript ile ölçeklenebilir, mimari-kalitede yazılım çözümleri üretir.',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  openGraph: {
    title: 'Veldora Yazılım — Mimari Güç',
    description: 'Next.js 16 ve TypeScript ile kurumsal yazılım mimarisi.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
