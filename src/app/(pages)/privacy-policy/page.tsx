
import React from 'react';
import Hero from './component/Hero';
import PrivacyPolicy from './component/PrivacyPolicy';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};


const Page = () => {
  return (
    <>
      
      <Hero />
      <PrivacyPolicy />
      
    </>
  );
};

export default Page;
