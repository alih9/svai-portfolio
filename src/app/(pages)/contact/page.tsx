import React from 'react';
import Contact from './component/Contact';
import Solution from './component/Solution';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Contact />
      <Solution />
    </>
  );
};

export default Page;
