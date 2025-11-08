'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


import Team1 from '@/assets/images/team/1.png';
import Team2 from '@/assets/images/team/2.png';
import Team3 from '@/assets/images/team/3.png';
import Team4 from '@/assets/images/team/4.png';
import Team5 from '@/assets/images/team/5.png';
import Team6 from '@/assets/images/team/6.png';

import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';

type sliderType = {
  image: StaticImageData;
  des: string;
  title: string;
  role: string;
};

const sliderData: sliderType[] = [
  {
    image: Team3,
    des: 'Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so be resolving breakfast',
    title: 'Billy Vasquez',
    role: 'Retention Manager',
  },
  {
    image: Team6,
    des: 'Michael’s creativity and attention to detail are key to our intuitive and user-friendly design. His passion for user experience drives our continuous improvements and feature enhancements.',
    title: 'Louis Ferguson',
    role: 'Web Developer',
  },
];

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

export const featureData: FeatureItem[] = [
  {
    icon: 'solar:bolt-linear',
    title: 'Customizable Workflows',
    description: 'Deleniti atque corrupti quos dolores et quas molestias excepturi.',
    link: '/product-1',
    delay: 50,
  },
  {
    icon: 'solar:shield-check-outline',
    title: 'Seamless Integrations',
    description: 'Et harum quidem rerum facilis est et expedita distinctio.',
    link: '/product-2',
  },
  {
    icon: 'solar:smartphone-2-outline',
    title: 'Advanced Security',
    description: 'Nam libero tempore, cum soluta nobis est eligendi optio.',
    link: '/product-3',
    delay: 150,
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
      <div className="container">
        <div className="grid md:grid-cols-5 grid-cols-1 lg:gap-12.5 gap-5">
          <div
            className="md:col-span-2"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary rounded-2xl lg:p-10 p-5 h-full">
              <div className="flex mb-17.5">
                <Image src={Team1} alt="" className="md:size-15 size-12.5 rounded-full" />
                <Image src={Team2} alt="" className="md:size-15 size-12.5 rounded-full -ml-3.75" />
                <Image src={Team4} alt="" className="md:size-15 size-12.5 rounded-full -ml-3.75" />
                <Image src={Team5} alt="" className="md:size-15 size-12.5 rounded-full -ml-3.75" />
              </div>
              <p className="text-lg font-medium text-black">
                A group of passionate professionals driving innovation and excellence.
              </p>
            </div>
          </div>

          <div
            className="md:col-span-3"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-dark rounded-2xl lg:p-10 p-5 h-full">
              <Swiper
                modules={[Navigation]}
                loop={true}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                className="testiSwiper w-full"
              >
                {sliderData.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="inline-flex flex-col">
                      <div className="flex gap-1.5 flex-row">
                        {[...Array(4)].map((_, i) => (
                          <IconifyIconClient
                            key={i}
                            icon="tabler:star-filled"
                            className="size-5 text-yellow-400"
                          />
                        ))}
                        <IconifyIconClient icon="tabler:star-half-filled" className="size-5 text-yellow-400" />
                      </div>
                      <p className="text-white whitespace-normal mt-3.75 mb-11.25">{item.des}</p>
                      <div className="flex justify-between items-end lg:mb-10 mb-5">
                        <div className="flex gap-3.75 flex-row items-center">
                          <Image
                            src={item.image}
                            alt=""
                            className="lg:size-15 size-12.5 rounded-full"
                          />
                          <div>
                            <div className="text-white">{item.title}</div>
                            <div className="text-sm text-white">{item.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="relative z-10 flex gap-2.5 justify-end -mt-10">
                <div className="custom-prev cursor-pointer size-8.75 bg-white/10 rounded-full inline-flex items-center justify-center">
                  <IconifyIconClient icon="tabler:chevron-left" className="size-5.5 text-white" />
                </div>
                <div className="custom-next cursor-pointer size-8.75 bg-white/10 rounded-full inline-flex items-center justify-center">
                  <IconifyIconClient icon="tabler:chevron-right" className="size-5.5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-10 md:flex-row lg:mt-25 mt-15 gap-7.5 flex-col">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 flex-row"
              data-aos="fade-up"
              data-aos-delay={feature.delay || 0}
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <div>
                <div className="size-12.5 bg-dark rounded-full inline-flex items-center justify-center">
                  <IconifyIconClient icon={feature.icon} className="size-7 text-primary" />
                </div>
              </div>

              <div>
                <h2 className="mb-2.5 text-1.5xl text-xl">{feature.title}</h2>
                <p className="lg:mb-5 lg:mt-1.25 mb-1.25">{feature.description}</p>
                <Link href={feature.link} className="text-dark underline font-medium">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
