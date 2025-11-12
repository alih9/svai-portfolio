import React from 'react';
import Cta from './component/Cta';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Link in Bio | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <Cta />
    </>
  );
};

export default Page;
