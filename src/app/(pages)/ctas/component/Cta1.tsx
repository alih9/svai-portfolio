

import Link from 'next/link';
import React from 'react';

const Cta1 = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="bg-body-bg lg:py-17.5 lg:px-3.75 md:py-10 md:px-3.75 py-5 px-3.75 rounded-2xl">
            <div
              className="md:mx-auto md:w-7/10 text-center"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <h2 className="lg:text-4xl md:text-[32px] text-2xl">
                Take control of your future and elevate your success!
              </h2>
              <div className="mt-5 lg:mb-3.75">
                But I must explain to you how all this mistaken idea of denouncing.
              </div>
              <div className="lg:mt-11.25 mt-5 flex md:gap-5 gap-2.5 flex-row justify-center">
                <Link
                  href="/contact"
                  className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                >
                  Contact
                </Link>
                <Link
                  href="/request-a-demo"
                  className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-primary font-medium rounded-2xl text-black transition-all duration-300 hover:text-primary hover:bg-black"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta1;
