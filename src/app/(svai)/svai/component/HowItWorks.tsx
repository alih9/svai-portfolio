import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import about from '@/assets/images/svai/Industrial_Supplier.webp';

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export const userStepsData: StepItem[] = [
  {
    number: '01',
    title: 'Data Ingestion',
    description:
      'We connect seamlessly with your existing data sources including files, APIs, supplier feeds and cloud repositories, consolidating them within the SparkVerse AI environment.',
  },
  {
    number: '02',
    title: 'Data Processing',
    description:
      'Collected data is cleaned, standardized and structured for consistency, reliability and readiness for further analysis and enrichment.',
  },
  {
    number: '03',
    title: 'Analysis and Enrichment',
    description:
      'Artificial intelligence models analyze and enrich the data, infer missing attributes, detect inconsistencies and enhance semantic understanding for improved accuracy and contextual meaning.',
  },
  {
    number: '04',
    title: 'Intelligent Retrieval',
    description:
      'The unified knowledge network enables AI-powered search and discovery that understand user intent and context, delivering precise, relevant results in real time through secure APIs.',
  },
  {
    number: '05',
    title: 'Privacy and Security by Design',
    description:
      'SparkVerse AI embeds privacy and data security by design throughout every stage of the process. End-to-end encryption, secure storage and role-based access controls ensure GDPR-ready compliance and keep your data confidential and intact.',
  },
];

const HowItWorks = () => {
  return (
    <>
      <section
        className="bg-dark lg:py-25 py-17.5"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div
            className="text-center lg:mb-12.5 mb-10"
            data-aos="fade-up"
            data-aos-duration={700}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex text-dark mb-2.5">
              How It Works
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl text-white">
              From Raw Data to Intelligent Product Knowledge
            </h2>
            <p className="text-base text-white/80 md:w-3/5 mx-auto">
              Our End-to-End Product Knowledge Intelligence Engine transforms scattered,
              inconsistent data into a secure, context-aware knowledge network that powers accurate
              search and actionable insights.
            </p>
          </div>
          <div
            className="grid lg:grid-cols-2 lg:gap-15 gap-5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div>
              <div className="relative">
                <Image src={about} alt="About" className="rounded-2xl max-h-[700px]" />
                <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex text-dark absolute -top-2.5 start-7.5">
                  End-to-End Knowledge Engine
                </div>
              </div>
              <div className="flex mt-7.5 gap-2.5 md:flex-row flex-col">
                <p className="text-white">Ready to experience the full power of SparkVerseAI?</p>
                <Link href="/pricing-2" className="inline-flex text-white underline">
                  <div>Learn more</div>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute start-7.5 h-11/12 w-0.75 bg-neutral-100/20" />
              <div className="relative z-10">
                {userStepsData.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-5 flex-row mb-12.5"
                    data-aos="fade-up"
                    data-aos-duration={600}
                    data-aos-easing="ease-in-out"
                  >
                    <div className="flex-shrink-1">
                      <div className="size-15 bg-primary rounded-full inline-flex items-center justify-center">
                        <h5 className="lg:text-1.5xl text-2.5xl">{step.number}</h5>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-1.5xl mb-2.5 text-white">{step.title}</h2>
                      <p className="text-white">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/sign-up"
                className="py-3.5 lg:px-7.5 px-6.5 rounded-2xl inline-flex font-medium bg-primary text-dark hover:text-primary hover:bg-black transition-all duration-300"
              >
                Get started now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
