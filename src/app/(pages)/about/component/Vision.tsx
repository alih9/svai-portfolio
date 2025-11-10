

import React from 'react';
import about from '@/assets/images/about/12.png';
import Image from 'next/image';

const Vision = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <h2
            className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            Discover Spark Verse AI
          </h2>
          <div
            className="grid md:grid-cols-2 lg:gap-25 gap-5 mt-5 mb-10"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div>
              <h3 className="md:text-1.5xl text-xl mb-2.5">Mission</h3>
              <p className="mb-2.5">
                At Spark Verse AI, our mission is to empower businesses of all sizes to thrive in the
                digital age by providing innovative, user-friendly software solutions.{' '}
              </p>
            </div>
            <div>
              <h3 className="md:text-1.5xl text-xl mb-2.5">Vision</h3>
              <p className="mb-2.5">
                Our vision is to revolutionize the way businesses operate by harnessing the power of
                technology to drive efficiency, collaboration, and growth. We envision a future
                where every organization, regardless of size or industry.{' '}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <Image src={about} alt="" className="rounded-2xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;
