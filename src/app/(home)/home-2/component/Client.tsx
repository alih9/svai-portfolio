import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Client4 from '@/assets/images/client/4.svg';
import Client3 from '@/assets/images/client/3.svg';
import Client5 from '@/assets/images/client/5.svg';
import Client7 from '@/assets/images/client/7.svg';
import { StaticImageData } from 'next/image';

export interface ClientItem {
  image: StaticImageData;
  description: string;
  delay?: number;
}

export const clientData: ClientItem[] = [
  {
    image: Client4,
    description: 'Leveraging Landinger for streamlined project management.',
  },
  {
    image: Client3,
    description: 'Accelerating growth with powerful analytics.',
    delay: 200,
  },
  {
    image: Client5,
    description: 'Enhancing campaign management through seamless integrations.',
  },
  {
    image: Client7,
    description: 'Securing operations with advanced security features.',
    delay: 400,
  },
];

const Client = () => {
  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Trusted by leading brands
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-12.5 gap-7.5">
            {clientData.map((client, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={client.delay || 0}
                data-aos-duration={600}
                data-aos-easing="ease-in-out"
              >
                <div className="flex justify-center items-center bg-white rounded-2xl lg:py-20 py-15 px-5">
                  <Image src={client.image} alt="Client Logo" className="h-12.5" />
                </div>
                <p className="lg:mt-5 mt-2.5">{client.description}</p>
              </div>
            ))}
          </div>

          <div
            className="flex lg:mt-22.5 mt-15 text-center gap-1.25 flex-col"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <h3 className="mb-2.5 text-1.5xl text-xl">Save an average of 5% with Landinger</h3>
            <div>
              <Link
                href="product-2"
                className="py-3.5 lg:px-7.5 px-6.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
