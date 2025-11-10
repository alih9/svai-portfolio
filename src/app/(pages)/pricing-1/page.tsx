import React from 'react';
import Hero from './component/Hero';
import Review from './component/Review';
import Faq from './component/Faq';
import CTA from './component/CTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing 1 | Spark Verse AI',
};

const Page = () => {
  return (
    <div>
      <Hero />
      <Review />
      <Faq />
      <CTA />
    </div>
  );
};

export default Page;
