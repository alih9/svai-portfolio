import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const featuresData: FeatureItem[] = [
  {
    icon: 'solar:chart-square-linear',
    title: 'Advance analytics',
    description: 'Tailor our platform to meet your unique business needs.',
  },
  {
    icon: 'solar:bolt-linear',
    title: 'Seamless integration',
    description: 'It is a long established fact that a reader will be distracted by.',
  },
  {
    icon: 'solar:sale-linear',
    title: 'Adaptive learning',
    description: 'There are many variations of passages of Lorem Ipsum available.',
  },
  {
    icon: 'solar:fire-outline',
    title: '24/7 availability',
    description: 'Predefined chunks as necessary, making this the first true generator.',
  },
];

const Feature3 = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container-small">
          <div
            className="lg:mb-12.5 text-center mb-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Why choose SparkVerse AI
            </h2>
            <p className="text-base mb-2.5">
              Discover how SparkVerse AI can transform your business operations with our innovative
              features.{' '}
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:gap-7.5 gap-5">
            {featuresData.map((item, index) => (
              <div
                key={index}
                className="flex md:gap-4 md:flex-row gap-5 flex-col lg:p-10 p-5 bg-body-bg rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={200 + index * 50}
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
              >
                <div>
                  <div className="size-12.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon={item.icon} className="size-7 text-black" />
                  </div>
                </div>
                <div>
                  <h2 className="mb-2.5 md:text-1.5xl text-xl">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature3;
