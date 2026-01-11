import React from 'react';
import Contact from './component/Contact';
import Solution from './component/Solution';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | SparkVerseAI',
  description: 'Get in touch with the SparkVerseAI team to discuss your intelligent commerce needs or request a custom demo of our AI platform.',
  alternates: {
    canonical: 'https://www.sparkverse.ai/contact-us',
  },
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
