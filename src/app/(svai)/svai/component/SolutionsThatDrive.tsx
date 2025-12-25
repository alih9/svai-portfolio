import React from 'react';
import Link from 'next/link';
import IconifyIconClient from '@/component/IconifyIconClient';
import Image from 'next/image';
import Img10 from '@/assets/images/icon/10.png';
import Img11 from '@/assets/images/icon/11.png';
import Img12 from '@/assets/images/icon/12.png';
import Img13 from '@/assets/images/icon/13.png';
import Img14 from '@/assets/images/icon/14.png';
import Img15 from '@/assets/images/icon/15.png';
import { StaticImageData } from 'next/image';

type SolutionsThatDriveType = {
  icon: StaticImageData;
  title: string;
  description: string;
  link: string;
  linkText: string;
};

const solutionsThatDriveData: SolutionsThatDriveType[] = [
  {
    icon: Img10,
    title: 'Deliver Precision with Meaning',
    description:
      'Provide highly relevant, intent-aware search results that help customers find products quickly and effortlessly.',
    link: '#',
    linkText: 'Learn how Semantic Search works',
  },
  {
    icon: Img11,
    title: 'AI Chatbot Support',
    description:
      'Engage shoppers instantly with conversational agents that answer questions and guide product discovery in real time.',
    link: '#',
    linkText: 'See AI Chatbots in Action',
  },
  {
    icon: Img12,
    title: 'Proactive AI Agents',
    description:
      'Automate timely alerts, stock updates and contextual actions that improve satisfaction and drive conversions.',
    link: '#',
    linkText: 'Discover how AI Agents work',
  },
  {
    icon: Img13,
    title: 'Insightful Analytics Tools',
    description:
      'Uncover trends, monitor performance and optimize the customer journey using unified, actionable analytics.',
    link: '#',
    linkText: 'Explore Analytics Dashboard',
  },
  {
    icon: Img14,
    title: 'Secure Flexible Deployment',
    description:
      'SparkVerse AI gives you full control over your data with privacy-by-design deployment options.',
    link: '#',
    linkText: 'View Deployments',
  },
  {
    icon: Img15,
    title: 'Custom LLM Choice',
    description:
      'Use open-source or API-based language models customized for your product, cost structure and performance goals.',
    link: '#',
    linkText: 'Explore LLM Options',
  },
];

const SolutionsThatDrive = () => {
  return (
    <>
      <section
        className="bg-white lg:py-32 md:py-24 py-16"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Solutions That Drive Intelligent Growth
            </h2>
            <p className="text-base mx-auto md:w-4/5">
              SparkVerse AI enables e-commerce businesses to achieve measurable improvements in
              product discovery, customer experience, and operational efficiency.
            </p>
          </div>
            <div
              className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 "
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              {solutionsThatDriveData.map((item, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col h-full bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Subtle Icon Background */}
                  <div className="w-16 h-16 bg-neutral-50 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500">
                    <Image src={item.icon} alt={item.title} className="size-10" />
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 mb-8 flex-grow leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto">
                      <Link 
                        href={item.link} 
                        className="inline-flex items-center gap-2 font-semibold text-dark hover:text-primary transition-colors"
                      >
                        <span className="border-b-2 border-transparent hover:border-primary transition-all">
                          {item.linkText}
                        </span>
                        <IconifyIconClient icon="tabler:arrow-right" className="size-5 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
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

export default SolutionsThatDrive;
