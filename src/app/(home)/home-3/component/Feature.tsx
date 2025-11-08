import Image from 'next/image';
import React from 'react';
import about14 from '@/assets/images/about/14.png';
import element15 from '@/assets/images/element/15.svg';
import element9 from '@/assets/images/element/9.png';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';

export interface FeatureChip {
  label: string;
}

export const featureChipsData: FeatureChip[] = [
  { label: 'Comprehensive analytics' },
  { label: '24/7 customer support' },
  { label: 'Technical support' },
  { label: 'Optimized performance' },
  { label: 'Flexible customization' },
];

const Feature = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center mb-12.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Efficiency unleashed{' '}
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Amazing features </h2>
          </div>
          <div
            className="grid lg:grid-cols-2 lg:gap-15 md:gap-10 gap-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="relative flex overflow-hidden rounded-2xl h-full">
              <Image src={about14} alt="Client Img 1" className="size-full object-cover" />
              <div className="absolute inset-0 w-full h-full opacity-80 z-20 bg-linear-180 from-transparent to-black" />
              <div className="absolute lg:p-15 lg:gap-15 lg:flex-col md:p-7.5 md:gap-10 gap-10 p-5 flex flex-col items-start justify-between z-20">
                <div>
                  <h3 className="text-white mb-2.5 text-4xl">Automated reporting</h3>
                  <p className="text-base text-white mb-2.5">
                    Get a complete overview of your business performance with our intuitive
                    dashboard and powerful analytics tools.
                  </p>
                  <Link href="/product-2" className="text-base underline text-white">
                    Learn more
                  </Link>
                </div>
                <div className="mx-auto">
                  <Image src={element15} alt="" className="h-87.5 rounded-2xl" />
                </div>
              </div>
            </div>
            <div className="flex overflow-hidden  rounded-2xl h-full">
              <div className="bg-primary flex flex-col lg:gap-15 gap-10 lg:flex-col lg:p-15 p-5 size-full  items-start justify-between">
                <div>
                  <h3 className="text-black mb-2.5 text-4xl">Real-time collaboration </h3>
                  <p className="text-base text-black mb-2.5">
                    Enhance teamwork with live document editing, instant feedback, and task
                    tracking. Collaborate seamlessly from anywhere to boost productivity.
                  </p>
                  <Link href="/product-3" className="text-base text-black underline">
                    Discover more
                  </Link>
                </div>
                <div>
                  <Image src={element9} alt="" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="mt-12.5 mx-auto lg:w-3/5 text-center"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="text-black text-1.5xl mb-2.5">
              Unlock the full potential of your business with our robust features.
            </h2>
            <div className="flex mt-5 gap-5 flex-wrap justify-center">
              {featureChipsData.map((chip, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 flex-row py-1.75 px-3 bg-body-bg rounded-2xl"
                >
                  <IconifyIconClient icon="tabler:check" className="text-black" />
                  <p>{chip.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
