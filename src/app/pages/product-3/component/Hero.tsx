
import React from 'react';
import blog2 from '@/assets/images/blog/2.png';
import element7 from '@/assets/images/element/7.svg';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <>
            <section className="bg-white lg:py-25 md:py-22.5 pt-5 pb-17.5">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:gap-12.5 md:gap-5 gap-7.5">
                        <div
                            className="flex justify-center md:gap-5 gap-2.5 flex-col"
                            data-aos="fade-right"
                            data-aos-delay={200}
                            data-aos-duration={500}
                            data-aos-easing="ease-in-out"
                        >
                            <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">
                                Empowering financial tools{' '}
                            </h1>
                            <p className="mb-2.5 md:w-4/5">
                                Discover a range of empowering financial tools designed to enhance your financial
                                management. From budgeting and expense tracking to investment monitoring.{' '}
                            </p>
                            <div className="flex lg:gap-5 gap-2.5 items-center">
                                <Link
                                    href="/sign-up"
                                    className="py-3.5 md:px-7.5 px-6.5 inline-flex items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                                >
                                    Try for free
                                </Link>
                                <p>No credit card required </p>
                            </div>
                        </div>
                        <div
                            className="relative"
                            data-aos="fade-left"
                            data-aos-delay={200}
                            data-aos-duration={500}
                            data-aos-easing="ease-in-out"
                        >
                            <Image src={blog2} alt="" className="rounded-2xl" />
                            <Image
                                height={170}
                                width={284}
                                src={element7}
                                alt=""
                                className="absolute lg:block border border-neutral-200 -bottom-7.5 -start-12.5 h-42.5 rounded-2xl hidden"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
