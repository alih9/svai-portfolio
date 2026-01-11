import Link from 'next/link';
import React from 'react';

const CTA = () => {
  return (
    <>
      <section className="bg-white lg:py-32 md:py-24 py-16">
        <div className="container">
          <div className="relative overflow-hidden bg-dark lg:py-20 lg:px-12 md:py-16 md:px-8 py-12 px-6 rounded-[2rem] shadow-2xl">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div
              className="relative z-10 mx-auto max-w-3xl text-center"
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white mb-6">
                Stay Ahead with SparkVerse AI
              </h2>
              <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
                Join our community of forward-thinking retailers. Get product updates and insights on the future of intelligent e-commerce.
              </p>
              
              <div className="max-w-md mx-auto">
                <form className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-grow">
                    <input
                      type="email"
                      className="w-full h-14 py-2.5 px-6 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-colors"
                      placeholder="info@example.com"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-14 px-10 bg-primary hover:bg-white text-dark font-bold rounded-2xl transition-all duration-300 whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </form>
                <p className="mt-4 text-white/40 text-sm italic">
                  No spam. Your privacy comes first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
