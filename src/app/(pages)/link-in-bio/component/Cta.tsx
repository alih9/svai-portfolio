import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '@/assets/images/logo/landinger-icon.svg';
import IconifyIconClient from '@/component/IconifyIconClient';

const Cta = () => {
  return (
    <>
      <section className="bg-body-bg md:py-15 py-3.75 pt-3.75">
        <div className="container">
          <div className="lg:w-1/2 mx-auto md:w-4/5 md:p-12.5 p-5 bg-white rounded-2xl text-center">
            <div>
              <div className="md:size-25 size-22.5 md:mb-5 mb-2.5 bg-primary rounded-full inline-flex items-center justify-center">
                <Image src={Logo} alt="" className="md:size-10 size-12.5" />
              </div>
              <h1 className="md:text-6xl text-4xl">SparkVerseAI</h1>
              <p className="mb-2.5">
                A brief overview of your professional background and experience, highlighting key
                accomplishments and skills.{' '}
              </p>
              <div className="md:py-10 py-5 flex gap-5 flex-col">
                <Link
                  href=""
                  className="py-3.5 px-7.5  items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary hover:bg-black"
                >
                  Visit our website
                </Link>
                <Link
                  href=""
                  className="py-3.5 px-7.5  items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary hover:bg-black"
                >
                  Read our blog
                </Link>
                <Link
                  href=""
                  className="py-3.5 px-7.5  items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary hover:bg-black"
                >
                  Visit product
                </Link>
                <Link
                  href=""
                  className="py-3.5 px-7.5  items-center text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary hover:bg-black"
                >
                  Contact Us
                </Link>
              </div>
              <div className="flex gap-2.5 flex-col">
                <p>Follow us on social media</p>
                <div className="flex justify-center gap-3.75 text-black">
                  <Link href="">
                    <IconifyIconClient
                      icon="tabler:brand-facebook"
                      className="md:size-6 size-5 transform transition duration-300 hover:scale-110"
                    />
                  </Link>
                  <Link href="">
                    <IconifyIconClient
                      icon="tabler:brand-instagram"
                      className="md:size-6 size-5 transform transition duration-300 hover:scale-110"
                    />
                  </Link>
                  <Link href="">
                    <IconifyIconClient
                      icon="tabler:brand-linkedin"
                      className="md:size-6 size-5 transform transition duration-300 hover:scale-110"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
