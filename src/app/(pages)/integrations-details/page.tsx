
import React from 'react';
import Hero from './component/Hero';
import Integrations from './component/Integrations';
import IntegrationsList from './component/IntegrationsList';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integratins-details | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
  return (
    <>
      
      <Hero />
      <Integrations />
      <IntegrationsList />
      
    </>
  );
};

export default Page;
