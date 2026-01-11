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
      'Connect to files, APIs, supplier feeds, and cloud repositories to bring all product data into one unified environment. ',
  },
  {
    number: '02',
    title: 'Data Processing',
    description: 'Clean, standardize, and structure incoming data for consistency and readiness.',
  },
  {
    number: '03',
    title: 'Analysis and Enrichment',
    description:
      'AI models enrich the data, infer missing attributes, resolve inconsistencies, and add semantic understanding.',
  },
  {
    number: '04',
    title: 'Intelligent Retrieval',
    description:
      'A unified knowledge network powers intent-aware search and discovery, delivering precise results through secure APIs. ',
  },
  {
    number: '05',
    title: 'Privacy and Security by Design',
    description:
      'End-to-end encryption, RBAC, and built-in privacy controls ensure secure, compliant handling across every stage. ',
  },
];

const HowItWorks = () => {
  return (
    <>
      <section
        className="bg-dark lg:py-32 md:py-24 py-16"
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
            <h2 className="mb-6 lg:text-5xl md:text-4xl text-3xl font-bold text-white max-w-4xl mx-auto leading-tight">
              From raw data to intelligent discovery: in five steps.
            </h2>
            <p className="text-xl text-white/70 md:w-3/5 mx-auto leading-relaxed">
              Our End-to-End Product Knowledge Intelligence Engine transforms scattered,
              inconsistent data into a secure, context-aware knowledge network.
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
              <div className="relative z-10">
                {userStepsData.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-5 flex-row mb-12.5 relative group"
                    data-aos="fade-up"
                    data-aos-duration={600}
                    data-aos-easing="ease-in-out"
                  >
                    {index !== userStepsData.length - 1 && (
                      <div className="absolute start-8 top-16 bottom-[-50px] w-0.5 bg-gradient-to-b from-primary/30 to-primary/10" />
                    )}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="size-16 bg-dark border border-primary/30 rounded-full inline-flex items-center justify-center shadow-[0_0_20px_rgba(23,169,255,0.15)] transition-transform group-hover:scale-110">
                        <h5 className="text-primary font-bold text-xl">{step.number}</h5>
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
                className="mt-12 py-3.5 lg:px-7.5 px-6.5 rounded-2xl inline-flex font-medium bg-primary text-dark hover:text-primary hover:bg-black transition-all duration-300"
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
