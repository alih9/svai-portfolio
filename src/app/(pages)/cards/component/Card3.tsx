

import React from 'react';
import element12 from '@/assets/images/element/12.svg';
import element13 from '@/assets/images/element/13.svg';
import element14 from '@/assets/images/element/14.jpg';
import Image, { type StaticImageData } from 'next/image';

interface CardData {
  title: string;
  image:  StaticImageData ;
  bgColor: string;
  textColor?: string;
  delay?: number;
}

const cardData: CardData[] = [
  {
    title: 'Customizable workflows',
    image: element12,
    bgColor: 'bg-body-bg',
    delay: 0,
  },
  {
    title: 'Adaptive learning',
    image: element13,
    bgColor: 'bg-primary',
    delay: 150,
  },
  {
    title: 'Instant collaboration',
    image: element14,
    bgColor: 'bg-dark',
    textColor: 'text-white',
    delay: 200,
  },
];

const Card3 = () => {
  return (
    <section className="bg-white lg:pb-25 md:pb-22.5 pb-17.5">
      <div className="container">
        <div className="grid md:grid-cols-3 lg:gap-7.5 md:gap-5 gap-5">
          {cardData.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={card.delay}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className={`${card.bgColor} p-5 flex gap-7.5 flex-col rounded-2xl h-full`}>
                <h2
                  className={`lg:text-2.6xl text-1.5xl text-center ${
                    card.textColor ?? 'text-black'
                  }`}
                >
                  {card.title}
                </h2>
                <Image src={card.image} alt={card.title} width={373} height={272} className="rounded-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card3;
