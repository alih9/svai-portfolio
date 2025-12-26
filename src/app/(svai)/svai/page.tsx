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
  title: 'SparkVerseAI - Intelligent Knowledge Hub',
  description:
    'Turn fragmented data into intelligent action with SparkVerseAI. The privacy-first semantic search and intelligent experience platform for modern commerce.',
  alternates: {
    canonical: 'https://www.sparkverse.ai/svai',
  },
  openGraph: {
    title: 'SparkVerseAI - Intelligent Knowledge Hub',
    description:
      'Turn fragmented data into intelligent action with SparkVerseAI. The privacy-first semantic search and intelligent experience platform for modern commerce.',
    images: [
      {
        url: '/Logos/PNG/FINAL LOGO-02.png',
        width: 1200,
        height: 630,
        alt: 'SparkVerseAI Dashboard',
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
      name: 'SparkVerseAI',
      url: 'https://www.sparkverse.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.sparkverse.ai/Logos/PNG/FINAL%20LOGO-02.png',
      },
      sameAs: [
        'https://twitter.com/sparkverseai',
        'https://www.linkedin.com/company/sparkverseai',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.sparkverse.ai/#website',
      url: 'https://www.sparkverse.ai',
      name: 'SparkVerseAI',
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
