

import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

const ComingSoon = () => {
  return (
    <>
      <section className="bg-body-bg md:py-15 py-3.75 pt-3.75">
        <div className="container">
          <div className="lg:w-3/5 mx-auto md:w-4/5 lg:p-12.5 p-7.5 bg-white rounded-2xl text-center">
            <div>
              <div className="flex justify-center">
                <IconifyIconClient
                  icon="tabler:settings"
                  className="md:size-32 size-25 md:mb-5 mb-2.5 text-black"
                />
              </div>

              <h1 className="mb-2.5 lg:text-6xl md:text-5.5xl text-4xl">We are coming soon! </h1>
              <p className="mb-2.5">
                We're bringing something fresh and exciting to the table. Be the first to experience
                it!{' '}
              </p>
              <form className="flex md:gap-5 md:flex-row gap-2.5 flex-col md:w-4/5 mx-auto mt-7.5 mb-3.75">
                <input
                  className="py-2.5 px-5 rounded-2xl w-full border border-neutral-200 h-14"
                  placeholder="info@example.com"
                />
                <div className="text-center">
                  <Link
                    href=""
                    className="md:h-14 py-3.5 px-7.5 inline-flex whitespace-nowrap items-center text-center bg-primary font-medium rounded-2xl text-black transition-all duration-300 hover:text-primary hover:bg-black"
                  >
                    Notify Me
                  </Link>
                </div>
              </form>
              <div className="md:mt-7.5 mt-5">
                <div className="flex gap-3.75 justify-center">
                  <p>Follow us:</p>
                  <div className="flex justify-center gap-3.75 text-black">
                    <Link href="">
                      <IconifyIconClient
                        icon="tabler:brand-facebook"
                        className="md:size-6 size-5 transform transition duration-300 hover:scale-110"
                      />
                    </Link>
                    <Link href="">
                      <IconifyIconClient
                        icon="tabler:brand-instagram"
                        className="md:size-6 size-5 transform transition duration-300 hover:scale-110"
                      />
                    </Link>
                    <Link href="">
                      <IconifyIconClient
                        icon="tabler:brand-linkedin"
                        className="md:size-6 size-5 transform transition duration-300 hover:scale-110"
                      />
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

export default ComingSoon;
