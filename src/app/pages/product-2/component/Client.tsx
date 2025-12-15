import React from 'react';
import client3 from '@/assets/images/client/3.svg';
import client4 from '@/assets/images/client/4.svg';
import client5 from '@/assets/images/client/5.svg';
import client11 from '@/assets/images/client/11.svg';
import client7 from '@/assets/images/client/7.svg';
import client9 from '@/assets/images/client/9.svg';
import client8 from '@/assets/images/client/8.svg';
import client10 from '@/assets/images/client/10.svg';
import client6 from '@/assets/images/client/6.svg';
import Image, { type StaticImageData } from 'next/image';

type imageType = {
  image: StaticImageData;
};

const ImageData: imageType[] = [
  {
    image: client3,
  },
  {
    image: client4,
  },
  {
    image: client5,
  },
  {
    image: client11,
  },
  {
    image: client7,
  },
  {
    image: client9,
  },
  {
    image: client8,
  },
  {
    image: client10,
  },
  {
    image: client6,
  },
];

const Client = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container">
          <div
            className="mx-auto text-center lg:w-3/5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="md:mb-10 mb-7.5">
              <h1 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">Our clients </h1>
            </div>
            <div className="flex md:gap-7.5 gap-5 md:pb-10 pb-5 flex-wrap justify-center">
              {ImageData.map((item, idx) => (
                <div key={idx}>
                  <Image src={item.image} alt="" className="h-7.5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
