'use client';

import React, { useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

export interface FeatureItem {
  icon: string;
  label: string;
  delay?: number;
}

export const featuresData: FeatureItem[] = [
  {
    icon: 'solar:lock-outline',
    label: 'Privacy-First Security',
    delay: 50,
  },
  {
    icon: 'solar:settings-outline',
    label: 'Customizable AI Stack',
  },
  {
    icon: 'solar:cloud-outline',
    label: 'SaaS & Hybrid Ready',
    delay: 150,
  },
  {
    icon: 'solar:rocket-outline',
    label: 'Built to Scale',
    delay: 200,
  },
];

const BulletList = ({ items }: { items: string[] }) => {
  return (
    <div className="flex flex-col gap-5 mt-10">
      {items.map(item => (
        <div key={item} className="flex gap-2.5">
          <IconifyIconClient icon="tabler:circle-check" className="size-6 text-black" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

type OfferingSection = {
  title: string;
  description: string;
  items: string[];
};

const coreOfferingSections: OfferingSection[] = [
  {
    title: 'SparkVerse Smart AI Search',
    description:
      'Deliver context-aware, intent-driven search that understands your customers like never before. Our hybrid semantic engine combines language intelligence with keyword precision to ensure fast, relevant results that drive conversions.',
    items: [
      'SparkVerse Semantic Intelligence',
      'Intent Detection & Context Understanding',
      'Hybrid Semantic + Keyword Search',
      'Query Optimization & Smart Fallbacks',
      'AI Ranking & Relevance Learning',
      'Multilingual & Voice Search Support',
    ],
  },
  {
    title: 'AI Chatbots',
    description:
      'Engage visitors instantly with assistants that simplify product discovery and guide customers through their journey. Understand intent, refine queries in real time, and recommend relevant products like a 24/7 sales rep.',
    items: [
      'Conversational Product Discovery',
      'Intent Detection & Context Understanding',
      'Guided Query Refinement & Dialogue Flow',
      'Real-Time Product Comparison & Advice',
      'Natural Language Purchase Assistance',
      'Integrated Chat Interface & CRM Sync',
    ],
  },
  {
    title: 'AI Agents',
    description:
      'Proactive, scenario-driven agents that monitor conditions, trigger alerts, automate reorders and analyze feedback to increase satisfaction and loyalty—hands-free.',
    items: [
      'Smart Purchase Alerts & Notifications',
      'Intent Detection & Context Understanding',
      'Automated Reorder & Subscription Management',
      'Feedback Analysis & Sentiment Mining',
      'Product Review Insights & Trend Detection',
      'Customer Satisfaction Scoring',
      'Adaptive Product Improvement Suggestions',
    ],
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Turn data into strategy with real-time insights from search, chatbots, and user behavior. Track performance, uncover trends, and optimize conversion throughout the journey.',
    items: [
      'Search & Query Analytics',
      'Intent Detection & Context Understanding',
      'Conversion & Engagement Metrics',
      'AI-Based Trend Forecasting',
      'Performance Alerts & A/B Testing Tools',
      'Role-Based Insights & Reporting',
    ],
  },
  {
    title: 'Secure & Hybrid Deployments',
    description:
      ' Privacy-by-design architecture with total deployment freedom: SaaS or hybrid. Enforced by advanced controls, encryption, and compliance to protect users and your brand.',
    items: [
      'Role-Based Access Control (RBAC)',
      'End-To-End Encryption & Secure APIs',
      'GDPR & Global Data Compliance',
      'Custom SaaS / Hybrid Deployments',
      'Private Vector Storage & Data Isolation',
      'Zero-Trust Security Framework',
    ],
  },
];

const OfferingColumn = ({
  section,
  bgClass,
  aosDirection,
}: {
  section: OfferingSection;
  bgClass: string;
  aosDirection: 'fade-right' | 'fade-left' | 'fade-up';
}) => {
  return (
    <div data-aos={aosDirection} data-aos-duration={600} data-aos-easing="ease-in-out">
      <div className={`${bgClass} rounded-2xl lg:p-10 p-5 h-full`}>
        <h3 className="lg:text-4xl mb-2.5 md:text-3.4xl text-2.6xl">{section.title}</h3>
        <p className="mb-2.5">{section.description}</p>
        <BulletList items={section.items} />
      </div>
    </div>
  );
};

const CoreOfferings = () => {
  const tabs: { label: string }[] = [
    ...coreOfferingSections.map(section => ({ label: section.title })),
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section
        className="lg:pt-25 md:pt-22.5 pt-17.5 pb-12"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="lg:mb-12.5 lg:mx-auto text-center lg:w-3/4 mb-7.5">
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
            Core Capabilities Designed for Modern E-Commerce
          </h2>
         
        </div>
        <div className="container">
          <div
            className="flex flex-wrap justify-center gap-2.5 rounded-2xl bg-white p-1.5 mb-7.5 border border-black/5 w-full py-4"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative rounded-full px-4 py-2 text-sm md:text-base transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-dark shadow-[0_10px_30px_rgba(0,0,0,0.25)]'
                      : 'bg-transparent text-dark/70 hover:text-dark hover:bg-body-bg'
                  }`}
                >
                  <span className="font-medium whitespace-nowrap">{tab.label}</span>
                  {isActive && (
                    <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-primary/40" />
                  )}
                </button>
              );
            })}
          </div>

          <OfferingColumn
            section={coreOfferingSections[activeIndex]}
            bgClass="bg-white"
            aosDirection="fade-up"
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7.5 mt-12 gap-5">
            {featuresData.map(item => (
              <div
                key={item.label}
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

export default CoreOfferings;
