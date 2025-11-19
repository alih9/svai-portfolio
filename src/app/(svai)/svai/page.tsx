import React from 'react';
import Hero from './component/Hero';
import Features from './component/Features';
import CoreOfferings from './component/CoreOfferings';
import Step from './component/Step';
import IntegrateAnywhere from './component/IntegrateAnywhere';

import CTA from './component/CTA';
import HowItWorks from './component/HowItWorks';
import Pricing from './component/Pricing';

import { Metadata } from 'next';
import SuccessStories from './component/SuccessStories';

export const metadata: Metadata = {
  title: 'Home | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <CoreOfferings />
      <Step />
      <Features />
      <IntegrateAnywhere />
      <SuccessStories />
      <HowItWorks />
      <Pricing />
      <CTA />
    </>
  );
};

export default Page;
