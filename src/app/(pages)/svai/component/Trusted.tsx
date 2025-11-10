import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

// Mindmap — Trusted by / Testimonial card
const Trusted = () => {
  return (
    <section className="bg-neutral-50 py-12.5 lg:py-17.5">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark">
            Trusted by Leading E-Commerce Innovators
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-neutral-200">
              {/* Mindmap — Testimonial card placeholder: Logo / Name / Designation / Quote */}
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-neutral-100 flex items-center justify-center">
                  <IconifyIconClient icon="tabler:brand-terraform" className="text-neutral-500" />
                </div>
                <div>
                  <div className="font-medium text-dark">Name</div>
                  <div className="text-sm text-neutral-600">Designation</div>
                </div>
              </div>
              <p className="mt-4 text-neutral-700">
                “Short quote about improved discovery and conversions with SparkVerse AI.”
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            type="button"
            className="px-7.5 py-3.5 rounded-2xl border border-neutral-300 text-dark hover:bg-dark hover:text-white transition-all"
            aria-label="View More Success Stories"
          >
            View More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
