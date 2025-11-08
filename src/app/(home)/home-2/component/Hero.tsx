import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Two from '@/assets/images/hero/2.png';
import Element from '@/assets/images/element/3.svg';
import about from '@/assets/images/about/4.png';
import Element4 from '@/assets/images/element/4.svg';
import client3 from '@/assets/images/client/3.svg';
import client4 from '@/assets/images/client/4.svg';
import client5 from '@/assets/images/client/5.svg';
import client7 from '@/assets/images/client/7.svg';

const Hero = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 pt-10 pb-17.5">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h1 className="md:text-6xl text-4xl mb-2.5">Streamline your workflow</h1>
            <div className="flex md:justify-center md:mt-6.25 md:gap-2.5 md:flex-row flex-col gap-2.5 text-base">
              <div className="flex gap-2.5 justify-center">
                <p>Rated 4.8</p>
                <div className="flex items-center text-lg text-yellow-400">
                  <IconifyIconClient icon="tabler:star-filled" />
                  <IconifyIconClient icon="tabler:star-filled" />
                  <IconifyIconClient icon="tabler:star-filled" />
                  <IconifyIconClient icon="tabler:star-filled" />
                  <IconifyIconClient icon="tabler:star-filled" />
                </div>
              </div>
              <p>by over 1,900 satisfied users</p>
            </div>
            <div className="md:mt-6.25 mt-5 lg:w-2/5 md:w-4/5 md:mx-auto">
              <form className="flex md:gap-5 justify-center items-center gap-2.5">
                <input
                  className="bg-body-bg w-full py-2.5 px-5 rounded-2xl  border-neutral-200 h-14 transition-all focus:ring-0 focus:shadow-none focus:border-dark"
                  placeholder="info@example.com"
                />
                <Link
                  href=""
                  className="md:h-14 py-3.5 lg:px-7.5 px-6.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                >
                  Submit
                </Link>
              </form>
            </div>
          </div>
          <div className="grid md:grid-cols-4 lg:gap-7.5 md:gap-5 lg:my-25 md:my-17.5 my-15 gap-5">
            <div
              className="md:col-span-1"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="relative lg:pe-10">
                <Image src={Two} alt="" className="rounded-2xl" />
                <Image
                  src={Element}
                  alt=""
                  className="md:absolute md:block md:top-11.75 md:-end-2.5 md:border md:border-neutral-200 md:rounded-2xl hidden"
                />
              </div>
            </div>
            <div
              className="md:col-span-1"
              data-aos="fade-up"
              data-aos-delay={500}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <Image src={about} alt="" className="h-full rounded-2xl object-cover max-w-full " />
            </div>
            <div
              className="md:col-span-2"
              data-aos="fade-up"
              data-aos-delay={700}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <Image src={Element4} alt="" className="rounded-2xl max-w-full object-center" />
            </div>
          </div>
          <div>
            <div className="text-center">
              <div className="mb-7">Trusted partners</div>
              <div className="flex lg:gap-7.5 lg:flex-row justify-center">
                <Image src={client3} alt="" className="lg:h-7.5 h-6" />
                <Image src={client4} alt="" className="lg:h-7.5 h-6" />
                <Image src={client5} alt="" className="lg:h-7.5 h-6" />
                <Image src={client7} alt="" className="lg:h-7.5 h-6 lg:block hidden" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
