import React from 'react';
// import Apple from '@/assets/images/logo/apple-store.svg';
// import Play from '@/assets/images/logo/play-store.svg';
import hero from '@/assets/images/svai/semantic-search.webp';
import Link from 'next/link';
import Image from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';

const Hero = () => {
  return (
    <>
      <section
        className="bg-dark py-12.5 lg:py-30 md:py-20"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-37.5 gap-10">
            <div data-aos="fade-right">
              <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                Intelligent Knowledge Hub
              </div>
              <h1 className="text-white lg:text-5xl md:text-4.5xl text-3xl mb-2.5 box">
                Turn Fragmented Data into Intelligent Action
              </h1>
              <p className="lg:mt-5 mt-2.5 mb-5 text-white">
                Create a unified knowledge layer for your search and AI agents while ensuring total
                control over your infrastructure.
              </p>
              <div className="flex flex-col gap-2.5 lg:mb-12.5 lg:mt-5 mt-2.5 mb-5 text-white">
                <div className="flex  items-start gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6" />
                  <div>
                    Power Advanced AI: Boost semantic search, chatbots, and proactive agents.{' '}
                  </div>
                </div>
                <div className="flex  items-start gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6" />
                  <div>
                    Unify Your Knowledge: Transform siloed catalog data into one intelligent
                    source.{' '}
                  </div>
                </div>
                <div className="flex  items-start gap-2.5">
                  <IconifyIconClient icon="tabler:circle-check" className="size-6" />
                  <div>
                    Deploy with Confidence: Privacy-first, SaaS or hybrid deployment for
                    enterprises.{' '}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex md:gap-5 gap-2.5 md:flex-row flex-col items-center">
                <div>
                  <Link
                    href="/request-a-demo"
                    className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-white font-medium rounded-2xl text-dark transition-all duration-300 hover:text-primary"
                  >
                    Get a Demo
                  </Link>
                </div>
                <div>
                  <Link
                    href="/research"
                    className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-primary font-medium rounded-2xl text-black transition-all duration-300 hover:text-primary hover:bg-black"
                  >
                    View Documentation
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div
                className="relative"
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                <Image src={hero} alt="Element image" className="rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
