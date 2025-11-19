import React from 'react';

// Mindmap — Integrations grid (AWS/Azure/GCP/Shopify/etc.) rendered as tags
const Integrations = () => {
  const items = [
    'AWS',
    'Azure',
    'GCP',
    'Shopify',
    'BigCommerce',
    'Salesforce',
    'Magento',
    'WooCommerce',
  ];

  return (
    <section className="bg-white py-12.5">
      <div className="container">
        <div className="text-center mb-7.5">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark">Our Core Offerings</h2>
          <p className="mt-2 text-neutral-600">
            Integrate Anywhere — Flexible APIs for SaaS, On-Prem, or Hybrid Environments.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {items.map(label => (
            <span
              key={label}
              className="px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm text-neutral-800"
            >
              {label} Logo
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
