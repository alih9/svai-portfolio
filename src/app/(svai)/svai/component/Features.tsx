'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import IconifyIconClient from '@/component/IconifyIconClient';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ZeroTrust from '@/assets/images/svai/visualization/Zero-Trust Architecture.png';
import Fine from '@/assets/images/svai/visualization/Fine-Grained Access Control.png';
import Security from '@/assets/images/svai/visualization/Security by Design.png';
import Academic from '@/assets/images/svai/visualization/Academic & Research Affiliation.png';
import Deployment from '@/assets/images/svai/visualization/Flexible, Privacy-First Deployment.png';
import Encryption from '@/assets/images/svai/visualization/Encryption.png';
import Compliance from '@/assets/images/svai/visualization/Global Compliance Ready.png';

const Features = () => {
  type sliderType = {
    image: StaticImageData;
    des: string;
    title: string;
    link: string;
    linkText?: string;
  };

  const sliderData: sliderType[] = [
    {
      image: Security,
      title: 'Security by Design',
      des: `Engineered from the ground up with privacy, robustness, and secure architecture principles.`,
      link: '#',
      linkText: 'Explore Security by Design',
    },
    {
      image: Fine,
      title: 'Fine-Grained Access Control',
      des: `Every user sees only what they are authorized to access, ensuring strict governance.`,
      link: '#',
      linkText: 'See Encryption Standards',
    },
    {
      image: ZeroTrust,
      title: 'Zero-Trust Architecture',
      des: `No implicit trust. Every request is verified, authenticated, and authorized.`,
      link: '#',
      linkText: 'Review Compliance Features',
    },
    {
      image: Encryption,
      title: 'AES-256 & TLS 1.3 Encryption',
      des: `Your data stays secure in transit and at rest with industry-leading encryption.`,
      link: '#',
      linkText: 'Learn More',
    },
    {
      image: Compliance,
      title: 'Global Compliance Ready',
      des: `Built with privacy-by-design principles to meet global data protection standards.`,
      link: '#',
      linkText: 'Learn More',
    },
    {
      image: Deployment,
      title: 'Flexible, Privacy-First Deployment',
      des: `SaaS or hybrid integration to maintain data residency and governance control.`,
      link: '#',
      linkText: 'Learn More',
    },
    {
      image: Academic,
      title: 'Academic & Research Affiliation',
      des: `Rooted in academic R&D excellence for trustworthy, research-grade AI.`,
      link: '#',
      linkText: 'Learn More',
    },
  ];

  return (
    <>
      {/* Built to Protect. Designed to Perform. */}
      <section
        className="lg:py-25 md:py-22.5 py-17.5"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div className="container">
          <div
            className="lg:mb-12.5 text-center mb-7.5"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Built to Protect. Designed to Perform.
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Enterprise-Grade Protection for Intelligent Data 
            </h2>
            <p className="text-base mb-2.5">
              SparkVerse AI is engineered with security and compliance at its core; ensuring your data remains private, governed, and under your control from ingestion to intelligent retrieval. 
            </p>
          </div>

          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            className="testiSwiper cursor-col-resize"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <div className="swiper-wrapper">
              {sliderData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="grid md:grid-cols-6 md:gap-8 gap-5 items-center">
                    <div className="md:col-span-1">
                      <Image src={item.image} alt={item.title} className="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div className="flex gap-3 flex-col md:col-span-4">
                      <div className="text-2xl">{item.title} </div>
                      <p className="mb-7.5 text-lg text-black">{item.des} </p>
                      <Link
                        href={item.link}
                        className="transition-transform duration-300 ease-in-out hover:-translate-y-1.5 mb-7.5"
                      >
                        {' '}
                        <div className="flex items-center gap-1.25 underline">
                          <div className="text-black hidden lg:block">{item.linkText}</div>
                          <div className="text-black lg:hidden">View details</div>
                          <IconifyIconClient
                            icon="tabler:arrow-right"
                            className="size-5 text-black"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="relative z-10 flex gap-2.5 justify-end -mt-5">
              <div className="custom-prev cursor-pointer size-8.75 bg-black/10 rounded-full inline-flex items-center justify-center">
                <IconifyIconClient icon="tabler:chevron-left" className="size-5.5 text-black" />
              </div>
              <div className="custom-next cursor-pointer size-8.75 bg-black/10 rounded-full inline-flex items-center justify-center">
                <IconifyIconClient icon="tabler:chevron-right" className="size-5.5 text-black" />
              </div>
            </div>
          </Swiper>

          {/* <div
            className="mt-10 bg-primary rounded-2xl lg:p-10 p-5"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <div className="grid md:grid-cols-3 lg:gap-10  gap-5">
              <div>
                <h5 className="md:text-2.5xl text-1.5xl">
                  Generate detailed reports with just a few clicks.
                </h5>
              </div>

              <div>
                <div className="lg:flex items-center gap-5">
                  <h6 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">99%</h6>
                  <div className="fs-base">Track and analyze business reports</div>
                </div>
              </div>

              <div>
                <div className="lg:flex items-center gap-5">
                  <h6 className="lg:text-5.5xl md:text-4.6xl text-3.4xl">4.8</h6>
                  <div className="gap-1 flex-col flex">
                    <div className="flex gap-1.5">
                      <IconifyIconClient
                        icon="tabler:star-filled"
                        className="lg:size-6 size-5.5 text-dark"
                      />

                      <IconifyIconClient
                        icon="tabler:star-filled"
                        className="lg:size-6 size-5.5 text-dark"
                      />

                      <IconifyIconClient
                        icon="tabler:star-filled"
                        className="lg:size-6 size-5.5 text-dark"
                      />

                      <IconifyIconClient
                        icon="tabler:star-filled"
                        className="lg:size-6 size-5.5 text-dark"
                      />

                      <IconifyIconClient
                        icon="tabler:star-half-filled"
                        className="lg:size-6 size-5.5 text-dark"
                      />
                    </div>
                    <div className="fs-base">Best rated company</div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div
            className="flex md:justify-center gap-2.5 mt-10 flex-wrap justify-start"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <IconifyIconClient icon="solar:dialog-2-bold" className="size-5.5" />

            <div className="text-dark fs-base">Contact our team for more information.</div>

            <Link href="/contact" className="flex items-center gap-1 text-dark font-medium">
              <div className="underline gap-1">Let's chat</div>
              <IconifyIconClient icon="tabler:arrow-right" className="size-6" />
            </Link>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Features;
