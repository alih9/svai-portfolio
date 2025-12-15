import React from 'react';
import Link from 'next/link';

// Mindmap — Hero: Title, search prompt, primary CTA, supporting copy
const Hero = () => {
  return (
    <section className="bg-dark py-12.5 lg:py-30 md:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-25 gap-10 items-center">
          <div data-aos="fade-right">
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Smarter Search. Safer Data. Seamless Experience.
            </div>
            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
              Lightning-fast semantic search for e-commerce.
            </h1>
            <p className="lg:mt-5 lg:mb-10 mt-2.5 mb-5 text-white/80">
              Delivered with a fully customizable, privacy-first knowledge management dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5">
              {/* Mindmap — CTA: Start Free Trial */}
              <Link
                href="/sign-up"
                className="py-3.5 md:px-7.5 px-6 inline-flex bg-white font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary"
              >
                Start Free Trial
              </Link>
              {/* Mindmap — CTA: Try a Live Demo */}
              <Link
                href="/request-a-demo"
                className="py-3.5 md:px-7.5 px-6 inline-flex border border-white/30 text-white font-medium rounded-2xl transition-all duration-300 hover:bg-white hover:text-dark"
              >
                Try a Live Demo
              </Link>
            </div>

            {/* Mindmap — Search prompt */}
            <div className="mt-7.5 text-white/80">
              <span role="img" aria-label="search">
                🔍
              </span>{' '}
              Search SparkVerse
            </div>
          </div>
          {/* Mindmap — Visual: semantic search / waves of data nodes (represented via decorative gradient box) */}
          <div data-aos="fade-left">
            <div
              aria-hidden="true"
              className="rounded-3xl min-h-64 lg:min-h-96 w-full bg-gradient-to-br from-primary/20 via-primary/10 to-white/10 border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
