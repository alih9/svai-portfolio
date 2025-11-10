import React from 'react';
import Hero from './component/Hero';
import Card from './component/Card';
import Card2 from './component/Card2';
import Card3 from './component/Card3';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cards | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Card />
      <Card2 />
      <Card3 />
    </>
  );
};

export default Page;
