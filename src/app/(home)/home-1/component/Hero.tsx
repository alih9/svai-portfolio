import React from 'react';
import Apple from '@/assets/images/logo/apple-store.svg';
import Play from '@/assets/images/logo/play-store.svg';
import hero from '@/assets/images/hero/1.png';
import element from '@/assets/images/element/16.svg';
import Link from 'next/link';
import Image from 'next/image';
import IconifyIconClient from '@/component/IconifyIconClient';

const Hero = () => {
    return (
        <>
            <section className="bg-dark py-12.5 lg:py-40 md:py-17.5">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-37.5 gap-10">
                        <div data-aos="fade-right">
                            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
                                Revolutionize your workflow
                            </div>
                            <h1 className="text-white lg:text-6xl md:text-5.5xl text-4xl mb-2.5 box">
                                Intuitive solutions for complex challenges
                            </h1>
                            <p className="lg:mt-5 lg:mb-12.5 mt-2.5 mb-5 text-white">
                                Streamline your processes and enhance productivity with our all-in-one solution.
                            </p>
                            <Link
                                href="/sign-up"
                                className="py-3.5 md:px-7.5 px-6 inline-flex bg-white font-medium rounded-2xl text-dark transition-all duration-300 hover:bg-primary"
                            >
                                Try for free
                            </Link>

                            <div className="md:flex md:items-center md:gap-12.5 md:flex-row lg:mt-20 md:mt7.5 mt-7.5 flex gap-2.5 flex-col">
                                <div className="flex items-center gap-2.5 text-white">
                                    <Image src={Apple} alt="App Store" className="size-7.5" />
                                    <span className="text-base font-medium">4.5</span>
                                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400" />
                                    <span className="text-base text-white">on App store</span>
                                </div>

                                <div className="flex items-center gap-2.5 text-white">
                                    <Image src={Play} alt="Play Store" className="size-7.5" />
                                    <span className="text-base font-medium">4.5</span>
                                    <IconifyIconClient icon="tabler:star-filled" className="text-yellow-400" />

                                    <span className="text-base text-white">on Play store</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <Image src={hero} alt="Element image" className="rounded-2xl" />
                                <Image
                                    src={element}
                                    alt="Element image"
                                    className="md:absolute md:block md:-end-10 -end-7.5 -bottom-10 hidden"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
