import React from 'react';
import Hero from './component/Hero';
import Features from './component/Features';
import Step from './component/Step';
import Pricing from './component/Pricing';
import Counter from './component/Counter';
import Testimonial from './component/Testimonial';

import CTA from './component/CTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Features />
      <Step />
      <Pricing />
      <Counter />
      <Testimonial />
      <CTA />
    </>
  );
};

export default Page;
