import React from 'react';

// Mindmap — Solutions list
const Solutions = () => {
  const groups = [
    {
      title: 'Solutions',
      items: [
        'E-Commerce AI Suite',
        'Knowledge Management',
        'Enterprise Search',
        'Hybrid Deployment',
        'Secure AI Deployment',
      ],
    },
    {
      title: 'Resources',
      items: ['Blog', 'Research', 'Webinars', 'API Docs', 'Support Portal'],
    },
    {
      title: 'Company',
      items: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Use', 'Contact Us'],
    },
  ];

  return (
    <section className="bg-white py-12.5">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {groups.map(g => (
            <div key={g.title}>
              {/* Mindmap — Column group */}
              <h3 className="text-1.5xl font-semibold text-dark mb-3">{g.title}</h3>
              <ul className="space-y-2.5 text-neutral-700">
                {g.items.map(it => (
                  <li key={it} className="leading-normal">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
