import React from 'react';
import Hero from './component/Hero';
import Integrations from './component/Integrations';
import IntegrationsList from './component/IntegrationsList';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations Details | SparkVerseAI',
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
