
import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Image from 'next/image';
import about4 from '@/assets/images/about/4.png';
import element6 from '@/assets/images/element/6.svg';

const Support = () => {
  return (
      <section className="bg-white lg:py-25 md:py-22.5 pt-17.5">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:gap-25 md:gap-7.5 gap-10">
            <div data-aos="fade-right" data-aos-duration={500} data-aos-easing="ease-in-out">
              <div className="lg:mb-12.5 md:mb-10 mb-6.5">
                <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl ">
                  Customer support and ticketing system{' '}
                </h2>
                <p className="text-base mb-2.5">
                  Gain valuable insights with our powerful analytics tools.{' '}
                </p>
              </div>
              <div className="flex gap-3.75 flex-col mb-9">
                <div className="flex  items-center gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6 text-black" />
                  <div>Improved usability </div>
                </div>
                <div className="flex  items-center gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6 text-black" />

                  <div>Quick learning curve </div>
                </div>
                <div className="flex  items-center gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6 text-black" />
                  <div>Reduced onboarding time </div>
                </div>
              </div>
              <div>
                <Link
                  href="/pricing-3"
                  className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                >
                  Explore features
                </Link>
              </div>
            </div>
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <Image src={about4} alt="" className="size-full rounded-2xl object-cover" />
              <Image
                src={element6}
                alt=""
                className="md:absolute md:w-62.5 md:rounded-2xl md:-bottom-5 md:-start-5 md:border border-neutral-200 md:block hidden"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Support;
