
import React from 'react';
import Hero from './component/Hero';
import Payments from './component/Payments';
import Counter from './component/Counter';
import About from './component/About';
import Faq from './component/Faq';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product 3 | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
  return (
    <>
      
      <Hero />
      <Payments />
      <Counter />
      <About />
      <Faq />
      
    </>
  );
};

export default Page;
