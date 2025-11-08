

import Image from 'next/image';
import React from 'react';
import Hero2 from '@/assets/images/hero/2.png';
import About3 from '@/assets/images/about/3.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-3 lg:gap-5 gap-10">
            <div data-aos="fade-right" data-aos-duration={600} data-aos-easing="ease-in-out">
              <Image
                src={Hero2}
                alt=""
                className="lg:w-67.5 lg:h-75 w-full md:h-117.5 h-70 rounded-2xl object-cover"
              />
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                Careers{' '}
              </div>
              <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">Join our team </h1>
              <p className="mb-7.5">
                My its middle the people a to of about he I every exploration he country than it of
                and of who blue out of something.
              </p>
              <Link
                href=""
                className="py-3.5 md:px-7.5 px-6 inline-flex bg-white font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary"
              >
                See open position
              </Link>
            </div>
            <div
              className="flex lg:justify-self-end"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <Image
                src={About3}
                alt=""
                className="lg:w-57.5 lg:h-60 w-full md:h-102.5 h-70 rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
