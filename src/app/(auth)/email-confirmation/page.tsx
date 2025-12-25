import { currentYear } from '@/component/CurrentYear';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Confirmation | SparkVerseAI',
};

const Page = () => {
  return (
    <section className="bg-white lg:py-25 md:py-22.5 py-17.5 md:h-dvh flex items-center">
      <div className="container">
        <div
          className="lg:w-2/5 md:w-7/10 mx-auto"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="lg:mb-12.5 md:mb-10 mb-7.5 text-center">
            <h1 className=" md:text-5.5xl text-4xl">Email confirmation </h1>
            <p className="mb-2.5">We sent you a verification link via email. </p>
          </div>
          <div className="bg-body-bg md:p-10 p-5 rounded-2xl">
            <h2 className="text-2.5xl text-center">
              Thank you! Check your Email for a verification link.
            </h2>
          </div>
          <div className="flex justify-between md:gap-5 md:flex-row gap-2.5 flex-col mt-7.5 items-center">
            <Link href="/svai">
              {' '}
              {/* Desktop/tablet — full wordmark */}
              <Image
                src="/Logos/PNG/FINAL LOGO-01.png"
                alt="Logo"
                width={100}
                height={36}
                className="hidden sm:block h-9 w-auto"
              />
              {/* Mobile — short mark */}
              <Image
                src="/Logos/PNG/FINAL LOGO-02.png"
                alt="Logo"
                width={36}
                height={36}
                className="block sm:hidden h-9 w-auto"
              />
            </Link>
            <div className="text-sm">
              {currentYear}. Crafted with ❤️{' '}
              <Link href="" className="underline text-dark">
                Coderthemes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
