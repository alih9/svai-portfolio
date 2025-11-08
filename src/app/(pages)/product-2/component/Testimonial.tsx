'use client';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


type TestimonialType = {
  des: string;
  title: string;
  role: string;
};

const TestimonialData: TestimonialType[] = [
  {
    des: 'For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do.',
    title: 'Louis Crawford',
    role: 'Operations Manager',
  },
  {
    des: 'He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. ',
    title: 'Amanda Reed',
    role: 'Founder',
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center lg:w-1/2 md:mb-10 mb-7.5 lg:mx-auto"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">What our users say</h2>
          </div>
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            className="testiSwiper"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="swiper-wrapper">
              {TestimonialData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="text-center">
                    <p className="lg:text-2.6xl md:text-2xl text-lg text-black mb-10 text-center mx-auto leading-[1.4] lg:w-3/5 md:w-4/5">
                      {item.des}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-1.25 text-xl text-black">{item.title}</div>
                    <p className="text-sm">{item.role}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="relative z-10 flex gap-2.5 justify-end">
              <div className="-mt-30 custom-prev cursor-pointer size-8.75 bg-neutral-200 rounded-full inline-flex items-center justify-center end-auto absolute inset-0 ">
                <IconifyIconClient icon="tabler:chevron-left" className="size-5.5 text-black" />
              </div>
              <div className="-mt-30 custom-next cursor-pointer size-8.75 bg-neutral-200 rounded-full inline-flex items-center start-auto justify-center">
                <IconifyIconClient icon="tabler:chevron-right" className="size-5.5 text-black" />
              </div>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
