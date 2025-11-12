import React from 'react';
import Hero from './component/Hero';
import Value from './component/Value';
import Vision from './component/Vision';
import Team from './component/Team';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Value />
      <Vision />
      <Team />
    </>
  );
};

export default Page;
