import React from 'react';
import element12 from '@/assets/images/element/12.svg';
import element13 from '@/assets/images/element/13.svg';
import element14 from '@/assets/images/element/14.jpg';
import Image from 'next/image';

const Highlight = () => {
  return (
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid md:grid-cols-3 lg:gap-7.5 md:gap-5 gap-5">
            <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
              <div className="bg-body-bg p-5 flex gap-7.5 flex-col rounded-2xl h-full">
                <h2 className="lg:text-2.6xl text-1.5xl text-center">Customizable workflows</h2>
                <Image src={element12} width={373} height={272} alt="" className="rounded-2xl" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="bg-primary p-5 flex gap-7.5 flex-col rounded-2xl h-full">
                <Image src={element13} width={373} height={272} alt="" className="rounded-2xl" />
                <h2 className="lg:text-2.6xl text-1.5xl  text-center">Adaptive learning </h2>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="bg-dark p-5 flex gap-7.5 flex-col rounded-2xl h-full">
                <h2 className="lg:text-2.6xl text-1.5xl text-center text-white">
                  Instant collaboration{' '}
                </h2>
                <Image src={element14} width={373} height={272} alt="" className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Highlight;
