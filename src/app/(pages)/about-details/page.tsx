
import React from 'react';
import About from './component/About';
import TeamInfo from './component/TeamInfo';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Details | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};


const Page = () => {
  return (
    <>
      
      <About />
      <TeamInfo />
      
    </>
  );
};

export default Page;
