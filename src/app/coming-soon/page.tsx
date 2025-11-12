import React from 'react';
import ComingSoon from './ComingSoon';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <ComingSoon />
    </>
  );
};

export default Page;
