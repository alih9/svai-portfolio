import Image, { StaticImageData } from 'next/image';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

import Team2 from '@/assets/images/team/2.png';
import Team1 from '@/assets/images/team/1.png';
import Team3 from '@/assets/images/team/3.png';
import Team4 from '@/assets/images/team/4.png';
import Team6 from '@/assets/images/team/6.png';

type ReviewItem = {
  image: StaticImageData;
  name: string;
  position: string;
  content: string;
};

const reviews: ReviewItem[] = [
  {
    image: Team2,
    name: 'France Guerrero',
    position: 'UI/UX Designer',
    content:
      'Michael’s creativity and attention to detail are key to our intuitive and user-friendly design. His passion for user experience drives our. ',
  },
  {
    image: Team1,
    name: 'Samuel Bishop',
    position: 'Web Designer',
    content:
      'Son agreed to others Exeter period myself few yet nature. Mention Mr manners opinion if garrets enabled To occasional dissimilar.',
  },
  {
    image: Team3,
    name: 'Louis Ferguson',
    position: 'Project Manager',
    content:
      'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor explained propriety.',
  },
  {
    image: Team4,
    name: 'Judy Nguyen',
    position: 'Financial Analyst',
    content:
      'Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced settling say. ',
  },
  {
    image: Team2,
    name: 'Carolyn Ortiz',
    position: 'Accountant',
    content:
      'Post no so what deal evil rent by real in. But her ready least set lived spite solid. September how men saw tolerably two behavior.',
  },
  {
    image: Team6,
    name: 'Amanda Reed',
    position: 'Web Developer',
    content:
      'Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage.',
  },
];

const Review = () => {
  return (
    <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
      <div className="container">
        <div
          className="lg:mb-12.5 text-center mb-7.5"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-4xl">What people are saying </h2>
          <p className="mb-2.5">He moonlights difficult engrossed it, sportsmen.</p>
        </div>
        <div
          className="grid md:grid-cols-3 lg:gap-7.5 gap-5"
          data-aos="fade-up"
          data-aos-delay={200}
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          {reviews.map((review, index) => (
            <div key={index} className="bg-body-bg rounded-2xl lg:p-10 p-5 h-full">
              <div className="flex mb-3.75">
                <div className="flex gap-1.5">
                  <IconifyIconClient icon="tabler:star-filled" className="size-5 text-yellow-400" />
                  <IconifyIconClient icon="tabler:star-filled" className="size-5 text-yellow-400" />
                  <IconifyIconClient icon="tabler:star-filled" className="size-5 text-yellow-400" />
                  <IconifyIconClient icon="tabler:star-filled" className="size-5 text-yellow-400" />
                  <IconifyIconClient icon="tabler:star-half-filled" className="size-5 text-yellow-400" />
                </div>
              </div>
              <p className="mb-2.5">{review.content}</p>
              <div className="lg:mt-11.25 mt-5 flex items-center lg:gap-3.75 gap-2.5 flex-row">
                <div>
                  <Image
                    src={review.image}
                    alt={review.name}
                    className="lg:size-15 size-10 rounded-full"
                  />
                </div>
                <div>
                  <div className="text-black">{review.name}</div>
                  <p className="text-sm">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
