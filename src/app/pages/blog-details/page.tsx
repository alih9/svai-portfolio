import React from 'react';
import BlogDetails from './component/BlogDetails';
import Blog from './component/Blog';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Details | SparkVerseAI',
};

const Page = () => {
  return (
    <>
      <BlogDetails />
      <Blog />
    </>
  );
};

export default Page;
