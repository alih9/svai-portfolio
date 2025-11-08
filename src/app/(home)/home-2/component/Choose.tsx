import Image from 'next/image';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import four from '@/assets/images/about/4.png';

export interface FeatureItem {
  icon: string;
  label: string;
  delay?: number;
}

export const featuresData: FeatureItem[] = [
  {
    icon: 'solar:shield-check-outline',
    label: 'Robust security',
    delay: 50,
  },
  {
    icon: 'solar:smartphone-2-outline',
    label: 'Mobile access',
  },
  {
    icon: 'solar:headphones-round-outline',
    label: 'Customer support',
    delay: 150,
  },
  {
    icon: 'solar:lightbulb-outline',
    label: 'Scalable solutions',
    delay: 200,
  },
];

const Choose = () => {
  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="lg:mb-12.5 lg:mx-auto text-center lg:w-1/2 mb-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Why choose Landinger </h2>
            <p className="text-base mb-2.5">
              Discover how Landinger can transform your business operations with our innovative
              features.{' '}
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:gap-25 items-center gap-7.5 lg:pb-25 pb-17.5">
            <div data-aos="fade-right" data-aos-duration={600} data-aos-easing="ease-in-out">
              <h3 className="lg:text-4xl mb-2.5 md:text-3.4xl text-2.6xl">Intuitive interface </h3>
              <p className="mb-2.5">
                Our user-friendly design ensures you can get started quickly without any hassle. The
                clean layout and straightforward navigation make it easy for everyone on your team
                to use.
              </p>
              <div className="flex flex-wrap gap-5 mt-10">
                <div className="flex gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6 text-black" />
                  <p>Data integrity</p>
                </div>
                <div className="flex gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6 text-black" />
                  <p>Quick learning </p>
                </div>
                <div className="flex gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6 text-black" />

                  <p>Reduce risk </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:gap-25 md:gap-7.5 items-center gap-7.5">
            <div
              className="md:order-1 order-2"
              data-aos="fade-right"
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <Image src={four} alt="" className="rounded-2xl" />
            </div>
            <div
              className="md:order-2 order-1"
              data-aos="fade-left"
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-4xl mb-2.5 md:text-3.4xl text-2.6xl">Robust analytics </h3>
              <p className="mb-2.5">
                Gain valuable insights with our powerful analytics tools. Track key metrics,
                generate detailed reports, and make data-driven decisions to drive your business
                forward.{' '}
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7.5 lg:mt-32.5 mt-12.5 gap-5">
            {featuresData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={item.delay || 0}
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
              >
                <div className="flex items-center gap-2.5">
                  <div className="size-10 bg-dark rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon={item.icon} className="size-5.5 text-primary" />
                  </div>
                  <div className="lg:text-1.5xl text-lg text-black font-medium">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
