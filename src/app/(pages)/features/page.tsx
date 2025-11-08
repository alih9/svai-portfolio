
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
  title: 'Features | Landinger - Multipurpose Tailwind CSS Landing Page Template',
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
