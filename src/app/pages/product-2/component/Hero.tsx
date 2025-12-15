import Image from 'next/image';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';
import Team1 from '@/assets/images/team/1.png';
import Team2 from '@/assets/images/team/2.png';
import Team4 from '@/assets/images/team/4.png';
import Team5 from '@/assets/images/team/5.png';
import about10 from '@/assets/images/about/10.png';

const Hero = () => {
  return (
    <>
      <section className="bg-white lg:py-25 pt-12.5 md:pb-22.5 pb-17.5">
        <div className="container">
          <div
            className="flex justify-center items-center md:gap-5 md:flex-row gap-2.5 flex-col mb-7.5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="flex">
              <Image src={Team1} alt="" className="size-10 rounded-full" />
              <Image src={Team2} alt="" className="size-10 rounded-full -ms-2.5" />
              <Image src={Team4} alt="" className="size-10 rounded-full -ms-2.5" />
              <Image src={Team5} alt="" className="size-10 rounded-full -ms-2.5" />
            </div>
            <div className="flex justify-center items-center gap-1.25">
              <div>Happy customer</div>
              <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400" />
              <div>4.5 (Reviews)</div>
            </div>
          </div>
          <div
            className="lg:mb-12.5 md:mb-10 mb-7.5 lg:mx-auto text-center lg:w-1/2"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
              Automated task scheduling and workflow
            </h1>
            <p className="mb-2.5">
              Streamline your workflow with automated task scheduling. Effortlessly manage your
              tasks and optimize productivity.
            </p>
          </div>
          <div className="flex md:gap-5 gap-2.5 md:flex-row flex-col items-center justify-center">
            <div>
              <Link
                href="/sign-up"
                className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                Get started
              </Link>
            </div>
            <div>
              <Link
                href="/request-a-demo"
                className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-primary font-medium rounded-2xl text-black transition-all duration-300 hover:text-primary hover:bg-black"
              >
                Request a demo
              </Link>
            </div>
          </div>
          <div className="md:mt-15 lg:p-12.5 mt-10 p-5 bg-body-bg rounded-2xl">
            <Image src={about10} alt="" className="rounded-2xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
