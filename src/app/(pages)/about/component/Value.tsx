import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';
import CountUpClient from '@/component/CountUpClient';

const Value = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid lg:grid-cols-2 lg:gap-12.5 gap-5">
            <div
              className="bg-dark lg:p-12.5 p-5 rounded-2xl"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <div>
                <h2 className="mb-2.5 md:text-4xl text-2.6xl text-white">Our core values</h2>
                <p className="mb-2.5 text-white">
                  Welcome to Spark Verse AI, where innovation meets efficiency. Our cloud-based software
                  solutions.
                </p>
              </div>
              <div className="grid md:grid-cols-2 md:gap-5 gap-7.5 md:mt-20 md:mb-12.5 my-7.5">
                <div>
                  <div className="size-12.5 md:mb-5 mb-2.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="solar:chart-square-linear" className="size-6 text-black" />
                  </div>
                  <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">Innovation </h3>
                  <p className="mb-2.5 text-white">
                    We embrace innovation as the cornerstone of our success.{' '}
                  </p>
                </div>
                <div>
                  <div className="size-12.5 md:mb-5 mb-2.5 bg-primary rounded-full inline-flex items-center justify-center">
                    <IconifyIconClient icon="solar:sale-linear" className="size-6 text-black" />
                  </div>
                  <h3 className="text-white mb-2.5 md:text-1.5xl text-xl">
                    Continuous Improvement{' '}
                  </h3>
                  <p className="mb-2.5 text-white">
                    Which is the same as saying through shrinking from.{' '}
                  </p>
                </div>
              </div>
              <div className="text-white">
                Empowerment &nbsp; · &nbsp; Impact &nbsp; · &nbsp; Customer-Centricity
              </div>
            </div>
            <div>
              <div
                className="bg-primary lg:p-12.5 p-5 rounded-2xl"
                data-aos="fade-up"
                data-aos-delay={150}
                data-aos-duration={600}
                data-aos-easing="ease-in-out"
              >
                <div className="mb-7">
                  <h2 className="mb-2.5 md:text-4xl text-2.6xl">
                    Ready to revolutionize your business?{' '}
                  </h2>
                  <p className="mb-2.5">
                    Take the first step towards unlocking your full potential with Spark Verse AI.{' '}
                  </p>
                </div>
                <Link
                  href="/sign-up"
                  className="py-3.5 md:px-7.5 px-6 inline-flex text-white font-medium rounded-2xl bg-dark transition-all duration-300 hover:text-primary"
                >
                  Sign in
                </Link>
              </div>
              <div
                className="grid md:grid-cols-2 lg:gap-12.5 md:gap-5 gap-5 lg:mt-12.5 mt-5"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={600}
                data-aos-easing="ease-in-out"
              >
                <div className="bg-white rounded-2xl lg:p-7.5 p-5">
                  <h2 className="lg:text-4.4xl md:text-4xl text-3xl">
                    <CountUpClient end={35} suffix="+" duration={5} />
                  </h2>
                  <p className="md:mt-5 mt-2.5">Awards and counting</p>
                </div>
                <div className="bg-white rounded-2xl lg:p-7.5 p-5">
                  <h2 className="lg:text-4.4xl md:text-4xl text-3xl">
                    <CountUpClient end={10} suffix="K" duration={5} />{' '}
                  </h2>
                  <p className="md:mt-5 mt-2.5">Satisfied users </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
