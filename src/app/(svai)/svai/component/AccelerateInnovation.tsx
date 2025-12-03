import Link from 'next/link';
import React from 'react';
import about from '@/assets/images/about/15.png';

const AccelerateInnovation = () => {
  return (
    <>
      <section>
        <div
          className="relative bg-cover bg-center lg:py-25 md:py-22.5 py-17.5 flex items-center justify-center"
          style={{ backgroundImage: `url(${about.src})` }}
        >
          <div
            className="bg-body-bg py-15 px-5 lg:w-3/5 md:w-4/5 w-9/10 rounded-2xl text-center"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Accelerate Innovation{' '}
            </div>
            <h2 className="mb-2.5 lg:text-4xl md:text-3.4xl text-2.6xl">
              Power Your Transformation with Generative AI
            </h2>
            <p className="mb-2.5 text-lg text-black px-12">
              Integrate SparkVerse AI seamlessly with your existing stack to unlock creative
              automation, natural language search, AI-driven insights and intelligent
              recommendations built for scale.
            </p>
            <div className="mt-5">
              <Link
                href="/request-a-demo"
                className="py-3.5 lg:px-7.5 px-6.5 inline-flex mb-1 text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                Contact with a Generative AI Expert
              </Link>
            </div>

            <hr className="border-neutral-200 my-8" />
            <div className="flex lg:gap-5 md:gap-25 md:flex-row gap-3.75 flex-col lg:justify-between">
              <p>
                In the section below, the heading and text need to be replaced with the provided
                variant. Moreover, an image and link to the design for this section is provided for
                your perusal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccelerateInnovation;
