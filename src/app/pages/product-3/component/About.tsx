import Image from 'next/image';
import React from 'react';
import three from '@/assets/images/element/3.svg';
import six from '@/assets/images/element/6.svg';
import one from '@/assets/images/element/1.svg';
import IconifyIconClient from '@/component/IconifyIconClient';

const About = () => {
  return (
    <>
      <section className="bg-dark lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-20 md:gap-20 gap-5">
            <div
              className="bg-white rounded-2xl p-5"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <div className="grid grid-cols-2 gap-5 items-center">
                <div className="flex flex-col gap-5">
                  <Image src={three} alt="" className="border border-neutral-200 rounded-2xl" />
                  <Image src={six} alt="" className="border border-neutral-200 rounded-2xl" />
                </div>
                <div>
                  <Image src={one} alt="" className="size-full" />
                </div>
              </div>
            </div>
            <div
              className="flex gap-2.5 justify-center flex-col"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <h3 className="text-white lg:text-4.4xl md:text-4xl text-3xl mb-2.5">
                Strategic leadership for team efficiency
              </h3>
              <p className="md:mb-7.5 mb-2.5 text-white">
                Explore effective strategies and practices for enhancing team efficiency through
                strategic leadership. Elevate your leadership skills to drive productivity and
                organizational success.{' '}
              </p>
              <div className="grid md:grid-cols-2 gap-5 my-2.5">
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="tabler:settings" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5  lg:text-1.5xl text-xl text-white">Easy to duplicate </h3>
                  <p className=" text-white">
                    Simplify your workflow with easy-to-duplicate features, ensuring efficient
                    replication of tasks and content.{' '}
                  </p>
                </div>
                <div className="flex gap-2.5 flex-col">
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="solar:chart-square-linear" className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2.5  lg:text-1.5xl text-xl text-white">
                    Simplified replication{' '}
                  </h3>
                  <p className=" text-white">
                    Enhance productivity with streamlined replication features, allowing for
                    effortless duplication.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
