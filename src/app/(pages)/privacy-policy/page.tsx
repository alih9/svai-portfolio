import React from 'react';
import Hero from './component/Hero';
import PrivacyPolicy from './component/PrivacyPolicy';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Spark Verse AI',
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
