import React from 'react';
import Hero from './component/Hero';
import Blog from './component/Blog';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | SparkVerseAI',
  description:
    'Explore the latest insights, updates, and research on semantic search, AI agents, and intelligent commerce from the SparkVerseAI team.',
  alternates: {
    canonical: 'https://www.sparkverse.ai/blog',
  },
  openGraph: {
    title: 'insights & Updates | SparkVerseAI Blog',
    description:
      'Explore the latest insights, updates, and research on semantic search, AI agents, and intelligent commerce.',
  },
};

const Page = () => {
  return (
    <>
      <Hero />
      <Blog />
    </>
  );
};

export default Page;
