
import React from 'react';
import Hero from './component/Hero';
import Hero1 from './component/Hero1';
import Hero2 from './component/Hero2';
import Hero3 from './component/Hero3';
import Hero4 from './component/Hero4';
import Hero5 from './component/Hero5';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hero | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
  return (
    <>
      
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
      
    </>
  );
};

export default Page;
