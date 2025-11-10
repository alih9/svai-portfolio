import React from 'react';
import Hero from './component/Hero';
import Integrations from './component/Integrations';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integration | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Integrations />
    </>
  );
};

export default Page;
