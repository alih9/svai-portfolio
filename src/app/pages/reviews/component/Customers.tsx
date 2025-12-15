import Image from 'next/image';
import React from 'react';
import about9 from '@/assets/images/about/9.png';
import CountUpClient from '@/component/CountUpClient';

const Customers = () => {
  return (
    <>
      <section className="bg-dark lg:py-25 md:py-22.5 py-17.5 ">
        <div className="container">
          <div
            className="grid md:grid-cols-2 lg:gap-25 md:gap-5 gap-5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="h-full flex justify-between flex-col md:order-1 order-2">
              <div>
                <h2 className="mb-2.5 text-white lg:text-6xl md:text-5.5xl text-4xl">
                  Satisfied customers speak{' '}
                </h2>
                <p className="mb-2.5 text-white">
                  Discover what our valued customers have to say about their experiences with us put
                  the outlived answered position.{' '}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <h2 className="text-white lg:text-5.5xl md:text-4.6xl text-3.4xl">
                    <CountUpClient end={96} duration={5} />
                    <span className="text-primary">%</span>
                  </h2>
                  <p className="text-white">Positive reviews</p>
                </div>
                <div>
                  <h2 className="text-white lg:text-5.5xl md:text-4.6xl text-3.4xl">
                    <CountUpClient end={10} duration={5} />
                    <span className="text-primary">K</span>
                  </h2>
                  <p className="text-white">Happy customers </p>
                </div>
              </div>
            </div>
            <div className="md:order-2 order-1">
              <Image src={about9} alt="" className="rounded-2xl lg:size-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Customers;
