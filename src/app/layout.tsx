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
  metadataBase: new URL('https://www.sparkverse.ai'),
  title: {
    default: 'SparkVerseAI - Intelligent Knowledge Hub',
    template: '%s | SparkVerseAI',
  },
  description:
    'SparkVerseAI — privacy-first semantic search and intelligent experiences for modern commerce. Turn fragmented data into intelligent action.',
  keywords:
    'SparkVerseAI, semantic search, ecommerce search, recommendations, personalization, analytics, privacy-first, hybrid deployments, AI agents, knowledge hub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'SparkVerseAI',
    title: 'SparkVerseAI - Intelligent Knowledge Hub',
    description: 'Privacy-first semantic search and intelligent experiences for modern commerce.',
    images: [
      {
        url: '/Logos/PNG/FINAL LOGO-02.png', // Ideally should be a larger specialized OG image
        width: 1200,
        height: 630,
        alt: 'SparkVerseAI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SparkVerseAI - Intelligent Knowledge Hub',
    description: 'Privacy-first semantic search and intelligent experiences for modern commerce.',
    images: ['/Logos/PNG/FINAL LOGO-02.png'],
    creator: '@sparkverseai', // Placeholder, verify if exists
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
