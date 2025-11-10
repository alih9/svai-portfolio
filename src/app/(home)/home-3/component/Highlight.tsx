import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

export interface HighlightItem {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export const highlightData: HighlightItem[] = [
  {
    icon: 'solar:bolt-linear',
    title: 'Comprehensive analytics',
    description: 'Gain deep insights into your business performance.',
    delay: 50,
  },
  {
    icon: 'solar:lightbulb-outline',
    title: 'Seamless Integrations',
    description: 'Gain deep insights into your business performance.',
    delay: 150,
  },
  {
    icon: 'tabler:circle-check',
    title: 'Advanced security',
    description: 'It is a long established fact that a reader will be distracted.',
    delay: 200,
  },
];

const Highlight = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="lg:mb-10 lg:mx-auto text-center lg:w-1/2 mb-10"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Why choose Spark Verse AI?
            </h2>
            <p className="text-base mb-2.5">
              Discover how Spark Verse AI can transform your business operations with our innovative
              features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:gap-15 md:gap-5 gap-5">
            {highlightData.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={item.delay}
                data-aos-duration={600}
                data-aos-easing="ease-in-out"
              >
                <div className="bg-body-bg lg:p-10 md:p-5 p-5 rounded-2xl">
                  <div className="flex lg:gap-20 md:gap-10 md:flex-col flex-col gap-5">
                    <div className="size-17.5 bg-dark rounded-full inline-flex items-center justify-center">
                      <IconifyIconClient icon={item.icon} className="size-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-1.5xl mb-2.5">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Highlight;
