

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blog1 from '@/assets/images/blog/1.png';
import blog2 from '@/assets/images/blog/2.png';
import blog3 from '@/assets/images/blog/3.png';

type BlogItem = {
  id: number;
  date: string;
  title: string;
  image: any;
  link: string;
};

const blogData: BlogItem[] = [
  {
    id: 1,
    date: 'September 4, 2024',
    title: 'Starting and growing a career in web design',
    image: blog1,
    link: '/blog-details',
  },
  {
    id: 2,
    date: 'September 4, 2024',
    title: 'Create a landing page that performs great',
    image: blog2,
    link: '/blog-details',
  },
  {
    id: 3,
    date: 'September 4, 2024',
    title: 'How can designers prepare for the future',
    image: blog3,
    link: '/blog-details',
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-white lg:pb-25 md:pb-12.5 pb-7.5">
        <div className="container">
          <h2 className="text-center mb-10 lg:text-5.5xl md:text-4.6xl text-3.4xl">More blog</h2>
          <div className="grid md:grid-cols-3 lg:gap-12.5 md:gap-5 gap-10">
            {blogData.map(item => (
              <Link href={item.link} key={item.id}>
                <div>
                  <div className="overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="duration-300 hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="md:mt-5 mt-2.5">
                    <p className="text-dark">{item.date}</p>
                    <h2 className="text-2xl md:mt-2.5 mt-1.25">{item.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
