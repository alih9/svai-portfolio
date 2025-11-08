import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Img1 from '@/assets/images/team/5.png';
import Img2 from '@/assets/images/team/1.png';
import Img3 from '@/assets/images/team/3.png';
import Img4 from '@/assets/images/team/2.png';
import Img5 from '@/assets/images/team/6.png';
import { StaticImageData } from 'next/image';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
  link: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Amanda Reed',
    role: 'UI/UX Designer',
    image: Img1,
    link: '/about-details',
  },
  {
    id: 2,
    name: 'Lori Stevens',
    role: 'Web Designer',
    image: Img2,
    link: '/about-details',
  },
  {
    id: 3,
    name: 'Larry Lawson',
    role: 'Project Manager',
    image: Img3,
    link: '/about-details',
  },
  {
    id: 4,
    name: 'Judy Nguyen',
    role: 'Financial Analyst',
    image: Img4,
    link: '/about-details',
  },
  {
    id: 5,
    name: 'Carolyn Ortiz',
    role: 'Accountant',
    image: Img5,
    link: '/about-details',
  },
];

const Team = () => {
  return (
    <>
      <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div
            className="text-center mb-10"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">Meet our team </h2>
          </div>

          <div
            className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-25 md:gap-7.5 gap-5"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            {teamData.map(member => (
              <Link href={member.link} key={member.id} className="flex items-center gap-5">
                <div>
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="md:size-37.5 size-22.5 rounded-full"
                  />
                </div>
                <div>
                  <h3 className="mb-2.5 md:text-1.5xl text-xl">{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </Link>
            ))}
          </div>

          <div
            className="lg:mt-12.5 md:mt-10 mt-7.5 text-center flex gap-2.5 flex-col"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div>
              <Link
                href="/careers"
                className="py-3.5 md:px-7.5 px-6 inline-flex bg-primary font-medium rounded-2xl transition-all duration-300 hover:bg-black hover:text-primary"
              >
                Join us
              </Link>
            </div>
            <p>Together, let's create something amazing! </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
