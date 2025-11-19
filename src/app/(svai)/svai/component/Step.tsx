import Image from 'next/image';
import React from 'react';
import about from '@/assets/images/about/2.png';

type StepType = {
  number: string;
  title: string;
  des: string;
};

const stepData: StepType[] = [
  {
    number: '01',
    title: 'Sign up',
    des: 'Create your account in seconds and choose your plan.',
  },
  {
    number: '02',
    title: 'Integrate and collect data',
    des: ' Tailor your settings and preferences to fit your business needs.',
  },
  {
    number: '03',
    title: 'Invite team',
    des: 'Add team members and collaborators to get started.',
  },
];

const Step = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5 ">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Easy steps to success{' '}
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Quick start guide </h2>
          </div>

          <div className="grid md:grid-cols-3 md:gap-12.5 my-12.5 gap-5">
            {stepData.map((item, idx) => (
              <div
                key={idx}
                className="flex lg:gap-3.5 lg:flex-row gap-3 flex-col"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
              >
                <div className="flex-shrink-1">
                  <div className="lg:size-11 size-10 bg-primary rounded-full inline-flex items-center justify-center">
                    <h5 className="lg:text-1.5xl text-xl">{item.number}</h5>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="lg:text-1.5xl text-xl mb-2.5">{item.title}</h3>
                  <p className="text-base mb-2.5">{item.des}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <Image
              src={about}
              className="rounded-2xl"
              alt=""
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Step;
