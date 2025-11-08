import React from 'react';
import CountUpClient from '@/component/CountUpClient';

const Counter = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-7.5 gap-5 justify-between">
            <div
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <h4 className="md:text-4xl text-2.6xl">
                <CountUpClient end={500} />
              </h4>
              <p>Trusted partners </p>
            </div>
            <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
              <h4 className="md:text-4xl text-2.6xl">
                <CountUpClient end={20} suffix="+" />
              </h4>
              <p>Active users </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={150}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <h4 className="md:text-4xl text-2.6xl">
                <CountUpClient end={150} suffix="+" />
              </h4>
              <p>Total reviews </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={500}
              data-aos-easing="ease-in-out"
            >
              <h4 className="md:text-4xl text-2.6xl">
                <CountUpClient end={200} suffix="+" />
              </h4>
              <p>Completed projects </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
