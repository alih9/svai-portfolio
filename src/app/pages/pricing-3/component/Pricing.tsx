import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

const Pricing = () => {
  return (
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="lg:w-5/10 mx-auto md:w-4/5 md:p-12.5 py-7.5 px-5 bg-white rounded-2xl text-center"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div>
              <h1 className="mb-2.5 lg:text-4xl md:text-3.4xl text-2.6xl">Price</h1>
              <h2 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">$10.50 </h2>
              <p className="mb-9">per product / per month </p>
              <Link
                href="/contact"
                className="mb-7 py-6.25 md:px-7.5 px-6.5 block text-center bg-dark font-medium rounded-2xl text-white  transition-all duration-300 hover:text-primary hover:bg-black"
              >
                Sign up
              </Link>
            </div>
            <p className="mb-2.5">14-days free trial. No credit card required. </p>
            <div className="md:mt-15 mt-7.5">
              <h3 className="mb-2.5 md:text-2.5xl text-1.5xl"> What's included? </h3>
              <div className="mt-5 inline-block">
                <div className="flex gap-2.5 mb-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-5 mt-0.5 text-black" />
                  <p className="text-base">Advanced AI chatbot features </p>
                </div>
                <div className="flex gap-2.5 mb-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-5 mt-0.5 text-black" />
                  <p className="text-base">Up to 50K monthly chat interactions </p>
                </div>
                <div className="flex gap-2.5 mb-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-5 mt-0.5 text-black" />
                  <p className="text-base">Priority email and chat support </p>
                </div>
                <div className="flex gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-5 mt-0.5 text-black" />
                  <p className="text-base">Advanced integrations </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Pricing;
