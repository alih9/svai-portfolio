import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type RequestFeature = {
  text: string;
};

const requestFeatures: RequestFeature[] = [
  { text: 'Live editing' },
  { text: 'Instant feedback' },
  { text: 'Task assignments' },
];

const Request = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5 ">
        <div className="container">
          <div
            className="lg:w-7/10 lg:mx-auto"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="text-center md:mb-12.5 mb-7.5">
              <h2 className="mb-2.5 lg:text-6xl md:text-4.6xl text-4xl">Request a demo </h2>
              <p>
                Elevate your business with a personalized demo of our solutions. Request your demo
                today and start your ascent to success.{' '}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:gap-12.5 md:gap-7.5 gap-7.5 mt-15">
              <div className="bg-dark lg:p-10 p-5 rounded-2xl flex md:gap-12.5 gap-5 flex-col h-full justify-between">
                <div>
                  <h2 className="text-white mb-2.5 lg:text-4xl md:text-3.4xl text-2.6xl">
                    Ready to elevate? request your demo today
                  </h2>
                </div>
                <div>
                  <div className="gap-3.75 flex flex-col">
                    {requestFeatures.map((feature, index) => (
                      <div className="flex gap-2.5" key={index}>
                        <IconifyIconClient icon="tabler:circle-check" className="size-6 text-primary" />
                        <div className="text-white text-base">{feature.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <form>
                <div className="mb-5">
                  <label htmlFor="name" className="mb-1.25 block font-normal">
                    Name
                  </label>
                  <input
                    className="rounded-2xl bg-white py-2.5 px-5 border border-neutral-200 w-full h-14"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder=""
                    type="text"
                    id="name"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="name" className="mb-1.25 block font-normal">
                    Email address{' '}
                  </label>
                  <input
                    className="rounded-2xl bg-white py-2.5 px-5 border border-neutral-200 w-full h-14"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder=""
                    type="text"
                    id="name"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="name" className="mb-1.25 block font-normal">
                    Your company name{' '}
                  </label>
                  <input
                    className="rounded-2xl bg-white py-2.5 px-5 border border-neutral-200 w-full h-14"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder=""
                    type="text"
                    id="name"
                  />
                </div>

                <div className="mb-5">
                  <label htmlFor="name" className="mb-1.25 block font-normal">
                    Your position{' '}
                  </label>
                  <input
                    className="rounded-2xl bg-white py-2.5 px-5 border border-neutral-200 w-full h-14"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder=""
                    type="text"
                    id="name"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Request;
