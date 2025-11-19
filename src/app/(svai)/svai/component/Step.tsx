import React from 'react';
import Link from 'next/link';

type StepType = {
  number: string;
  title: string;
  des: string;
  cta: string;
  href: string;
};

const stepData: StepType[] = [
  {
    number: '01',
    title: 'Deliver Precision with Meaning',
    des: 'Your customers find exactly what they’re looking for with relevant results that understand their intent, phrasing and context. SparkVerse’s semantic search ensures precision while delivering hyper-relevant results in milliseconds.',
    cta: 'Learn how Semantic Search works →',
    href: '#',
  },
  {
    number: '02',
    title: 'Empower Customers with AI Chatbots',
    des: 'Engage visitors instantly with AI-powered chatbots that guide them through product discovery. Our specialized selling agents understand customer queries, recommend the best products and provide seamless shopping experiences.',
    cta: 'See AI Chatbots in Action →',
    href: '#',
  },
  {
    number: '03',
    title: 'Proactive AI Agents for Every Scenario',
    des: 'AI agents improve customer satisfaction and increase conversions by taking proactive actions. From stock alerts and price updates to automatic reorder triggers, these agents deliver relevant, timely information to customers at key moments.',
    cta: 'Discover how AI Agents work →',
    href: '#',
  },
  {
    number: '04',
    title: 'Track, Measure, Optimize',
    des: 'Turn data into actionable insights with our Analytics Dashboard. Track search performance, uncover trends and identify conversion bottlenecks. SparkVerse provides the tools to continuously optimize the customer journey and maximize revenue.',
    cta: 'Explore Analytics Dashboard →',
    href: '#',
  },
  {
    number: '05',
    title: 'Secure & Flexible Deployment Options',
    des: 'SparkVerse AI gives you full control over your data with privacy-by-design deployment options. Whether you need SaaS or hybrid solutions, we provide the flexibility to meet your infrastructure needs while ensuring compliance with global security standards.',
    cta: 'Learn about Secure Deployments →',
    href: '#',
  },
];

const Step = () => {
  return (
    <>
      <section
        className="bg-white lg:py-25 md:py-22.5 py-17.5 "
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Solutions That Drive Intelligent Growth
            </h2>
            <p className="text-base mx-auto md:w-4/5">
              SparkVerse AI empowers e-commerce platforms to achieve measurable results. From
              smarter search to proactive, intelligent engagement, we help businesses deliver better
              experiences and drive conversions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-12.5 my-12.5 gap-5">
            {stepData.map((item, idx) => (
              <div
                key={idx}
                className="flex lg:gap-3.5 lg:flex-row gap-3 flex-col"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
              >
                <div className="flex-shrink-1">
                  <div className="lg:size-11 size-10 bg-primary rounded-full inline-flex items-center justify-center">
                    <h5 className="lg:text-1.5xl text-xl">{item.number}</h5>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="lg:text-1.5xl text-xl mb-2.5">{item.title}</h3>
                  <p className="text-base mb-2.5">{item.des}</p>
                  <Link href={item.href} className="text-base underline text-black">
                    {item.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Step;
