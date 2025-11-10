import React from 'react';
import Hero from './component/Hero';
import Blog from './component/Blog';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Blog />
    </>
  );
};

export default Page;
