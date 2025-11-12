import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Password Protected | SparkVerseAI',
};

const Page = () => {
  return (
    <section className="lg:py-25 md:py-22.5 py-17.5 md:h-dvh flex items-center">
      <div className="container">
        <div
          className="lg:w-150 md:w-7/10 mx-auto"
          data-aos="fade-up"
          data-aos-delay={150}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="bg-white md:p-10 p-5 rounded-2xl">
            <form action="" className="mb-3.75">
              <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">Protected Page </h1>
              <div className="mb-5">
                <label htmlFor="name" className="mb-2 block font-normal">
                  Password{' '}
                </label>
                <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="password"
                  data-name="Name"
                  placeholder="Enter Your Password"
                  type="text"
                  id="password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="md:h-14 w-full py-3.5 lg:px-7.5 px-6.5 text-center bg-primary  font-medium rounded-2xl text-black  transition-all duration-300 hover:bg-black hover:text-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
