

import Image from 'next/image';
import React from 'react';
import about from '@/assets/images/about/9.png';
import element3 from '@/assets/images/element/3.svg';
import Link from 'next/link';

const Features = () => {
  return (
    <>
      <section className="bg-white py-17.5 lg:py-25 md:py-22.5">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:gap-25 md:gap-12.5 gap-7.5 items-center">
            <div data-aos="fade-right" data-aos-duration={500} data-aos-easing="ease-in-out">
              <div className="relative">
                <Image src={about} alt="" className="rounded-2xl" />
                <Image
                  src={element3}
                  alt=""
                  className="md:absolute border border-neutral-200 md:block md:-end-5 md:-bottom-7.5 md:w-68.75 md:rounded-2xl hidden"
                />
              </div>
            </div>
            <div data-aos="fade-left" data-aos-duration={500} data-aos-easing="ease-in-out">
              <div className="md:mb-12.5 mb-7.5">
                <h2 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5 text-black font-bold">Robust analytics</h2>
                <p className="mb-2.5">
                  Gain valuable insights with our powerful analytics tools.Track key
                  metrics,generate detailed reports, and make data-driven decisions to drive your
                  business forward.
                </p>
              </div>
              <Link
                href="/sign-up"
                className="py-3.5 px-7.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
