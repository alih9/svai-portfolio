import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AppProvidersWrapper from '@/component/wrappers/AppProvidersWrapper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import './style.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SparkVerseAI',
  description:
    'SparkVerseAI — privacy-first semantic search and intelligent experiences for modern commerce.',
  keywords:
    'SparkVerseAI, semantic search, ecommerce search, recommendations, personalization, analytics, privacy-first, hybrid deployments',
  icons: {
    icon: [
      { url: '/Logos/PNG/FINAL LOGO-02.png', type: 'image/png', sizes: '32x32' },
      { url: '/Logos/PNG/FINAL LOGO-02.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/Logos/PNG/FINAL LOGO-02.png',
    shortcut: '/Logos/PNG/FINAL LOGO-02.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.variable}>
        {children}
        <AppProvidersWrapper />
      </body>
    </html>
  );
}
