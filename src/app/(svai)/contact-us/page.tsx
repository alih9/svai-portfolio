import React from 'react';
import Contact from './component/Contact';
import Solution from './component/Solution';

import { Metadata } from 'next';
import AccelerateInnovation from '../component/AccelerateInnovation';

export const metadata: Metadata = {
  title: 'Contact Us | SparkVerse AI',
  description: 'Get in touch with the SparkVerse AI team to discuss your intelligent commerce needs or request a custom demo of our AI platform.',
  alternates: {
    canonical: 'https://www.sparkverse.ai/contact-us',
  },
};

const Page = () => {
  return (
    <>
      <Contact />
      <Solution />
      <AccelerateInnovation />

    </>
  );
};

export default Page;
