
import React from 'react';
import Pricing from './component/Pricing';
import Testimonial from './component/Testimonial';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing 3 | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
  return (
    <>
      
      <Pricing />
      <Testimonial />
      
    </>
  );
};

export default Page;
