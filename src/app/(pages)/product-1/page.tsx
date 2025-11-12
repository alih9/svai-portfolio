import React from 'react';
import Hero from './component/Hero';

import Feature from './component/Feature';
import UserManagement from './component/UserManagement';
import Templates from './component/Templates';
import Faq from './component/Faq';
import CTA from './component/CTA';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product 1 | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Feature />
      <UserManagement />
      <Templates />
      <Faq />
      <CTA />
    </>
  );
};

export default Page;
