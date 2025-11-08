import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  link: string;
};

const pricingData: PricingPlan[] = [
  {
    name: 'Basic plan',
    price: '$ 25.00 USD',
    period: '/month',
    description: 'Essential features for small teams and individuals',
    features: [
      'Basic reporting and analytics',
      'Limited number of users',
      'Basic customer support',
      'Standard functionality',
    ],
    link: '/pricing-2-details',
  },
  {
    name: 'Premium plan',
    price: '$ 55.00 USD',
    period: '/month',
    description: 'For established companies and enterprises',
    features: [
      'API access for deeper integration',
      'Advanced customization options',
      'Dedicated customer support',
      'Advanced security features',
    ],
    link: '/pricing-2-details',
  },
  {
    name: 'Enterprise plan',
    price: '$ 85.00 USD',
    period: '/month',
    description: 'For large-scale organizations',
    features: [
      'Dedicated account manager',
      'Advanced data analytics and insights',
      'Scalability for high-volume usage',
      'Tailored features and solutions',
    ],
    link: '/pricing-2-details',
  },
];

const Pricing = () => {
  return (
    <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
      <div className="container-medium">
        <div
          className="lg:mb-12.5 text-center mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-6xl md:text-[52px] text-4xl">Pick your perfect package</h2>
          <p>
            Find the ideal plan for your needs with our customizable packages, designed to fit any
            budget and requirement.
          </p>
        </div>

        <div
          className="flex lg:gap-12.5 gap-7.5 flex-col"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          {pricingData.map((plan, index) => (
            <div key={index} className="bg-white rounded-2xl lg:p-12.5 md:p-7.5 py-7.5 px-3.75">
              <div className="grid md:grid-cols-2 md:gap-12.5 gap-5">
                <div>
                  <h2 className="mb-2.5 text-1.5xl">{plan.name}</h2>
                  <h4 className="lg:text-4.4xl md:text-4xl text-3xl flex items-center">
                    {plan.price}
                    <div className="text-base neutral-700">{plan.period}</div>
                  </h4>
                  <p className="lg:mt-12.5 lg:mb-2.5 my-5">{plan.description}</p>
                  <div>
                    <Link
                      href={plan.link}
                      className="py-3.5 lg:px-7.5 px-6.5 inline-flex text-center bg-primary font-medium rounded-2xl text-black  transition-all duration-300 hover:text-primary hover:bg-black"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>

                <div>
                  <h4 className="mb-2.5 text-1.5xl">What's included</h4>
                  <div className="flex gap-3.75 flex-col">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-2.5">
                        <IconifyIconClient icon="tabler:circle-check" className="size-5 mt-0.5" />
                        <p className="text-base">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
