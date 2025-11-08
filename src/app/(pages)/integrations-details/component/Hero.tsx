import Image from 'next/image';
import React from 'react';
import Icon from '@/assets/images/icon/10.png';

const Hero = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-white md:size-25 size-17.5 rounded-full flex justify-center items-center">
              <Image src={Icon} alt="" />
            </div>
            <h2 className="mb-2.5 lg:text-6xl md:text-4.6xl text-4xl">Fusion link </h2>
            <p className="mb-2.5 text-center">
              Enhance functionality by seamlessly integrating your SaaS solution with external
              applications using the Fusion link.{' '}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
