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
    title: 'Landinger - Multipurpose Tailwind CSS Landing Page Template',
    description: 'Landinger - Full-featured, professional-looking software, saas and startup website template. Multipurpose Tailwind CSS Landing Page Template',
    keywords: 'saas, saas template, site template, software, startup, digital product, html5, tailwindcss landing, marketing, tailwindcss, agency, digital agency, it solutions, vitejs'
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap" rel="stylesheet" />
            </head>
            <body className={inter.variable}>
                {children}
                <AppProvidersWrapper />
            </body>
        </html>
    );
}
