import React from 'react';
import { Metadata } from 'next';
import Hero from './component/Hero';
import SecurityStrip from './component/SecurityStrip';
import Integrations from './component/Integrations';
import Offerings from './component/Offerings';
import Solutions from './component/Solutions';
import Trusted from './component/Trusted';
import Newsletter from './component/Newsletter';
import CTA from './component/CTA';

export const metadata: Metadata = {
  title: 'SVAI | Spark Verse AI',
  description: 'Spark Verse AI — Smarter Search. Safer Data. Seamless Experience.',
};

const Page = () => {
  return (
    <>
      {/* Mindmap root — page composed using theme-like section components */}
      <Hero />
      <SecurityStrip />
      <Integrations />
      <Offerings />
      <Solutions />
      <Trusted />
      <Newsletter />
      <CTA />
    </>
  );
};

export default Page;
