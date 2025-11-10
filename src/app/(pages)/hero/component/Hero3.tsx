

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import about from '@/assets/images/about/12.png';
import element from '@/assets/images/element/8.svg';

const Hero3 = () => {
  return (
    <>
      <section className="bg-primary lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid lg:grid-cols-5 lg:gap-17.5 mb-12.5 gap-7.5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="lg:col-span-3">
              <h1 className="lg:text-6xl md:text-5.5xl mb-2.5 text-4xl">
                Empower your business with Spark Verse AI
              </h1>
              <p className="mb-2.5">
                Revolutionize your operations with our comprehensive, intuitive SaaS platform.
              </p>
            </div>
            <div className="lg:col-span-2">
              <form className="flex lg:gap-5 md:gap-5 gap-2.5 md:flex-row flex-col mb-1.25">
                <input
                  className="py-2.5 px-5 rounded-2xl bg-white border-neutral-200 h-14 w-full"
                  placeholder="hello@example.com"
                />
                <div className="lg:text-center">
                  <Link
                    href=""
                    className="py-3.5 px-7.5 inline-flex whitespace-nowrap items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                  >
                    Get Started
                  </Link>
                </div>
              </form>
              <p className="text-sm">
                By clicking 'Get Started' you agree to the{' '}
                <Link href="/privacy-policy" className="text-black underline">
                  Terms of use
                </Link>
              </p>
            </div>
          </div>
          <div className="relative">
            <Image src={about} alt="" className="size-full rounded-2xl" />
            <Image
              src={element}
              alt=""
              className="md:absolute md:block md:end-7.5 md:bottom-6.25 hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero3;
