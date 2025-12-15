import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Team from '@/assets/images/team/6.png';
import client4 from '@/assets/images/client/4.svg';
import client6 from '@/assets/images/client/6.svg';
import client7 from '@/assets/images/client/7.svg';
import client5 from '@/assets/images/client/5.svg';
import client11 from '@/assets/images/client/11.svg';
import client9 from '@/assets/images/client/9.svg';
import client10 from '@/assets/images/client/10.svg';

type imageType = {
  image: StaticImageData;
};

const imageData: imageType[] = [
  {
    image: client4,
  },
  {
    image: client6,
  },
  {
    image: client7,
  },
  {
    image: client5,
  },
  {
    image: client11,
  },
  {
    image: client9,
  },
  {
    image: client7,
  },
  {
    image: client10,
  },
  {
    image: client6,
  },
];

const Testimonial = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid md:grid-cols-2 lg:gap-15 md:gap-7.5 lg:mx-auto lg:w-9/10 gap-7.5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-body-bg rounded-2xl md:p-10 py-7.5 px-5">
              <p className="mb-2.5 md:text-[21px] text-lg leading-[1.3]">
                Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven
                offer see among. Handsome met debating sir dwelling age material.
              </p>
              <div className="flex items-center gap-5 md:mt-7.5 mt-3.75">
                <div>
                  <Image src={Team} alt="" className="size-12.5 rounded-full" />
                </div>
                <div>
                  <h5 className="text-lg">Judy Nguyen </h5>
                  <p>Operations Manager </p>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="grid md:grid-cols-3 grid-cols-2 md:gap-7.5 gap-2.5">
                {imageData.map((item, idx) => (
                  <div key={idx}>
                    <Image src={item.image} alt="" className="md:w-35 md:h-15 h-7.5 w-27.5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
