import React from 'react';
import Hero from './component/Hero';
import Features from './component/Features';
import CoreOfferings from './component/CoreOfferings';
import SolutionsThatDrive from './component/SolutionsThatDrive';
import IntegrateAnywhere from './component/IntegrateAnywhere';
import AccelerateInnovation from './component/AccelerateInnovation';
import HowItWorks from './component/HowItWorks';
import CTA from './component/CTA';
import KnowledgeHub from './component/KnowledgeHub';

import { Metadata } from 'next';
import SuccessStories from './component/SuccessStories';

export const metadata: Metadata = {
  title: 'SparkVerse AI - Intelligent Knowledge Hub',
  description:
    'Turn fragmented data into intelligent action with SparkVerse AI. The privacy-first semantic search and intelligent experience platform for modern commerce.',
  alternates: {
    canonical: 'https://www.sparkverse.ai',
  },
  openGraph: {
    title: 'SparkVerse AI - Intelligent Knowledge Hub',
    description:
      'Turn fragmented data into intelligent action with SparkVerse AI. The privacy-first semantic search and intelligent experience platform for modern commerce.',
    images: [
      {
        url: '/Logos/PNG/FINAL LOGO-02.png',
        width: 1200,
        height: 630,
        alt: 'SparkVerse AI Dashboard',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.sparkverse.ai/#organization',
      name: 'SparkVerse AI',
      url: 'https://www.sparkverse.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sparkverse.ai/Logos/PNG/FINAL%20LOGO-02.png',
      },
      sameAs: [
        'https://twitter.com/SparkVerse AI',
        'https://www.linkedin.com/company/SparkVerse AI',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.sparkverse.ai/#website',
      url: 'https://www.sparkverse.ai',
      name: 'SparkVerse AI',
      publisher: {
        '@id': 'https://www.sparkverse.ai/#organization',
      },
    },
  ],
};

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <CoreOfferings />
      <KnowledgeHub />
      <SolutionsThatDrive />
      <Features />
      <IntegrateAnywhere />
      <HowItWorks />
      <SuccessStories />
      <AccelerateInnovation />
      <CTA />
    </>
  );
};

export default Page;
