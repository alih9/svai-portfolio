'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import IconifyIconClient from '@/component/IconifyIconClient';

type Plan = {
  name: string;
  icon: string;
  price: { monthly: number; yearly: number };
  features: string[];
  highlight?: boolean;
  custom?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Basic plan',
    icon: 'solar:chart-square-linear',
    price: { monthly: 19, yearly: 15 },
    features: ['Basic AI chatbot features', 'Email support', 'Standard integrations'],
  },
  {
    name: 'Professional plan',
    icon: 'solar:shield-check-linear',
    price: { monthly: 49, yearly: 45 },
    features: [
      'Advanced AI chatbot features',
      'Up to 50K monthly chat interactions',
      'Up to 50K monthly chat interactions',
      'Advanced integrations',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise plan',
    icon: 'solar:fire-outline',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Premium AI chatbot features',
      'Unlimited monthly chat interactions',
      '24/7 priority email, chat, and phone support',
      'Enterprise-level integrations',
    ],
    custom: true,
  },
];

const Hero = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [displayPrices, setDisplayPrices] = useState<number[]>(plans.map(p => p.price.monthly));

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayPrices(prev =>
        prev.map((current, i) => {
          const target =
            billingCycle === 'monthly' ? plans[i].price.monthly : plans[i].price.yearly;
          if (current === target) return current;
          const diff = target - current;
          const step = Math.ceil(Math.abs(diff) / 5);
          return current + Math.sign(diff) * step;
        })
      );
    }, 80);
    return () => clearInterval(interval);
  }, [billingCycle]);

  return (
    <section className="lg:py-25 md:py-22.5 py-17.5">
      <div className="container">
        <div
          className="lg:mb-12.5 text-center md:mb-10 mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-4xl">Choose your plan</h2>
          <p className="mb-2.5">
            Free 14-day trial for all plans &nbsp; · &nbsp; No credit card required &nbsp; · &nbsp;
            Cancel anytime
          </p>
        </div>

        <div
          className="lg:text-end text-center"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <div className="inline-flex relative mb-7.5">
            <div className="md:flex">
              <div className="md:flex bg-white md:rounded-full rounded-2xl transition p-1.25">
                <div className="flex flex-wrap justify-center">
                  <label
                    onClick={() => setBillingCycle('monthly')}
                    className={`cursor-pointer py-2.5 md:px-5 px-2.5 font-medium rounded-full text-base ${
                      billingCycle === 'monthly' ? 'bg-dark text-white' : ''
                    }`}
                  >
                    Billed Monthly
                  </label>
                  <label
                    onClick={() => setBillingCycle('yearly')}
                    className={`cursor-pointer py-2.5 md:px-5 px-2.5 font-medium rounded-full text-base ${
                      billingCycle === 'yearly' ? 'bg-dark text-white' : ''
                    }`}
                  >
                    Billed Yearly
                  </label>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 flex items-center end-0">
              <IconifyIconClient
                icon="solar:arrow-to-down-left-outline"
                className="size-7 text-neutral-700 -rotate-100"
              />
              <Link
                href=""
                className="bg-primary text-black font-medium text-sm px-3.75 inline-flex py-1 rounded-full"
              >
                Save 20%
              </Link>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
          <div className="grid lg:grid-cols-3 gap-10 md:items-center md:justify-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`md:p-10 p-5 ${
                  plan.highlight ? 'bg-primary' : plan.custom ? 'bg-dark' : 'bg-white'
                } rounded-2xl md:gap-20 flex flex-col lg:justify-between h-full`}
              >
                <div>
                  <div className="gap-5 flex items-center mb-5">
                    <div
                      className={`lg:size-13.5 size-12.5 ${
                        plan.custom ? 'bg-primary' : plan.highlight ? 'bg-dark' : 'bg-primary'
                      } rounded-full flex items-center justify-center`}
                    >
                      <IconifyIconClient
                        icon={plan.icon}
                        className={`lg:size-7.5 size-6.5 ${
                          plan.highlight ? 'text-primary' : plan.custom ? 'text-dark' : 'text-dark'
                        }`}
                      />
                    </div>

                    <h3 className={`text-1.5xl ${plan.custom ? 'text-white' : 'text-black'}`}>
                      {plan.name}
                    </h3>
                  </div>
                  <h4
                    className={`lg:text-4.5xl text-4xl flex items-center ${
                      plan.custom ? 'text-white' : 'text-black'
                    }`}
                  >
                    {plan.custom ? (
                      'Custom pricing'
                    ) : (
                      <>
                        <span>$</span>
                        <span>{displayPrices[index]}</span>
                        <span className="text-base">/month</span>
                      </>
                    )}
                  </h4>
                  <div className="mt-5">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex gap-2.5 mb-2.5">
                        <IconifyIconClient
                          icon="tabler:circle-check"
                          className={`size-6 ${plan.custom ? 'text-white' : 'text-black'}`}
                        />
                        <div className={`text-base ${plan.custom ? 'text-white' : ''}`}>
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`py-3.5 lg:px-7.5 px-6.5 block text-center font-medium rounded-2xl transition-all duration-300 ${
                    plan.custom
                      ? 'bg-primary text-black hover:bg-black hover:text-primary'
                      : 'bg-dark text-white hover:text-primary'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
