import React from 'react';
import Hero from './component/Hero';
import Team from './component/Team';
import Testimonial from './component/Testimonial';
import KeyFeatures from './component/KeyFeatures';
import Highlight from './component/Highlight';
import Feature from './component/Feature';
import Pricing from './component/Pricing';
import CTA from './component/CTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home 3 | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Highlight />
      <Team />
      <Testimonial />
      <KeyFeatures />
      <Feature />
      <Pricing />
      <CTA />
    </>
  );
};

export default Page;
