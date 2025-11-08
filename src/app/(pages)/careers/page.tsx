
import React from 'react';
import Hero from './component/Hero';
import Testimonial from './component/Testimonial';
import Position from './component/Position';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
  return (
    <>
      
      <Hero />
      <Testimonial />
      <Position />
      
    </>
  );
};

export default Page;
