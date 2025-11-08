import React from 'react';
import Image from 'next/image';
import Team2 from '@/assets/images/team/2.png';
import Team1 from '@/assets/images/team/1.png';
import about from '@/assets/images/about/4.png';
import Link from 'next/link';
import CountUpClient from '@/component/CountUpClient';

const Counter = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:gap-20 md:gap-5 gap-10">
            <div data-aos="fade-right" data-aos-duration="600" data-aos-easing="ease-in-out">
              <div className="lg:mb-12.5 mb-7.5">
                <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
                  We drive business success with solutions.{' '}
                </h2>
                <p className="text-base mb-2.5">
                  Discover our powerful tools designed to streamline your workflow and boost
                  productivity.
                </p>
              </div>

              <div className="flex lg:gap-25 gap-5 lg:mb-10 mb-7.5">
                <div className="flex gap-2.5">
                  <Image src={Team2} alt="" className="size-12.5 rounded-full" />
                  <div>
                    <div className="font-medium text-black">Jane Doe</div>
                    <div className="text-sm">Designer</div>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <Image src={Team1} alt="" className="size-12.5 rounded-full" />
                  <div>
                    <div className="font-medium text-black">John Smith </div>
                    <div className="text-sm">UI/UX Designer </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="py-3.5 lg:px-7.5 px-6.5 inline-flex text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                14_day free trial
              </Link>
            </div>

            <div data-aos="fade-left" data-aos-duration="600" data-aos-easing="ease-in-out">
              <Image src={about} alt="" className="rounded-2xl md:h-full object-cover" />
            </div>
          </div>

          <hr className="border-top border-neutral-200 lg:mt-12.5 mt-7.5" />

          <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-5 lg:pt-12.5 mt-7.5 gap-5 ">
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                <CountUpClient end={22} suffix="+" />
              </h3>
              <div>Years of experience</div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                <CountUpClient end={105} suffix="+" />
              </h3>
              <div>In-house projects completed </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                <CountUpClient end={35} suffix="+" />
              </h3>
              <div>Awards and counting </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">
                <CountUpClient end={10} suffix="k" />{' '}
              </h3>
              <div>Satisfied users </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
