import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { currentYear } from '@/component/CurrentYear';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | SparkVerse AI',
};

const Page = () => {
  return (
    <section className="bg-white lg:py-25 md:py-22.5 py-17.5 md:h-dvh flex items-center">
      <div className="container">
        <div
          className="lg:w-4/10 md:w-7/10 mx-auto"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="lg:mb-12.5 md:mb-10 mb-7.5 text-center">
            <h1 className="lg:text-6xl md:text-5.5xl text-4xl">Sign up </h1>
            <p className="mb-2.5">Create an account and start using SparkVerse AI. </p>
          </div>
          <div className="bg-body-bg md:p-10 p-5 rounded-2xl">
            <form action="" className="mb-3.75">
              <div className="mb-5">
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Name
                </label>
                <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="Your name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Email
                </label>
                <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="email"
                  data-name="Name"
                  placeholder="Your email"
                  type="text"
                  id="email"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Password{' '}
                </label>
                <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="Password"
                  type="text"
                  id="name"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="md:h-14 w-full py-3.5 lg:px-7.5 px-6.5 text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div>
              <p>
                Already have an account?{' '}
                <Link href="/log-in" className="underline text-dark">
                  log in
                </Link>{' '}
              </p>
            </div>
          </div>
          <div className="flex justify-between md:gap-5 md:flex-row gap-2.5 flex-col mt-7.5 items-center">
            <Link href="/home-1">
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
