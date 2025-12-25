'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import about13 from '@/assets/images/about/13.png';
import element3 from '@/assets/images/element/3.svg';
import about4 from '@/assets/images/about/4.png';
import element6 from '@/assets/images/element/6.svg';
import about6 from '@/assets/images/about/6.png';
import element7 from '@/assets/images/element/7.svg';
import Link from 'next/link';

type TabsType = {
  id: string;
  label: string;
  image: StaticImageData;
  element: any;
};

const tabsData: TabsType[] = [
  {
    id: 'segment-1',
    label: 'Dashboard & analytics',
    image: about13,
    element: element3,
  },
  {
    id: 'segment-2',
    label: 'Advanced security',
    image: about4,
    element: element6,
  },
  {
    id: 'segment-3',
    label: 'Integrations',
    image: about6,
    element: element7,
  },
];

const KeyFeatures = () => {
  const [activeTab, setActiveTab] = useState('segment-3');

  const currentTab = tabsData.find(tab => tab.id === activeTab);

  return (
    <section className="lg:py-25 md:py-22.5 py-17.5">
      <div className="container-small">
        <div
          className="lg:mb-10 text-center mb-10"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={600}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
            Key features that save time
          </h2>
          <p className="text-base mb-2.5">
            Discover our powerful tools designed to streamline your workflow and boost productivity.
          </p>
        </div>

        <div
          className="relative"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={600}
          data-aos-easing="ease-in-out"
        >
          {currentTab && (
            <div>
              <Image
                src={currentTab.image}
                alt=""
                className="w-full md:h-137.5 h-82.5 rounded-2xl object-cover"
              />
              <div>
                <Image
                  src={currentTab.element}
                  alt=""
                  className="h-40 md:block hidden rounded-2xl absolute md:start-1/2 md:bottom-25 md:-translate-x-1/2"
                />
              </div>
            </div>
          )}

          <div className="absolute top-7.5 start-1/2 -translate-x-1/2">
            <div className="md:flex justify-center">
              <div className="md:flex bg-white md:rounded-full rounded-2xl transition p-1.25">
                <nav
                  className="flex md:flex-nowrap flex-wrap justify-center whitespace-nowrap"
                  aria-label="Tabs"
                >
                  {tabsData.map(tab => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`text-base py-2.5 md:px-5 px-2.5 inline-flex items-center gap-x-2 focus:outline-none font-medium rounded-full disabled:opacity-50 disabled:pointer-events-none
                        ${activeTab === tab.id ? 'bg-dark text-white' : 'bg-transparent text-black'}
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid md:grid-cols-2 mt-10 gap-5"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
          <div>
            <h3 className="text-2.5xl">Integrations </h3>
          </div>

          <div>
            <p>
              But I must explain to you how all this mistaken idea of denouncing pleasure and
              praising.
            </p>
            <Link
              href="/integrations"
              className="py-3.5 md:px-7.5 px-6 inline-flex bg-dark mt-10 font-medium rounded-2xl text-white transition-all duration-300 hover:bg-black hover:text-primary"
            >
              View integrations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
