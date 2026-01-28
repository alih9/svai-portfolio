import React from 'react';
import Hero from './component/Hero';
import Features from './component/Features';
import Features2 from './component/Features2';
import Feature3 from './component/Features3';
import KeyFeatures from './component/KeyFeatures';
import Templates from './component/Templates';
import Highlight from './component/Highlight';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-Powered Commerce Search & Recommendations | SparkVerse AI',
  description: 'Explore SparkVerse AI’s intelligent commerce solutions, featuring privacy-first semantic search, AI-driven recommendations, and customizable AI agents.',
  alternates: {
    canonical: 'https://www.sparkverse.ai/products',
  },
};

const Page = () => {
  return (
    <>
      <Hero />
      <Features />
      <Features2 />
      <Feature3 />
      <KeyFeatures />
      <Templates />
      <Highlight />
    </>
  );
};

export default Page;
