'use client';
import React from 'react';

// Mindmap — Newsletter subscription
const Newsletter = () => {
  return (
    <section className="bg-white py-12.5">
      <div className="container">
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 md:p-8">
          <div className="grid md:grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <h3 className="text-1.5xl font-semibold text-dark">Subscribe to our newsletter</h3>
              <p className="text-neutral-600 mt-1">
                Stay up to date on research, webinars, and product updates.
              </p>
            </div>
            <form
              className="flex gap-2"
              onSubmit={e => e.preventDefault()}
              aria-label="Subscribe to newsletter"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Email address"
                className="rounded-xl border border-neutral-300 bg-white px-4 py-3 min-w-64 outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-dark text-white hover:bg-primary hover:text-dark transition-all"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
