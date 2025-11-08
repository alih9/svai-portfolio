import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Img1 from '@/assets/images/icon/1.png';
import Img2 from '@/assets/images/icon/2.png';
import Img3 from '@/assets/images/icon/3.png';
import Img4 from '@/assets/images/icon/4.png';
import Img5 from '@/assets/images/icon/5.png';
import Img6 from '@/assets/images/icon/6.png';
import Img7 from '@/assets/images/icon/7.png';
import Img8 from '@/assets/images/icon/8.png';
import Img9 from '@/assets/images/icon/9.png';
import Img10 from '@/assets/images/icon/10.png';
import Img11 from '@/assets/images/icon/11.png';
import Img12 from '@/assets/images/icon/12.png';
import Img13 from '@/assets/images/icon/13.png';
import Img14 from '@/assets/images/icon/14.png';
import Img15 from '@/assets/images/icon/15.png';

type IntegrationItem = {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
};

const integrationsData: IntegrationItem[] = [
  {
    icon: Img10,
    title: 'Fusion link',
    description:
      'Enhance functionality by seamlessly integrating your SaaS solution with external applications using the Fusion link.',
    link: '/integrations-details',
  },
  {
    icon: Img11,
    title: 'Sync pro',
    description:
      'Advanced synchronization for smooth integration with third-party tools and services.',
    link: '/integrations-details',
  },
  {
    icon: Img12,
    title: 'Sync master',
    description:
      'Expert data synchronization for reliable transfer between your application and external systems.',
    link: '/integrations-details',
  },
  {
    icon: Img1,
    title: 'Sync edge',
    description:
      'Optimization of performance through integration with external tools and services.',
    link: '/integrations-details',
  },
  {
    icon: Img2,
    title: 'Link sync',
    description:
      'Effortlessly connect your SaaS application with other systems using Link sync for seamless data exchange.',
    link: '/integrations-details',
  },
  {
    icon: Img3,
    title: 'Link hub',
    description:
      'Central integration point for seamless connectivity and data sharing with other systems.',
    link: '/integrations-details',
  },
  {
    icon: Img4,
    title: 'Fusion sync',
    description:
      'Effortless data exchange with external applications for streamlined collaboration.',
    link: '/integrations-details',
  },
  {
    icon: Img5,
    title: 'Data sync pro',
    description:
      'Simplify data synchronization between your SaaS platform and external sources with Data Sync Pro.',
    link: '/integrations-details',
  },
  {
    icon: Img6,
    title: 'Data linker',
    description:
      'Simplified linking and synchronization of data with other software solutions for enhanced interoperability.',
    link: '/integrations-details',
  },
  {
    icon: Img7,
    title: 'Data Bridge',
    description:
      'Seamless integration with external databases and systems for efficient data transfer.',
    link: '/integrations-details',
  },
  {
    icon: Img8,
    title: 'Connectify',
    description:
      'Streamline collaboration and data synchronization with Connectify integration for your SaaS platform.',
    link: '/integrations-details',
  },
  {
    icon: Img9,
    title: 'Fusion link',
    description: 'Connection to cloud services for efficient data exchange and collaboration.',
    link: '/integrations-details',
  },
  {
    icon: Img13,
    title: 'Cloud connect X',
    description:
      'Securely connect your SaaS application to cloud-based services for efficient data exchange with Cloud Connect X.',
    link: '/integrations-details',
  },
  {
    icon: Img14,
    title: 'App merge',
    description: 'Simplified merging of data and functionalities for enhanced interoperability.',
    link: '/integrations-details',
  },
  {
    icon: Img15,
    title: 'Data hub',
    description: 'Centralized connectivity to multiple data sources for comprehensive insights.',
    link: '/integrations-details',
  },
];

const Integrations = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid md:grid-cols-3 lg:gap-7.5 gap-5"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            {integrationsData.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="transition-transform duration-300 ease-in-out hover:-translate-y-1.5 mb-7.5"
              >
                <div className="bg-body-bg rounded-2xl lg:py-15 py-7.5 px-5 lg:mb-7.5 mb-2.5 md:mb-5 flex justify-center">
                  <Image src={item.icon} alt={item.title} className="lg:size-15 size-12.5" />
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

export default Integrations;
