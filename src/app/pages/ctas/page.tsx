import React from 'react';
import Hero from './component/Hero';
import Cta1 from './component/Cta1';
import Cta2 from './component/Cta2';
import Cta3 from './component/Cta3';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CTAs | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Cta1 />
      <Cta2 />
      <Cta3 />
    </>
  );
};

export default Page;
