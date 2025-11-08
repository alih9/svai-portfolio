
import React from 'react';
import Pricing from './component/Pricing';
import Review from './component/Review';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Details | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
  return (
    <>
      
      <Pricing />
      <Review />
      
    </>
  );
};

export default Page;
