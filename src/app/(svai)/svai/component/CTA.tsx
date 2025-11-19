import React from 'react';
import Image from 'next/image';
import about from '@/assets/images/about/5.png';
import Link from 'next/link';

const CTA = () => {
  return (
    <>
      <section className="lg:py-25 md:py-22.5 pb-17.5">
        <div className="container">
          <div className="relative">
            <Image
              src={about}
              alt=""
              className="rounded-2xl lg:h-full w-full h-81.5  object-cover"
            />
            <div className="absolute top-0">
              <div
                className="grid lg:grid-cols-2 lg:gap-40 gap-5 lg:p-12.5 lg:pb-75 p-5 pb-12.5"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              >
                <div>
                  <h2 className="text-white lg:text-2.5xl md:text-2.5xl text-2xl mb-2.5">
                    Be the first to know about new features,improvements, and special promotions.
                  </h2>
                </div>

                <div>
                  <form className="flex md:gap-5 md:flex-row gap-2.5 flex-col justify-between">
                    <input
                      className="py-2.5 px-5 rounded-2xl w-full bg-white border-neutral-200 h-14"
                      placeholder="info@example.com"
                    />
                    <div className="text-center">
                      <Link
                        href=""
                        className="md:h-14 py-3.5 px-7.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                      >
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
