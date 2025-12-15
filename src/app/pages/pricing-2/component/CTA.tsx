import Link from 'next/link';
import React from 'react';
import about from '@/assets/images/about/15.png';

const CTA = () => {
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
              Seize the opportunity{' '}
            </div>
            <h2 className="mb-2.5 lg:text-4xl md:text-3.4xl text-2.6xl">
              Ready to experience the difference?
            </h2>
            <div className="mt-5">
              <Link
                href="/request-a-demo"
                className="py-3.5 lg:px-7.5 px-6.5 inline-flex mb-1 text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                Request a demo
              </Link>
              <div className="flex justify-center">
                <p>Need assistance? </p>
                <Link href="/contact" className="text-dark underline font-medium">
                  Chat now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
