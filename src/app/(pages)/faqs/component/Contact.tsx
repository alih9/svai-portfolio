import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type ContactCard = {
  icon: string;
  title: string;
  description: string;
  linkLabel: string;
  linkUrl: string;
  bgColor: string;
  iconBg: string;
  textColor: string;
  iconColor: string;
};

const contactData: ContactCard[] = [
  {
    icon: 'solar:bolt-linear',
    title: 'Access our knowledge base',
    description: 'Access a vast reservoir of knowledge and expertise, conveniently.',
    linkLabel: 'Explore help center',
    linkUrl: '#',
    bgColor: 'bg-primary',
    iconBg: 'bg-dark',
    textColor: 'text-dark',
    iconColor: 'text-primary',
  },
  {
    icon: 'solar:chart-square-linear',
    title: 'Discover Spark Verse AI tutorials',
    description: 'Watch and learn from market experts how to utilize our product effectively.',
    linkLabel: 'Watch tutorials',
    linkUrl: '#',
    bgColor: 'bg-dark',
    iconBg: 'bg-primary',
    textColor: 'text-white',
    iconColor: 'text-black',
  },
  {
    icon: 'solar:lightbulb-outline',
    title: 'Join our community',
    description:
      'Collaborate, share insights, and cultivate relationships within our community network.',
    linkLabel: 'Visit Facebook group',
    linkUrl: '#',
    bgColor: 'bg-body-bg',
    iconBg: 'bg-dark',
    textColor: 'text-dark',
    iconColor: 'text-primary',
  },
];

const Contact = () => {
  return (
    <>
      <section className="bg-white lg:pb-25 md:pb-22.5 pb-17.5">
        <div className="container">
          <div
            className="lg:mb-12.5 text-center mb-7.5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Try these helpful solutions{' '}
            </h2>
            <p className="text-base mb-2.5">
              Departure defective arranging rapturous did believe him all had supported.{' '}
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:gap-7.5 gap-5 flex-col">
            {contactData.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} lg:p-7.5 p-5 rounded-2xl`}
                data-aos="fade-up"
                data-aos-delay={150 + index * 50}
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
              >
                <div
                  className={`md:size-12.5 size-10 ${item.iconBg} rounded-full inline-flex items-center justify-center mb-5`}
                >
                  <IconifyIconClient icon={item.icon} className={`size-6 ${item.iconColor}`} />
                </div>
                <h3 className={`md:text-2.5xl text-1.5xl mb-2.5 ${item.textColor}`}>
                  {item.title}
                </h3>
                <p className={`md:mt-5 md:mb-10 my-2.5 ${item.textColor}`}>{item.description}</p>
                <Link href={item.linkUrl} className={`underline ${item.textColor}`}>
                  {item.linkLabel}
                </Link>
              </div>
            ))}
          </div>
          <div
            className="text-center md:mt-12.5 mt-10 flex gap-1.25 flex-col"
            data-aos="fade-up"
            data-aos-delay={250}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h3 className="mb-2.5 md:text-1.5xl text-xl">
              Steel does not get what you are looking for{' '}
            </h3>
            <div>
              <Link
                href="/contact"
                className="py-3.5 md:px-7.5 px-6 inline-flex bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
