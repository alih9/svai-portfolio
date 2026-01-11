import React from 'react';
import Hero from './component/Hero';
import Statistics1 from './component/Statistics1';
import Statistics2 from './component/Statistics2';
import Statistics3 from './component/Statistics3';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Research | SparkVerseAI',
  description: 'Discover the research and engineering behind SparkVerseAI, from semantic data models to high-performance AI deployment strategies.',
  alternates: {
    canonical: 'https://www.sparkverse.ai/research',
  },
};

const Page = () => {
  return (
    <>
      <Hero />
      <Statistics1 />
      <Statistics2 />
      <Statistics3 />
    </>
  );
};

export default Page;
