
import React from 'react';
import Pricing from './component/Pricing';
import Faq from './component/Faq';
import CTA from './component/CTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing 2 | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
  return (
    <>
      
      <Pricing />
      <Faq />
      <CTA />
      
    </>
  );
};

export default Page;
