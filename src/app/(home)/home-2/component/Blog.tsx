import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import Blog1 from '@/assets/images/blog/1.png';
import Blog2 from '@/assets/images/blog/2.png';
import Blog6 from '@/assets/images/blog/6.png';

type BlogItem = {
  image: StaticImageData;
  date: string;
  title: string;
  link: string;
};

const blogData: BlogItem[] = [
  {
    image: Blog6,
    date: 'August 6, 2024',
    title: 'Bad habits that people in the industry need',
    link: '/blog-details',
  },
  {
    image: Blog1,
    date: 'September 4, 2024',
    title: 'Starting and growing a career in web design',
    link: '/blog-details',
  },
  {
    image: Blog2,
    date: 'September 4, 2024',
    title: 'Create a landing page that performs great',
    link: '/blog-details',
  },
];

const Blog = () => {
  return (
    <section className="bg-white lg:py-25 py-17.5">
      <div className="container">
        <div
          className="lg:mb-12.5 text-center mb-7.5"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl text-3.4xl">Our latest articles</h2>
          <p className="text-base mb-2.5">
            Real stories of success and satisfaction from businesses using SparkVerseAI.
          </p>
        </div>

        <div
          className="grid md:grid-cols-3 lg:gap-12.5 md:gap-5 gap-10"
          data-aos="fade-up"
          data-aos-duration={600}
          data-aos-easing="ease-in-out"
        >
          {blogData.map((item, idx) => (
            <Link key={idx} href={item.link}>
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
  );
};

export default Blog;
