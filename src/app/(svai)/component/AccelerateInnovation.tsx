import Link from 'next/link';
import React from 'react';


const AccelerateInnovation = () => {
  return (
    <>
      <section>
        <div
          className="relative lg:py-32 md:py-24 py-16 flex items-center justify-center overflow-hidden"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="/videos/AccelerateInnovation.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div
            className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 py-16 px-8 lg:w-3/5 md:w-4/5 w-11/12 rounded-3xl text-center shadow-2xl"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Accelerate Innovation{' '}
            </div>
            <h2 className="mb-6 lg:text-5xl md:text-4xl text-3xl font-bold text-white leading-tight">
              Power Your Transformation with Generative AI
            </h2>
            <p className="mb-10 text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Integrate SparkVerse AI seamlessly with your existing stack to unlock creative
              automation, natural language search, and intelligent recommendations built for scale.
            </p>
            <div className="mt-5">
              <Link
                href="/contact-us"
                className="py-4 lg:px-10 px-8 inline-flex items-center text-center bg-primary hover:bg-white font-bold rounded-2xl text-dark transition-all duration-300"
              >
                Explore Generative AI → 
              </Link>
            </div>

           
          </div>
        </div>
      </section>
    </>
  );
};

export default AccelerateInnovation;
