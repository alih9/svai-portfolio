import Image from 'next/image';
import React from 'react';
import Team5 from '@/assets/images/team/5.png';
import about8 from '@/assets/images/about/8.png';

const UserManagement = () => {
  return (
    <>
      <section className="bg-dark lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:gap-25 md:gap-7.5 gap-7.5">
            <div
              className="flex flex-col lg:gap-12.5 md:gap-2.5 justify-between"
              data-aos="fade-right"
              data-aos-delay={200}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <div className="lg:mb-12.5 md:mb-10 mb-6.5">
                <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl text-white">
                  User management and authentication{' '}
                </h2>
                <p className="text-base mb-2.5 text-white">
                  Discover how SparkVerseAI can transform your business operations with our
                  innovative features.{' '}
                </p>
              </div>
              <div className="flex gap-5 md:flex-row flex-col">
                <Image src={Team5} alt="" className="md:size-17.5 size-15 rounded-full" />
                <div>
                  <p className="mb-2.5 text-lg text-white">
                    Its user-friendly interface and robust features have made our tasks more
                    efficient. Highly recommended!
                  </p>
                  <div className="text-sm text-white">- Louis Ferguson</div>
                </div>
              </div>
            </div>
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-delay={200}
              data-aos-duration={600}
              data-aos-easing="ease-in-out"
            >
              <Image src={about8} alt="" className="size-full rounded-2xl object-cover" />
              <div className="md:absolute md:-bottom-5 md:-start-5 md:w-55 md:bg-white md:p-6.25 md:rounded-2xl md:block hidden">
                <h3 className="text-5.5xl">98.5%</h3>
                <div className="text-lg">Total reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserManagement;
