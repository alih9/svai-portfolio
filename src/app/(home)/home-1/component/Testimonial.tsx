import Image from 'next/image';
import React from 'react';
import review1 from '@/assets/images/review/1.png';
import review2 from '@/assets/images/review/2.png';
import client1 from '@/assets/images/client/1.svg';
import client2 from '@/assets/images/client/2.svg';
import client4 from '@/assets/images/client/4.svg';
import IconifyIconClient from '@/component/IconifyIconClient';

const Testimonial = () => {
  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Testimonials{' '}
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Hear from our happy customers{' '}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 md:gap-7.5 gap-5">
            <div
              className="relative flex md:h-125 h-80 overflow-hidden rounded-2xl"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <Image src={review1} alt="Client Img 1" className="size-full object-cover" />

              <div className="absolute inse-0 w-full h-full opacity-80 z-20 bg-linear-180  from-transparent to-black"></div>

              <div className="absolute lg:p-7.5 p-5 h-full flex flex-col items-start justify-between z-20">
                <Image src={client1} alt="" className="h-7.5" />
                <h3 className="text-white text-xl">
                  "Efficiency redefined, productivity amplified."
                </h3>
              </div>
            </div>

            <div
              className="relative flex md:h-125 h-80 overflow-hidden rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <div className="bg-primary absolute lg:p-7.5 p-5 size-full flex flex-col items-start justify-between ">
                <Image src={client4} alt="" className="h-7.5" />
                <div>
                  <div className="flex gap-1.5">
                    <IconifyIconClient
                      icon="tabler:star-filled"
                      className="text-yellow-400 text-xl"
                    />
                    <IconifyIconClient
                      icon="tabler:star-filled"
                      className="text-yellow-400 text-xl"
                    />
                    <IconifyIconClient
                      icon="tabler:star-filled"
                      className="text-yellow-400 text-xl"
                    />
                    <IconifyIconClient
                      icon="tabler:star-filled"
                      className="text-yellow-400 text-xl"
                    />
                    <IconifyIconClient
                      icon="tabler:star-filled"
                      className="text-yellow-400 text-xl"
                    />
                  </div>

                  <p className="lg:text-xl text-lg my-3.5">
                    SparkVerseAI has revolutionized the way we operate. The automated reporting
                    feature alone has saved us countless hours each month.
                  </p>

                  <div className="review-meta-wrap">
                    <h5 className="text-1.5xl text-neutral-700">John Doe</h5>
                    <p className="text-sm">SEO expert at Coderthemes</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative flex md:h-125 h-80 overflow-hidden rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="600"
              data-aos-easing="ease-in-out"
            >
              <Image src={review2} alt="Client Img 1" className="size-full object-cover" />

              <div className="absolute inse-0 w-full h-full opacity-80 z-20 bg-linear-180  from-transparent to-black"></div>

              <div className="absolute lg:p-7.5 p-5 h-full flex flex-col items-start justify-between z-20">
                <Image src={client2} alt="" className="h-7.5" />
                <h3 className="text-white text-xl">
                  "Person she control of to beginnings view looked eyes Than continues."{' '}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
