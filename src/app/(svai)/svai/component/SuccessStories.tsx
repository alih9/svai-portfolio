import Image from 'next/image';
import React from 'react';
import Story1 from '@/assets/images/svai/story1.webp';
import Story2 from '@/assets/images/svai/story2.webp';
import Story3 from '@/assets/images/svai/story3.webp';
import IconifyIconClient from '@/component/IconifyIconClient';

const SuccessStories = () => {
  return (
    <>
      <section
        className="lg:py-32 md:py-24 py-16"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Success Stories{' '}
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Real-Life Examples of Our Impact{' '}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 md:gap-7.5 gap-5">
            <div
              className="relative flex md:h-125 h-80 overflow-hidden rounded-2xl"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <Image src={Story2} alt="Story 1" className="size-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

              <div className="absolute bottom-0 left-0 lg:p-10 p-6 z-20 w-full">
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Case Study</p>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  Context-Aware Search Enhancement for a Luxury Fashion Retailer.
                </h3>
              </div>
            </div>

            <div
              className="relative flex md:h-125 h-80 overflow-hidden rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <Image src={Story3} alt="Story 3" className="size-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 lg:p-10 p-6 z-20 w-full">
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Innovation</p>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  Unified Product Knowledge Graph for a B2B Industrial Supplier
                </h3>
              </div>
            </div>

            <div
              className="relative flex md:h-125 h-80 overflow-hidden rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <Image src={Story1} alt="Story 2" className="size-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>

              <div className="absolute bottom-0 left-0 lg:p-10 p-6 z-20 w-full">
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Enterprise</p>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  Real-Time Inventory Intelligence for a Global Logistics Platform
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStories;
