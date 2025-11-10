import React from 'react';
import Hero from './component/Hero';
import Client from './component/Client';
import Support from './component/Support';
import Testimonial from './component/Testimonial';
import Feature from './component/Feature';
import Highlight from './component/Highlight';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product 2 | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Client />
      <Support />
      <Testimonial />
      <Feature />
      <Highlight />
    </>
  );
};

export default Page;
