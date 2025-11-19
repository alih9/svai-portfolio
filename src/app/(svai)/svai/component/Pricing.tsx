import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import three from '@/assets/images/about/3.png';
import one from '@/assets/images/element/1.svg';
import IconifyIconClient from '@/component/IconifyIconClient';

const Pricing = () => {
  return (
    <>
      <section
        className="lg:py-25 md:py-22.5 py-17.5"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-36.5 gap-7.5">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="300"
              data-aos-easing="ease-in-out"
            >
              <div className="lg:mb-12.5 mb-7.5">
                <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                  Unlock premium features{' '}
                </div>
                <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
                  Accelerate Innovation with Generative AI Integration
                </h2>
              </div>

              <div className="flex md:justify-start gap-2.5 mt-10 flex-wrap justify-start">
                <div className="gap-1 flex">
                  <div className="text-dark fs-base">
                    SparkVerse AI connects with your existing data and technology ecosystem to
                    deliver creative automation, natural language interfaces and intelligent
                    recommendations that scale with your business.
                  </div>
                </div>
                <Link href="/pricing-2" className="flex items-center gap-1.5 text-dark font-medium">
                  <div className="underline gap-1">Visit Pricing</div>
                  <IconifyIconClient icon="tabler:arrow-right" className="size-6" />
                </Link>
              </div>
            </div>

            <div>
              <div className="grid lg:grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-5 gap-5">
                <div
                  className="lg:p-12.5 p-5 bg-white rounded-2xl md:gap-24 lg:block flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="600"
                  data-aos-easing="ease-in-out"
                >
                  <div>
                    <div className="gap-5 flex items-center mb-7.5">
                      <div className="lg:size-13.5 size-12.5 bg-dark rounded-full flex items-center justify-center ">
                        <IconifyIconClient
                          icon="solar:fire-outline"
                          className="lg:size-7.5 size-6.5 text-primary"
                        />
                      </div>
                      <h3 className="text-1.5xl ">Custom plan </h3>
                    </div>

                    <div className="mb-7.5">
                      Designed for large organizations requiring custom solutions.
                    </div>
                  </div>

                  <div>
                    <Link
                      href="/contact"
                      className="py-3.5 lg:px-7.5 px-6.5 block text-center bg-primary font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-black hover:text-primary"
                    >
                      Talk to an AI Integration Expert
                    </Link>
                  </div>
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
