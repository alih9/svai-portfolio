'use client';
import React, { useRef, useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';

export type PaymentFeature = {
  icon: string;
  title: string;
  description: string;
};

export const paymentFeatures: PaymentFeature[] = [
  {
    icon: 'solar:fire-outline',
    title: 'Investment portfolio',
    description:
      'A collection of financial assets managed to achieve financial goals through strategic allocation and diversification.',
  },
  {
    icon: 'tabler:video',
    title: 'Financial goal setting',
    description:
      'Financial goal setting involves identifying and prioritizing specific objectives, such as saving for retirement.',
  },
  {
    icon: 'solar:headphones-round-outline',
    title: 'Bill payment reminders',
    description:
      'Automated notifications to ensure timely payment of bills, helping avoid late fees and maintain financial organization.',
  },
];

const Payments = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="grid lg:grid-cols-5 lg:gap-17.5 gap-7.5 mb-7.5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div className="lg:col-span-2">
              <div className="flex justify-center md:gap-5 gap-2.5 flex-col">
                <h1 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
                  We measure social payments.
                </h1>
                <p className="lg:mb-12.5 md:mb-5">
                  Streamline your finances, track expenses, set budgets, and achieve your financial
                  goals with ease.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-primary font-medium rounded-2xl text-black transition-all duration-300 hover:text-primary hover:bg-black"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-2xl lg:h-76 h-90 w-full relative">
                <video
                  id="myVideo"
                  ref={videoRef}
                  loop
                  autoPlay
                  muted
                  className="object-cover bg-cover bg-[50%] flex w-full h-full absolute -inset-full m-auto -z-10"
                >
                  <source src="http://coderthemes.com/landinger/video/video.mp4" type="video/mp4" />
                  <source
                    src="http://coderthemes.com/landinger/video/video.webm"
                    type="video/webm"
                  />
                </video>

                <div className="absolute end-10 bottom-10">
                  <button
                    id="toggleBtn"
                    onClick={togglePlay}
                    className="size-15 flex items-center justify-center bg-body-bg rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <IconifyIconClient
                      id="playIcon"
                      icon="tabler:player-play-filled"
                      className={`size-6 text-black ${isPlaying ? 'hidden' : ''}`}
                    />
                    <IconifyIconClient
                      id="pauseIcon"
                      icon="tabler:player-pause-filled"
                      className={`size-6 text-black ${isPlaying ? '' : 'hidden'}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {paymentFeatures.map((feature, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                data-aos-duration={500}
                data-aos-easing="ease-in-out"
              >
                <div className="bg-white lg:p-7.5 p-5 rounded-2xl flex flex-col lg:gap-25 md:gap-2.5 gap-7.5 h-full">
                  <div className="flex lg:items-center lg:gap-5 lg:flex-row md:gap-2.5 md:flex-col flex-col gap-2.5">
                    <IconifyIconClient icon={feature.icon} className="lg:size-9 size-7.5 text-black" />
                    <h3 className="text-1.5xl">{feature.title}</h3>
                  </div>
                  <div>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Payments;
