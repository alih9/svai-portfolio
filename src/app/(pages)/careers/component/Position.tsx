

import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';

type JobPosition = {
  id: number;
  title: string;
  link: string;
  type: string;
  department: string;
  location: string;
};

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: 'PHP Software Developer',
    link: '/careers-details',
    type: 'Part-Time',
    department: 'Development',
    location: 'Canada',
  },
  {
    id: 2,
    title: 'Full Stack Engineer',
    link: '/careers-details',
    type: 'Part-Time',
    department: 'Development',
    location: 'New York',
  },
  {
    id: 3,
    title: 'Machine Learning Specialist',
    link: '/careers-details',
    type: 'Part-Time',
    department: 'Training Center',
    location: 'Mumbai, India',
  },
  {
    id: 4,
    title: 'Senior Product Manager',
    link: '/careers-details',
    type: 'Part-Time',
    department: 'Manager',
    location: 'USA',
  },
  {
    id: 5,
    title: 'PHP Software Developer',
    link: '/careers-details',
    type: 'Part-Time',
    department: 'Data Management',
    location: 'Dubai',
  },
];

const Position = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="lg:mb-12.5 text-center mb-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Open positions</h2>
            <p className="text-base mb-2.5">
              Real stories of success and satisfaction from businesses using Landinger.
            </p>
          </div>

          <div
            className="grid lg:grid-cols-2 gap-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            {jobPositions.map(job => (
              <Link
                key={job.id}
                href={job.link}
                className="bg-body-bg border border-body-bg p-5 flex justify-between md:flex-row gap-5 flex-col rounded-2xl transition-all duration-300 md:items-center hover:bg-white hover:border-neutral-200"
              >
                <div>
                  <h3 className="mb-2.5 text-2.5xl">{job.title}</h3>
                  <div className="flex gap-2.5 text-dark flex-wrap">
                    <div className="bg-primary rounded-2xl py-0.5 px-2.5">{job.type}</div>
                    <p>{job.department}</p>
                    <div>•</div>
                    <p>{job.location}</p>
                  </div>
                </div>
                <div>
                  <IconifyIconClient icon="tabler:arrow-left" className="size-7 text-black" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Position;
