import React from 'react';
import Hero from './component/Hero';
import Choose from './component/Choose';
import Testimonial from './component/Testimonial';
import Client from './component/Client';
import UserStep from './component/UserStep';
import Blog from './component/Blog';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home 2 | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <Hero />
      <Choose />
      <Testimonial />
      <Client />
      <UserStep />
      <Blog />
    </>
  );
};

export default Page;
