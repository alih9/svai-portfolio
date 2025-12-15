import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Img11 from '@/assets/images/icon/11.png';
import Img12 from '@/assets/images/icon/12.png';
import Img1 from '@/assets/images/icon/1.png';
import Link from 'next/link';
import IconifyIconClient from '@/component/IconifyIconClient';

type Integration = {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
};

const integrations: Integration[] = [
  {
    title: 'Sync pro',
    description:
      'Advanced synchronization for smooth integration with third-party tools and services.',
    image: Img11,
    link: '/integrations-details',
  },
  {
    title: 'Sync master',
    description:
      'Expert data synchronization for reliable transfer between your application and external systems.',
    image: Img12,
    link: '/integrations-details',
  },
  {
    title: 'Sync edge',
    description:
      'Optimization of performance through integration with external tools and services.',
    image: Img1,
    link: '/integrations-details',
  },
];

const IntegrationsList = () => {
  return (
    <>
      <section className="bg-white lg:pb-25 md:pb-22.5 pb-17.5">
        <div className="container">
          <div
            className="mb-10"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl text-center">
              Related Integrations{' '}
            </h2>
          </div>
          <div
            className="grid md:grid-cols-3 lg:gap-7.5 gap-5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            {integrations.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="transition-transform duration-300 ease-in-out hover:-translate-y-1.5 mb-7.5"
              >
                <div className="bg-body-bg rounded-2xl lg:py-15 py-7.5 px-5 lg:mb-7.5 mb-2.5 md:mb-5 flex justify-center">
                  <Image src={item.image} alt="" className="lg:size-15 size-12.5" />
                </div>
                <div>
                  <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">{item.title}</h2>
                  <p className="md:mb-5 mb-2.5">{item.description}</p>
                  <div className="flex items-center gap-1.25">
                    <div className="text-black">View details</div>
                    <IconifyIconClient icon="tabler:arrow-right" className="size-5 text-black" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrationsList;
