

import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/images/logo/landinger-light.svg';
import IconifyIconClient from '@/component/IconifyIconClient';
import { currentYear } from '@/component/CurrentYear';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark pt-15 pb-10 md:pt-17.5 md:pb-10 lg:pt-25 lg:pb-10 overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-12.5 lg:grid-cols-8 lg:gap-5 gap-10">
            <div className="lg:col-span-3">
              <Link href="/home-1">
                <Image src={Logo} alt="" className="h-11" />
              </Link>
              <p className="mt-2.5 text-white">Trusted solutions for your growing business</p>
              <div className="mt-10 flex items-center gap-3.5 md:mt-15">
                <h2 className="md:text-5.5xl text-4xl text-white">4.8</h2>
                <div>
                  <div className="mb-1 flex gap-1.5">
                    <IconifyIconClient icon="tabler:star-filled" className="text-xl text-orange-300" />
                    <IconifyIconClient icon="tabler:star-filled" className="text-xl text-orange-300" />
                    <IconifyIconClient icon="tabler:star-filled" className="text-xl text-orange-300" />
                    <IconifyIconClient icon="tabler:star-filled" className="text-xl text-orange-300" />
                    <IconifyIconClient icon="tabler:star-filled" className="text-xl text-orange-300" />
                  </div>
                  <div className="text-white">Best rated company</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <h4 className="text-1.5xl mb-5 text-white">Pages</h4>
              <div className="grid grid-cols-2 md:gap-12.5 lg:gap-5 gap-2.5">
                <div>
                  <ul className="flex flex-col justify-start gap-2.5 leading-normal">
                    <li>
                      <Link href="/home-1" className="text-primary">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/home-2"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Home 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/home-3"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Home 3
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/product-1"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Product
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/product-2"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Product 2
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/product-3"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Product 3
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="flex flex-col justify-start gap-2.5 leading-normal">
                    <li>
                      <Link
                        href="/about"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/request-a-demo"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Request a Demo
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faqs"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="hover:text-primary text-white transition-all duration-300"
                      >
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-1.5xl mb-5 text-white">Contact us</h4>
              <div>
                <p className="mb-3.75 text-sm text-white md:text-base">
                  1234 Innovation drive, suite 100, tech city, CA 94043
                </p>
                <p className="hover:text-primary mb-3.75 text-sm text-white transition-all duration-300 md:text-base">
                  <Link href="">(123) 456-7890</Link>
                </p>
                <p className="hover:text-primary mb-3.75 text-sm text-white underline transition-all duration-300 md:text-base">
                  <Link href="">example@gmail.com</Link>
                </p>
                <div className="mt-7.5 flex items-center gap-2.5 md:mt-12.5">
                  <div className="flex items-center">
                    <p className="text-lg text-white">👋 Follow Us:</p>
                  </div>
                  <div className="flex gap-4">
                    <Link href="" className="flex">
                      <IconifyIconClient
                        icon="tabler:brand-meta"
                        className="size-5 text-white transform transition duration-300 hover:scale-110"
                      />
                    </Link>
                    <Link href="" className="flex">
                      <IconifyIconClient
                        icon="tabler:brand-dribbble"
                        className="size-5 text-white transform transition duration-300 hover:scale-110"
                      />
                    </Link>
                    <Link href="" className="flex">
                      <IconifyIconClient
                        icon="tabler:brand-linkedin"
                        className="size-5 text-white transform transition duration-300 hover:scale-110"
                      />
                    </Link>
                    <Link href="" className="flex">
                      <IconifyIconClient
                        icon="tabler:brand-x"
                        className="size-5 text-white transform transition duration-300 hover:scale-110"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-top mt-7.5 border-neutral-700 md:mt-15" />
          <div className="flex justify-between pt-7.5 md:pt-10">
            <div className="text-sm text-white">
              © {currentYear}{' '}
              <Link href="" className="underline">
                Landinger.
              </Link>
            </div>
            <div className="text-sm text-white">
              Crafted with ❤️ By{' '}
              <Link href="" className="underline">
                Coderthemes
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
