import React from 'react';
import Hero from './component/Hero';
import Features from './component/Features';
import CoreOfferings from './component/CoreOfferings';
import SolutionsThatDrive from './component/SolutionsThatDrive';
import IntegrateAnywhere from './component/IntegrateAnywhere';
import AccelerateInnovation from './component/AccelerateInnovation';
import HowItWorks from './component/HowItWorks';
import CTA from './component/CTA';
import KnowledgeHub from './component/KnowledgeHub';

import { Metadata } from 'next';
import SuccessStories from './component/SuccessStories';

export const metadata: Metadata = {
  title: 'Home | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <CoreOfferings />
      <KnowledgeHub />
      <SolutionsThatDrive />
      <Features />
      <IntegrateAnywhere />
      <HowItWorks />
      <SuccessStories />
      <AccelerateInnovation />
      <CTA />
    </>
  );
};

export default Page;
