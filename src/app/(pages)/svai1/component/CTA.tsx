import React from 'react';
import Link from 'next/link';

// Mindmap — Closing CTA: Ready to Redefine... + Request Demo / Custom Quote
const CTA = () => {
  return (
    <section className="bg-dark py-12.5 lg:py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="text-white text-3xl md:text-4xl font-semibold">
            Ready to Redefine Your E-Commerce Intelligence?
          </h2>
          <p className="text-white/80 mt-2">
            Experience the next generation of semantic search, analytics and privacy-first AI.
          </p>
          <div className="mt-7.5 flex flex-wrap gap-3.5">
            <Link
              href="/request-a-demo"
              className="px-7.5 py-3.5 rounded-2xl bg-white text-dark hover:bg-primary transition-all"
            >
              Request Demo
            </Link>
            <Link
              href="/request-a-demo"
              className="px-7.5 py-3.5 rounded-2xl border border-white/30 text-white hover:bg-white hover:text-dark transition-all"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
