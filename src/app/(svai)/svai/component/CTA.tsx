import Link from 'next/link';
import React from 'react';

const CTA = () => {
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
              <h2 className="lg:text-4xl md:text-[32px] text-2xl">Stay Ahead with SparkVerse AI</h2>
              <div className="mt-5 lg:mb-3.75">
                Get early access to feature updates, product releases, and insights on intelligent
                e-commerce.
              </div>
              <div>
                <form className="flex md:gap-5 md:flex-row gap-2.5 flex-col justify-between">
                  <div className="flex flex-col gap-2.5 w-3/4 justify-start items-start">
                    <input
                      className="py-2.5 px-5 rounded-2xl w-full bg-white border-neutral-200 h-14"
                      placeholder="info@example.com"
                    />
                    <p className="italic">We respect your privacy. No spam ever. </p>
                  </div>{' '}
                  <div className="text-center ">
                    <Link
                      href=""
                      className="md:h-14 py-3.5 px-7.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                    >
                      Join the Waitlist
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
