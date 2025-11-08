import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/images/logo/landinger.svg';
import { currentYear } from '@/component/CurrentYear';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Log In | Landinger - Multipurpose Tailwind CSS Landing Page Template',
};

const Page = () => {
    return (
        <section className="bg-white lg:py-25 md:py-22.5 py-17.5 md:h-dvh flex items-center">
            <div className="container">
                <div
                    className="lg:w-4/10 md:w-7/10 mx-auto"
                    data-aos="fade-up"
                    data-aos-delay={150}
                    data-aos-duration={500}
                    data-aos-easing="ease-in-out"
                >
                    <div className="lg:mb-12.5 md:mb-10 mb-7.5 text-center">
                        <h1 className="lg:text-6xl md:text-5.5xl text-4xl">log-in</h1>
                        <p className="mb-2.5">Please fill your email and password to login. </p>
                    </div>
                    <div className="bg-body-bg md:p-10 p-5 rounded-2xl">
                        <form action="" className="mb-3.75">
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-1.25 block font-normal">
                                    Email
                                </label>
                                <input
                                    className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                                    maxLength={256}
                                    name="name"
                                    data-name="Name"
                                    placeholder="Your email"
                                    type="text"
                                    id="name"
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-1.25 block font-normal">
                                    Password{' '}
                                </label>
                                <input
                                    className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                                    maxLength={256}
                                    name="password"
                                    data-name="Name"
                                    placeholder="Password"
                                    type="text"
                                    id="password"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="md:h-14 w-full py-3.5 lg:px-7.5 px-6.5 text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                        <div className="flex md:justify-between md:gap-5 md:flex-row gap-1.25 flex-col">
                            <p>
                                Don't have an account?{' '}
                                <Link href="/sign-up" className="underline text-dark">
                                    Sign up{' '}
                                </Link>{' '}
                            </p>
                            <Link href="/reset-password" className="underline text-dark">
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-between md:gap-5 md:flex-row gap-2.5 flex-col mt-7.5 items-center">
                        <Link href="/home-1">
                            {' '}
                            <Image src={logo} alt="" className="h-9 w-38.75" />
                        </Link>
                        <div className="text-sm">
                            {currentYear}. Crafted with ❤️{' '}
                            <Link href="" className="underline text-dark">
                                Coderthemes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
