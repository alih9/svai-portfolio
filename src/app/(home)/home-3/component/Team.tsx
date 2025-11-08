

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import about from '@/assets/images/about/4.png';
import CountUpClient from '@/component/CountUpClient';

const Team = () => {
  return (
    <>
      <section className="bg-dark lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid md:grid-cols-5 lg:gap-25 md:gap-10 gap-10"
            data-aos="fade-up"
            data-aos-duration={900}
            data-aos-easing="ease-in-out"
          >
            <div className="md:col-span-2">
              <div className="mb-12.5">
                <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl text-white">
                  <CountUpClient end={200} duration={5} />
                  <span className="text-primary">+</span>
                </h2>
                <p className="mb-2.5 text-white">
                  Clients have achieved success with our tailored SaaS solutions, ranging from
                  startups to enterprises.
                </p>
              </div>
              <div className="mb-12.5">
                <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl text-white">
                  <CountUpClient end={98} duration={5} />
                  <span className="text-primary">+</span>
                </h2>
                <p className="mb-2.5 text-white">
                  Satisfaction rate reflects our commitment to providing exceptional service and
                  support.{' '}
                </p>
              </div>
              <div className="bg-white rounded-2xl flex lg:p-10 md:p-5 p-5 lg:gap-7.5 flex-col gap-2.5">
                <h2 className="mb-2.5 text-2.5xl">Join us on our journey</h2>
                <div>
                  <Link
                    href="careers"
                    className="py-3.5 px-7.5 md:px-6.5 inline-flex rounded-2xl font-medium bg-primary text-dark hover:text-primary hover:bg-dark transition-all duration-300"
                  >
                    View open positions
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <Image src={about} alt="" className="h-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
