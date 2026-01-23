import React from 'react';
// import Apple from '@/assets/images/logo/apple-store.svg';
// import Play from '@/assets/images/logo/play-store.svg';
import hero from '@/assets/images/svai/semantic-search.png';
import Link from 'next/link';
import Image from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';

const Hero = () => {
  return (
    <>
      <section
        className="bg-dark lg:py-32 md:py-24 py-16 overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-37.5 gap-10">
            <div data-aos="fade-right">
              <div className="bg-primary/10 border border-primary/20 py-1 px-4 rounded-full font-semibold text-xs inline-flex mb-4 text-primary uppercase tracking-wider">
                Intelligent Knowledge Hub
              </div>
              <h1 className="text-white lg:text-5.5xl md:text-5xl text-4xl mb-6 font-bold leading-tight">
                Turn Fragmented Data into Intelligent Action
              </h1>
              <p className="lg:text-xl text-lg mb-8 text-white/80 leading-relaxed max-w-xl">
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
              <div className="flex md:gap-6 gap-4 md:flex-row flex-col items-center">
                <Link
                  href="/contact-us"
                  className="w-full md:w-auto py-4 md:px-10 px-8 inline-flex justify-center items-center text-center bg-white font-bold rounded-2xl text-dark transition-all duration-300 hover:bg-primary hover:text-dark shadow-xl shadow-primary/5"
                >
                  Get a Demo
                </Link>
                <Link
                  href="/research"
                  className="w-full md:w-auto py-4 md:px-10 px-8 inline-flex justify-center items-center text-center bg-white/5 backdrop-blur-md border border-white/10 font-bold rounded-2xl text-white transition-all duration-300 hover:bg-white/10"
                >
                  View Documentation
                </Link>
              </div>
            </div>
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              
              <div
                className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-easing="ease-out-cubic"
                data-aos-once="true"
              >
                <Image 
                  src={hero} 
                  alt="SparkVerse AI Dashboard Overview" 
                  className="rounded-2xl transform transition-transform duration-700 group-hover:scale-105" 
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
