import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';

const Pricing = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid md:grid-cols-2 md:gap-15 items-center gap-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div>
              <div className="mb-7.5">
                <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">Basic plan </h1>
                <p className="mb-2.5">Essential features for small teams and individuals </p>
              </div>
              <div className="mb-3.75">
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Plan Duration{' '}
                </label>
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-neutral-200 w-full h-14 rounded-2xl mb-5 p-4 pr-12"
                    defaultValue=""
                  >
                    <option value="selectall">Select Plan Duration</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>

                  <div className="pointer-events-none absolute right-4 top-6.5 -translate-y-1/2 text-gray-400">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <Link
                  href=""
                  className="py-3.5 md:px-7.5 px-6 block text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:bg-black hover:text-primary"
                >
                  Add to cart
                </Link>
              </div>
            </div>
            <div className="bg-white lg:p-10 md:p-7.5 p-5 rounded-2xl">
              <h4 className="mb-2.5 md:text-3.4xl text-2.6xl">$ 25.00 USD </h4>
              <div className="flex gap-3.75 flex-col mt-7.5">
                <div className="flex gap-2.5 ">
                  <IconifyIconClient icon="tabler:circle-check" className="size-4.5 mt-0.5" />
                  <p className="text-base">Basic reporting and analytics </p>
                </div>
                <div className="flex gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-4.5 mt-0.5" />
                  <p className="text-base">Limited number of users </p>
                </div>
                <div className="flex gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-4.5 mt-0.5" />
                  <p className="text-base">Basic customer support </p>
                </div>
                <div className="flex gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-4.5 mt-0.5" />
                  <p className="text-base">Standard functionality </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
