import React from 'react';
import BlogDetails from './component/BlogDetails';
import Blog from './component/Blog';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Details | Spark Verse AI',
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
