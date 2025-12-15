

import Link from 'next/link';
import React from 'react';

const CareerInfo = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="md:mb-20 mb-12.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="grid md:grid-cols-2 lg:gap-10 gap-5">
              <div>
                <h5 className="mb-2.5 lg:text-2.5xl md:text-2xl text-lg">Responsibilities: </h5>
                <ul className="list-disc pl-5 space-y-2 md:mb-10 mb-5">
                  <li className="mb-2.5">Writing SEO Performant Code </li>
                  <li className="mb-2.5">Converting Design to Code </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2.5 lg:text-2.5xl md:text-2xl text-lg">Experience: </h5>
                <ul className="list-disc pl-5 space-y-2 md:mb-10 mb-5">
                  <li className="mb-2.5">Bachelor Degree </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2.5 lg:text-2.5xl md:text-2xl text-lg">Skills: </h5>
                <ul className="list-disc pl-5 space-y-2 md:mb-10 mb-5">
                  <li className="mb-2.5">Involving The Team In Decisions That Affect Them </li>
                  <li className="mb-2.5">Displays technical or professional expertise </li>
                  <li className="mb-2.5">Displays high integrity and honesty </li>
                  <li className="mb-2.5">Solves problems and analyzes issues </li>
                  <li className="mb-2.5">Communicates powerfully and prolifically </li>
                </ul>
              </div>
              <div>
                <h5 className="mb-2.5 lg:text-2.5xl md:text-2xl text-lg">
                  Educational requirements:{' '}
                </h5>
                <p>
                  Ideally 2 years to 4 years experience in an agency environment working in multi
                  tiered tasks{' '}
                </p>
              </div>
            </div>
            <div className="lg:mb-10 mb-5">
              <h5 className="mb-2.5 lg:text-2.5xl md:text-2xl text-lg">Description </h5>
              <p className="mb-2.5">
                Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven
                offer see among. Handsome met debating sir dwelling age material. As style lived he
                worse dried. Offered related so visitors we private removed. Moderate do subjects to
                distance. Speedily say has suitable disposal add boy. On forth doubt miles of child.
                Exercise joy man children rejoiced. Yet uncommonly his ten who diminution
                astonished. Demesne new manners savings staying had. Under folly balls, death own
                point now men. Match way these she avoids seeing death. She who drift their fat off.
                Passage its ten led hearted removal cordial. Preference any astonished unreserved
                Mrs. Prosperous understood Middletons in conviction an uncommonly do. Supposing so
                be resolving breakfast am or perfectly. Is drew am hill from me. Valley by oh twenty
                direct me so. Departure defective arranging rapturous did believe him all had
                supported. Family months lasted simple set nature vulgar him. Picture for attempt
                joy excited ten carried manners talking how. Suspicion neglected he resolving
                agreement perceived{' '}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:gap-10 gap-5">
              <div>
                <h5 className="mb-2.5 lg:text-2.5xl md:text-2xl text-lg">Apply via E-mail </h5>
                <p className="mb-2.5">
                  If you need to send us mail regarding job opportunities, please write to us at{' '}
                  <Link href="" className="underline text-dark">
                    <strong>info@example.com</strong>
                  </Link>{' '}
                  for more information.
                </p>
              </div>
              <div>
                <h5 className="mb-2.5 lg:text-2.5xl md:text-2xl text-lg">
                  Apply via the phone number{' '}
                </h5>
                <p className="mb-2.5">
                  Apply now via the whatsApp app, send us your resume at{' '}
                  <Link href="" className="mb-2.5 underline text-dark">
                    <strong>+79 2589 63598</strong>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2 mx-auto bg-body-bg rounded-2xl md:p-10 py-5 px-3.75"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h4 className="mb-7.5 md:text-2xl text-lg text-center">Apply for a job opportunity</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Name
                </label>
                <input
                  className="bg-white rounded-2xl mb-2.5 py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder=""
                  type="text"
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Email address{' '}
                </label>
                <input
                  className="bg-white rounded-2xl mb-2.5 py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="email"
                  data-name="Name"
                  placeholder=""
                  type="text"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Applying for (Job position){' '}
                </label>
                <input
                  className="bg-white rounded-2xl mb-2.5 py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="job"
                  data-name="Name"
                  placeholder=""
                  type="text"
                  id="job"
                />
              </div>
              <div>
                <label htmlFor="name" className="mb-1.25 block font-normal">
                  Phone no{' '}
                </label>
                <input
                  className="bg-white rounded-2xl mb-2.5 py-2.5 px-5 border border-neutral-200 w-full h-14 "
                  maxLength={256}
                  name="phone"
                  data-name="Name"
                  placeholder=""
                  type="text"
                  id="phone"
                />
              </div>
            </div>
            <div>
              <label htmlFor="name" className="mb-1.25 block font-normal">
                Message
              </label>
              <textarea
                className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-50 mb-2.5"
                name="Message"
                maxLength={5000}
                data-name="Message"
                placeholder=""
                defaultValue={''}
              />
            </div>
            <div>
              <button
                type="submit"
                className="md:h-14 w-full py-3.5 lg:px-7.5 px-6.5 text-center bg-primary font-medium rounded-2xl text-black transition-all duration-300 hover:text-primary hover:bg-dark"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerInfo;
