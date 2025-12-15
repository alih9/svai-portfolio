

import Image from 'next/image';
import React from 'react';
import Team5 from '@/assets/images/team/5.png';
import IconifyIconClient from '@/component/IconifyIconClient';

const About = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center lg:w-1/2 md:w-4/5 mx-auto"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              UI/UX Designer{' '}
            </div>
            <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">Amanda Reed </h1>
            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5">
              A UI/UX designer is responsible for creating intuitive and engaging user interfaces
              and experiences for digital products.{' '}
            </p>
            <div className="flex justify-center items-center gap-5 mb-12.5">
              <div className="bg-dark size-10 rounded-full flex justify-center items-center hover:bg-neutral-700">
                <IconifyIconClient icon="tabler:brand-facebook" className="text-white size-5" />
              </div>
              <div className="bg-dark size-10 rounded-full flex justify-center items-center hover:bg-neutral-700">
                <IconifyIconClient icon="tabler:brand-instagram" className="text-white size-5" />
              </div>
              <div className="bg-dark size-10 rounded-full flex justify-center items-center hover:bg-neutral-700">
                <IconifyIconClient icon="tabler:brand-x" className="text-white size-5" />
              </div>
            </div>
            <div>
              <Image src={Team5} alt="" className="size-full rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
