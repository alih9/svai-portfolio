

import React from 'react';
import blog1 from '@/assets/images/blog/6.png';
import blog2 from '@/assets/images/blog/1.png';
import blog3 from '@/assets/images/blog/2.png';
import blog4 from '@/assets/images/blog/3.png';
import blog5 from '@/assets/images/blog/4.png';
import blog6 from '@/assets/images/blog/5.png';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';

type BlogItem = {
  id: number;
  date: string;
  title: string;
  image: StaticImageData;
  link: string;
};

const blogData: BlogItem[] = [
  {
    id: 1,
    date: 'August 6, 2024',
    title: 'Bad habits that people in the industry need',
    image: blog1,
    link: '/blog-details',
  },
  {
    id: 2,
    date: 'September 4, 2024',
    title: 'Starting and growing a career in web design',
    image: blog2,
    link: '/blog-details',
  },
  {
    id: 3,
    date: 'September 4, 2024',
    title: 'Create a landing page that performs great',
    image: blog3,
    link: '/blog-details',
  },
  {
    id: 4,
    date: 'September 4, 2024',
    title: 'How can designers prepare for the future',
    image: blog4,
    link: '/blog-details',
  },
  {
    id: 5,
    date: 'September 4, 2024',
    title: 'Building a navigation component with variables',
    image: blog5,
    link: '/blog-details',
  },
  {
    id: 6,
    date: 'September 4, 2024',
    title: 'How to create an effective design portfolio',
    image: blog6,
    link: '/blog-details',
  },
];

const Blog = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid md:grid-cols-3 lg:gap-12.5 md:gap-5 gap-10"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            {blogData.map(item => (
              <Link key={item.id} href={item.link}>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={item.image}
                    alt=""
                    className="duration-300 hover:scale-105 transition-all"
                  />
                </div>
                <div className="md:mt-5 mt-2.5">
                  <p className="text-dark">{item.date}</p>
                  <h2 className="text-2xl md:mt-2.5 mt-1.25">{item.title}</h2>
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
