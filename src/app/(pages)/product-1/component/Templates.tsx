import Image from 'next/image';
import React from 'react';
import Element10 from '@/assets/images/element/10.svg';
import Element11 from '@/assets/images/element/11.svg';

const Templates = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:gap-7.5 md:gap-5 gap-5">
            <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
              <div className="bg-body-bg lg:p-10 p-5 rounded-2xl flex gap-7.5 flex-col">
                <div>
                  <h2 className="mb-2.5 lg:text-4xl md:text-3.4xl text-2.6xl ">
                    Scalable infrastructure for growing businesses{' '}
                  </h2>
                  <p className="text-base mb-2.5 ">
                    Seamlessly expand your operations without compromising performance or
                    reliability, ensuring.{' '}
                  </p>
                </div>
                <Image src={Element10} alt="" className="rounded-2xl" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="bg-primary lg:p-10 p-5 rounded-2xl flex gap-7.5 flex-col">
                <div>
                  <h2 className="mb-2.5 lg:text-4xl md:text-3.4xl text-2.6xl ">
                    Customizable email templates and notifications{' '}
                  </h2>
                  <p className="text-base mb-2.5 ">
                    Elevate your communication with customizable email templates and
                    notifications.{' '}
                  </p>
                </div>
                <Image src={Element11} alt="" className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Templates;
