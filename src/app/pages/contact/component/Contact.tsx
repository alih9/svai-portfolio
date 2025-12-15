

import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5 ">
        <div className="container-small">
          <div
            className="text-center md:mb-12.5 mb-7.5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-6xl md:text-4.6xl text-4xl">
              We're ready to assist you{' '}
            </h2>
            <p>Have questions? We’re ready to help! </p>
          </div>
          <div
            className="grid lg:grid-cols-2 lg:gap-12.5 md:gap-5 gap-7.5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary lg:p-10 p-5 rounded-2xl h-full flex justify-between gap-12.5 flex-col">
              <div>
                <h2 className="text-2.5xl">
                  For any inquiries or feedback, our team is here to assist you.{' '}
                </h2>
              </div>
              <div className="flex gap-2.5 flex-col">
                <Link href="" className="underline text-dark">
                  hello@example.com
                </Link>
                <Link href="" className="underline text-dark">
                  +0 12 457 4578
                </Link>
                <p>Chicago HQ Estica Cop. Macomb, MI 48042</p>
              </div>
            </div>
            <form>
              <div className="mb-5">
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Name
                </label>
                <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="John Deo"
                  type="text"
                  id="name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Email address{' '}
                </label>
                <input
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14"
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="hello@example.com"
                  type="text"
                  id="name"
                />
              </div>
              <div className="mb-5 flex gap-5 lg:flex-row flex-col">
                <div>
                  <label htmlFor="name" className="mb-1.25 block font-normal">
                    Phone{' '}
                  </label>
                  <input
                    className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14"
                    name="name"
                    data-name="Name"
                    placeholder="+2 123 456 66"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="mb-1.25 block font-normal">
                    Subject{' '}
                  </label>
                  <input
                    className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14"
                    name="name"
                    data-name="Name"
                    placeholder="Subject"
                    type="text"
                    id="name"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Message
                </label>
                <textarea
                  className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-50"
                  name="Message"
                  maxLength={5000}
                  data-name="Message"
                  placeholder="Comment"
                  defaultValue={''}
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
      </section>
    </>
  );
};

export default Contact;
