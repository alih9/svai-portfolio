'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

import AISearchImg from '@/assets/images/coreOfferings/AI Search.png';
import ChatbotsImg from '@/assets/images/coreOfferings/Chatbots.png';
import AgentsImg from '@/assets/images/coreOfferings/Agents.png';
import AnalyticsImg from '@/assets/images/coreOfferings/Analytics Dashboard.png';
import SecurityImg from '@/assets/images/coreOfferings/Secure & Hybrid Deployment.png';

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
    <div className="flex flex-col gap-4 mt-6">
      {items.map(item => (
        <div key={item} className="flex items-start gap-2.5">
          <IconifyIconClient icon="tabler:circle-check" className="size-5 text-primary mt-1 shrink-0" />
          <p className="text-gray-700 leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  );
};

type OfferingSection = {
  title: string;
  description: string;
  items: string[];
  image: StaticImageData;
};

const coreOfferingSections: OfferingSection[] = [
  {
    title: 'SparkVerse Smart AI Search',
    description:
      'Deliver context-aware, intent-driven search that understands your customers like never before. Our hybrid semantic engine combines language intelligence with keyword precision to ensure fast, relevant results that drive conversions.',
    image: AISearchImg,
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
    image: ChatbotsImg,
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
    image: AgentsImg,
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
    image: AnalyticsImg,
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
    image: SecurityImg,
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
      <div className={`${bgClass} rounded-3xl lg:p-12 p-6 shadow-sm border border-black/5`}>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="lg:text-4.5xl mb-4 md:text-3.5xl text-2.5xl font-semibold text-dark leading-tight">
              {section.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {section.description}
            </p>
            <BulletList items={section.items} />
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <div className="bg-primary/5 absolute inset-0 transition-colors duration-500 group-hover:bg-primary/10" />
            <Image
              src={section.image}
              alt={section.title}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              placeholder="blur"
            />
          </div>
        </div>
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
        className="lg:pt-16 md:pt-12 pt-12 pb-12"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="lg:mb-12.5 lg:mx-auto text-center lg:w-3/4 mb-7.5">
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
            Core Capabilities for Modern E-Commerce
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
                  className={`relative rounded-full px-4 py-2 text-sm md:text-base transition-all duration-0 ${
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
