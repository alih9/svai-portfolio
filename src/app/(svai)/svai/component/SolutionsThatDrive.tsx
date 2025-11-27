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
      'SparkVerse AI gives you full control over your data with privacy-by-design deployment options. Whether you need SaaS or hybrid solutions, we provide the flexibility to meet your infrastructure needs while ensuring compliance with global security standards.',
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
        className="bg-white lg:py-25 md:py-22.5 py-17.5 "
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
          <div className="container mt-6 lg:mt-12">
            <div
              className="grid md:grid-cols-3 lg:gap-7.5 gap-5"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              {solutionsThatDriveData.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="transition-transform duration-300 ease-in-out hover:-translate-y-1.5 mb-7.5"
                >
                  <div className="bg-body-bg rounded-2xl lg:py-15 py-7.5 px-5 lg:mb-7.5 mb-2.5 md:mb-5 flex justify-center">
                    <Image src={item.icon} alt={item.title} className="lg:size-15 size-12.5" />
                  </div>
                  <div>
                    <h2 className="mb-2.5 md:text-2.5xl text-1.5xl">{item.title}</h2>
                    <p className="md:mb-5 mb-2.5">{item.description}</p>
                    <div className="flex items-center gap-1.25 underline">
                      <div className="text-black hidden lg:block">{item.linkText}</div>
                      <div className="text-black lg:hidden">View details</div>
                      <IconifyIconClient icon="tabler:arrow-right" className="size-5 text-black" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsThatDrive;
