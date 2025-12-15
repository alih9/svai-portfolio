

import Link from 'next/link';
import React from 'react';

const Career = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h1 className="lg:text-6xl md:text-5.5xl text-4xl mb-2.5">PHP Software Developer </h1>
            <div className="md:gap-10 flex md:flex-row gap-3 flex-col justify-center items-center md:my-7.5 mt-2.5 mb-3.75">
              <div className="flex gap-2.5">
                <strong>Department:</strong>
                <p>Development</p>
              </div>
              <div className="flex gap-2.5">
                <strong>Location: </strong>
                <p>Canada</p>
              </div>
              <div className="flex gap-2.5">
                <strong>Job Timing :</strong>
                <p>Part-Time </p>
              </div>
            </div>
            <Link
              href=""
              className="py-3.5 md:px-7.5 px-6 inline-flex bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:bg-black hover:text-primary"
            >
              Apply now!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
