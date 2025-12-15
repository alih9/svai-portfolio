import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

const Card = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="lg:mb-10 lg:mx-auto text-center lg:w-1/2 mb-10"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Why choose SparkVerseAI?
            </h2>
            <p className="text-base mb-2.5">
              Discover how SparkVerseAI can transform your business operations with our innovative
              features.{' '}
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:gap-15 md:gap-5  gap-5">
            <div
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <div className="bg-body-bg lg:p-10 md:p-5 p-5 rounded-2xl">
                <div className="flex lg:gap-20 md:gap-10 md:flex-col flex-col gap-5">
                  <div className="size-17.5 bg-dark rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="solar:bolt-linear" className="size-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-1.5xl mb-2.5">Comprehensive analytics</h3>
                    <p>Gain deep insights into your business performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <div className="bg-body-bg lg:p-10 md:p-5 p-5 rounded-2xl">
                <div className="flex lg:gap-20 md:gap-10 md:flex-col flex-col  gap-5">
                  <div className="size-17.5  bg-dark rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient
                      icon="solar:lightbulb-outline"
                      className="size-7 text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-1.5xl mb-2.5">Seamless Integrations </h3>
                    <p>Gain deep insights into your business performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <div className="bg-body-bg lg:p-10 md:p-5 p-5 rounded-2xl">
                <div className="flex lg:gap-20 md:gap-10 md:flex-col flex-col  gap-5">
                  <div className="size-17.5  bg-dark rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="tabler:circle-check" className="size-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-1.5xl mb-2.5">Advanced security </h3>
                    <p>It is a long established fact that a reader will be distracted. </p>
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

export default Card;
