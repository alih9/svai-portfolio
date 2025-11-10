import React from 'react';
import Hero from './component/Hero';
import Faq from './component/Faq';
import Contact from './component/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Faq />
      <Contact />
    </>
  );
};

export default Page;
