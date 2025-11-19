import React from 'react';
// import Apple from '@/assets/images/logo/apple-store.svg';
// import Play from '@/assets/images/logo/play-store.svg';
import hero from '@/assets/images/hero/semantic-search.webp';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section className="bg-dark py-12.5 lg:py-30 md:py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-37.5 gap-10">
            <div data-aos="fade-right">
              <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                Smarter Search. Safer Data. Seamless Experience.
              </div>
              <h1 className="text-white lg:text-5xl md:text-4.5xl text-3xl mb-2.5 box">
                Next-Generation AI Search for Intelligent Discovery
              </h1>
              <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white">
                Powered by SparkVerse Smart AI Search, delivered through a fully customizable,
                privacy-first knowledge management dashboard that converts complex information into
                clear, contextual insight.
              </p>
              <Link
                href="/demo"
                className="py-3.5 md:px-7.5 px-6 inline-flex bg-white font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary"
              >
                Try for free
              </Link>

              {/* <div className="md:flex md:items-center md:gap-12.5 md:flex-row lg:mt-20 md:mt7.5 mt-7.5 flex gap-2.5 flex-col">
                <div className="flex items-center gap-2.5 text-white">
                  <Image src={Apple} alt="App Store" className="size-7.5" />
                  <span className="text-base font-medium">4.5</span>
                  <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400" />
                  <span className="text-base text-white">on App store</span>
                </div>

                <div className="flex items-center gap-2.5 text-white">
                  <Image src={Play} alt="Play Store" className="size-7.5" />
                  <span className="text-base font-medium">4.5</span>
                  <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400" />

                  <span className="text-base text-white">on Play store</span>
                </div>
              </div> */}
            </div>
            <div>
              <div className="relative">
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
