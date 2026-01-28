import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error 404 | SparkVerse AI',
};

const Page = () => {
  return (
    <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5 md:h-dvh flex items-center">
      <div className="container">
        <div
          className="lg:w-1/2 md:w-7/10 mx-auto"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="bg-white lg:p-15 md:p-10 p-5 rounded-2xl text-center">
            <h1 className="md:text-5.6xl text-5.7xl">404</h1>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Page Not Found </h2>
            <p className="mb-10">The page you are looking for doesn't exist or has been moved </p>
            <Link href="/">
              <button
                type="submit"
                className="md:h-14 w-full py-3.5 lg:px-7.5 px-6.5 text-center bg-primary font-medium rounded-2xl text-black transition-all duration-300 hover:text-primary hover:bg-dark"
              >
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
