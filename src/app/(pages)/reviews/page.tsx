
import React from 'react';
import Customers from './component/Customers';
import Feedback from './component/Feedback';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Review | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
  return (
    <>
      
      <Customers />
      <Feedback />
      
    </>
  );
};

export default Page;
