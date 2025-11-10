import React from 'react';
import Career from './component/Career';
import CareerInfo from './component/CareerInfo';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Details | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Career />
      <CareerInfo />
    </>
  );
};

export default Page;
