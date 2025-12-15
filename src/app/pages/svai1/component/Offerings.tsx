import React from 'react';

// Mindmap — Products list (Semantic Search, Smart Recommendations, Personalized Engine, Analytics Dashboard, Security & Compliance)
const Offerings = () => {
  const products = [
    {
      title: 'Semantic Search',
      desc: 'Deliver context-aware, intent-driven search that understands your customers like never before.',
    },
    {
      title: 'Smart Recommendations',
      desc: 'Boost discovery with dynamic, context-rich suggestions across the journey.',
    },
    {
      title: 'Personalized Engine',
      desc: 'Tailor experiences in real time to every customer and segment.',
    },
    {
      title: 'Analytics Dashboard',
      desc: 'Reveal trends, intent gaps and conversion opportunities for optimization.',
    },
    {
      title: 'Security & Compliance',
      desc: 'Built to protect — role-based access, encryption, auditing, and privacy-first controls.',
    },
  ];

  return (
    <section className="bg-neutral-50 py-12.5 lg:py-17.5">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.title} className="bg-white rounded-2xl p-6 border border-neutral-200">
              {/* Mindmap — Card for product */}
              <h3 className="text-xl font-semibold text-dark">{p.title}</h3>
              <p className="mt-2 text-neutral-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
