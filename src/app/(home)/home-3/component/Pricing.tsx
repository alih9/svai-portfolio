'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type PricingPlan = {
  icon: string;
  iconBg: string;
  title: string;
  price: string;
  features: string[];
  bg: string;
  textColor: string;
  buttonBg: string;
  buttonTextColor: string;
  iconColor?: string;
  highlight?: boolean;
};

const pricingData: PricingPlan[] = [
  {
    icon: 'solar:chart-square-linear',
    iconBg: 'bg-primary',
    title: 'Basic plan',
    price: '$19/month',
    features: ['Basic AI chatbot features', 'Email support', 'Standard integrations'],
    bg: 'bg-white',
    textColor: 'text-black',
    buttonBg: 'bg-dark',
    buttonTextColor: 'text-white',
  },
  {
    icon: 'solar:shield-check-linear',
    iconBg: 'bg-dark',
    iconColor: 'text-primary',
    title: 'Professional plan',
    price: '$49/month',
    features: [
      'Advanced AI chatbot features',
      'Up to 50K monthly chat interactions',
      'Up to 50K monthly chat interactions',
      'Advanced integrations',
    ],
    bg: 'bg-primary',
    textColor: 'text-black',
    buttonBg: 'bg-dark',
    buttonTextColor: 'text-white',
  },
  {
    icon: 'solar:fire-outline',
    iconBg: 'bg-primary',
    iconColor: 'text-dark',
    title: 'Enterprise plan',
    price: 'Custom pricing',
    features: [
      'Premium AI chatbot features',
      'Unlimited monthly chat interactions',
      '24/7 priority email, chat, and phone support',
      'Enterprise-level integrations',
    ],
    bg: 'bg-dark',
    textColor: 'text-white',
    buttonBg: 'bg-primary',
    buttonTextColor: 'text-black',
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <>
      <section className="lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="lg:flex lg:justify-between block text-center lg:gap-50 mb-16"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Choose your plan</h2>
            <p className="text-base mb-2.5 lg:w-1/3 text-start">
              We offer flexible pricing options designed to scale with your business and provide the
              features you need to succeed.
            </p>
          </div>

          <div
            className="lg:text-end text-center"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="inline-flex relative mb-7.5">
              <div className="md:flex">
                <div className="md:flex bg-white md:rounded-full rounded-2xl transition p-1.25 mx-2.5">
                  <nav
                    className="flex flex-wrap justify-center"
                    aria-label="Tabs"
                    role="tablist"
                    aria-orientation="horizontal"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveTab('monthly')}
                      className={`text-base py-2.5 md:px-5 px-2.5 inline-flex items-center gap-x-2 font-medium rounded-full ${
                        activeTab === 'monthly' ? 'bg-dark text-white' : 'bg-transparent text-black'
                      }`}
                    >
                      Billed monthly
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('yearly')}
                      className={`text-base py-2.5 md:px-5 px-2.5 inline-flex items-center gap-x-2 font-medium rounded-full ${
                        activeTab === 'yearly' ? 'bg-dark text-white' : 'bg-transparent text-black'
                      }`}
                    >
                      Billed yearly
                    </button>
                  </nav>
                </div>
              </div>
              <div className="absolute -top-6 end-0">
                <Link
                  href=""
                  className="bg-primary text-black text-sm inline-flex px-3.75 py-0.5 rounded-full"
                >
                  Save 20%
                </Link>
              </div>
            </div>
          </div>

          <div
            className="grid lg:grid-cols-3 gap-10 md:items-center md:justify-center h-full"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            {pricingData.map((plan, idx) => (
              <div
                key={idx}
                className={`md:p-10 p-5 ${plan.bg} rounded-2xl md:gap-20 flex flex-col lg:justify-between h-full`}
              >
                <div>
                  <div className="gap-5 flex items-center mb-5">
                    <div
                      className={`lg:size-13.5 size-12.5 ${plan.iconBg} rounded-full flex items-center justify-center`}
                    >
                      <IconifyIconClient
                        icon={plan.icon}
                        className={`lg:size-7.5 size-6.5 ${plan.iconColor || plan.textColor}`}
                      />
                    </div>
                    <h3 className={`text-1.5xl ${plan.textColor}`}>{plan.title}</h3>
                  </div>
                  <h4 className={`${plan.textColor} lg:text-4.5xl text-4xl flex items-center`}>
                    {plan.price.includes('$') ? plan.price.split('/')[0] : plan.price}
                    {plan.price.includes('/') && (
                      <span className="text-base">/{plan.price.split('/')[1]}</span>
                    )}
                  </h4>
                  <div className="mt-5">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-2.5 mb-2.5">
                        <IconifyIconClient icon="tabler:circle-check" className={`size-6 ${plan.textColor}`} />
                        <div className={`${plan.textColor} text-base`}>{feature}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`py-3.5 lg:px-7.5 px-6.5 block text-center ${plan.buttonBg} font-medium rounded-2xl ${plan.buttonTextColor} transition-all duration-300
    ${plan.title === 'Enterprise plan' ? 'hover:bg-black hover:text-primary' : 'hover:text-primary'}
  `}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
