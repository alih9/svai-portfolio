import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

const featureData: FeatureItem[] = [
  {
    icon: 'solar:chart-square-linear',
    title: 'Cloud storage',
    description: 'Tailor our platform to meet your unique business needs.',
  },
  {
    icon: 'solar:bolt-linear',
    title: 'Advanced reporting',
    description: 'It is a long established fact that a reader will.',
  },
  {
    icon: 'solar:sale-linear',
    title: 'Email marketing',
    description: 'Required his you put the outlived answered position.',
  },
  {
    icon: 'solar:fire-outline',
    title: 'Data visualization',
    description: 'Contrary to popular belief, Lorem Ipsum is not simply.',
  },
  {
    icon: 'solar:headphones-round-outline',
    title: 'Real-time collaboration',
    description: 'Saw met applauded favorite deficient engrossed.',
  },
  {
    icon: 'tabler:video',
    title: 'Secure data encryption',
    description: 'The point of using Lorem Ipsum is that it has a more-or-less.',
  },
];

const Feature = () => {
  return (
    <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
      <div className="container">
        <div
          className="text-center lg:w-1/2 md:mb-10 mb-7.5 lg:mx-auto"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
            Experience our feature collection
          </h2>
          <p className="mb-2.5">
            Streamline your workflow with automated task scheduling. Effortlessly manage your tasks
            and optimize productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:gap-7.5 md:gap-5 gap-5">
          {featureData.map((feature, idx) => (
            <div
              key={idx}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <div className="bg-white lg:p-10 p-3.5 rounded-2xl h-full">
                <div className="size-12.5 mb-5 bg-primary rounded-full inline-flex items-center justify-center">
                  <IconifyIconClient icon={feature.icon} className="size-6 text-black" />
                </div>
                <h3 className="mb-2.5 lg:text-1.5xl text-xl">{feature.title}</h3>
                <p className="mb-2.5">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
