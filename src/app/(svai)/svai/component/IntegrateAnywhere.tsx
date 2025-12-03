'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Team3 from '@/assets/images/team/3.png';
import Team2 from '@/assets/images/team/2.png';
import Client4 from '@/assets/images/client/4.svg';
import Client3 from '@/assets/images/client/3.svg';
import Client7 from '@/assets/images/client/7.svg';
import Client5 from '@/assets/images/client/5.svg';
import IconifyIconClient from '@/component/IconifyIconClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

type sliderType = {
  image: StaticImageData;
  des: string;
  title: string;
  role: string;
};

const sliderData: sliderType[] = [
  {
    image: Team3,
    des: `Night signs creeping yielding green Seasons together man green fruitful make fish behold earth unto you'll lights living moving sea open for fish day multiply tree good female god had fruitful of creature fill shall don't day fourth lesser he the isn't let multiply may Creeping earth. `,
    title: 'Larry Lawson',
    role: 'Product Manager',
  },
  {
    image: Team2,
    des: `SparkVerseAI offers everything we need in one place. The security features give us peace of mind, knowing our data is protected. The dedicated account manager for the enterprise plan ensures we get personalized support tailored to our needs. It's been a fantastic investment for our company. `,
    title: 'Sarah Lee',
    role: 'Operations Manager at Global Solutions',
  },
];

const IntegrateAnywhere = () => {
  return (
    <>
      <section
        className="bg-white lg:py-25 md:py-22.5 py-17.5"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div
          className="container-small"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-easing="ease-in-out"
        >
          <div
            className="text-center mb-12.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Integrate Anywhere
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Enterprise-Grade Connectors for Modern Cloud Ecosystems
            </h2>
            <p className="text-lg text-black px-12">
              Connect SparkVerse AI to Azure, AWS, GCP, SharePoint, databases, and internal systems
              using pre-built connectors and open APIs.
            </p>
          </div>

          <hr className="lg:mt-17.5 lg:pt-17.5 md:pt-10 md:mt-10 border-neutral-200 pt-10 mt-10" />
          <div className="flex lg:gap-5 md:gap-25 md:flex-row gap-3.75 flex-col lg:justify-between">
            <div>
              <p>See Integration Options</p>
            </div>
            <div className="flex lg:gap-10 flex-wrap gap-5">
              <Image src={Client4} alt="" width={115} className="h-7.5" />
              <Image src={Client3} alt="" width={142} className="h-7.5" />
              <Image src={Client7} alt="" width={118} className="h-7.5" />
              <Image src={Client5} alt="" width={97} className="h-7.5" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrateAnywhere;
