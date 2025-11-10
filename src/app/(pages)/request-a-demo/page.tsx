import React from 'react';
import Request from './component/Request';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request Demo | Spark Verse AI',
};

const Page = () => {
  return (
    <>
      <Request />
    </>
  );
};

export default Page;
