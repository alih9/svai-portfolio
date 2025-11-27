import Image from 'next/image';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import four from '@/assets/images/svai/secure-hybrid-deployments.webp';

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
];

const secureDeploymentItems: string[] = [
  'Role-Based Access Control (RBAC)',
  'End-To-End Encryption & Secure APIs',
  'GDPR & Global Data Compliance',
  'Custom SaaS / Hybrid Deployments',
  'Private Vector Storage & Data Isolation',
  'Zero-Trust Security Framework',
];

const OfferingColumn = ({
  section,
  bgClass,
  aosDirection,
}: {
  section: OfferingSection;
  bgClass: string;
  aosDirection: 'fade-right' | 'fade-left';
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
  return (
    <>
      <section
        className="lg:py-25 md:py-22.5 py-17.5"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div
            className="lg:mb-12.5 lg:mx-auto text-center lg:w-3/4 mb-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Core Capabilities Designed for Modern E-Commerce
            </h2>
            <p className="text-base mb-2.5">
              SparkVerse AI empowers e-commerce and enterprise platforms to go beyond traditional
              search. It delivers a complete, secure and intelligent ecosystem for e-commerce, from
              semantic search that understands intent to AI chatbots and agents that sell, assist
              and learn. This is powered by real-time analytics and deployed with enterprise-grade
              privacy, giving you full control over your customer interactions and data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:gap-25 items-start gap-7.5 lg:pb-25 pb-17.5">
            {coreOfferingSections.slice(0, 2).map((section, i) => (
              <OfferingColumn
                key={section.title}
                section={section}
                bgClass={i % 2 === 0 ? 'bg-white' : 'bg-primary'}
                aosDirection={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 md:gap-25 items-start gap-7.5 lg:pb-25 pb-17.5">
            {coreOfferingSections.slice(2, 4).map((section, i) => (
              <OfferingColumn
                key={section.title}
                section={section}
                bgClass={i % 2 === 0 ? 'bg-primary' : 'bg-white'}
                aosDirection={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              />
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:gap-25 md:gap-7.5 items-center gap-7.5">
            <div
              className="md:order-1 order-2"
              data-aos="fade-right"
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <Image
                src={four}
                alt="Secure & Hybrid Deployments illustration"
                className="rounded-2xl"
              />
            </div>
            {/* Secure & Hybrid Deployments */}
            <div
              className="bg-white rounded-2xl lg:p-10 p-5 h-full"
              data-aos="fade-left"
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <h3 className="lg:text-4xl mb-2.5 md:text-3.4xl text-2.6xl">
                Secure & Hybrid Deployments
              </h3>
              <p className="mb-2.5">
                Privacy-by-design architecture with total deployment freedom: SaaS or hybrid.
                Enforced by advanced controls, encryption, and compliance to protect users and your
                brand.
              </p>
              <BulletList items={secureDeploymentItems} />
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7.5 lg:mt-32.5 mt-12.5 gap-5">
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
