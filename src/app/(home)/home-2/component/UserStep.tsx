import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import about from '@/assets/images/about/7.png';

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export const userStepsData: StepItem[] = [
  {
    number: '01',
    title: 'Sign up',
    description:
      'Create your Landinger account by providing basic information. It only takes a few minutes to get started.',
  },
  {
    number: '02',
    title: 'Set up your profile',
    description: 'Complete your profile by adding important details about your business.',
  },
  {
    number: '03',
    title: 'Customize your workspace',
    description:
      'Tailor Landinger to your business needs. Set up your workflows, integrate your favorite tools, and configure your dashboard.',
  },
  {
    number: '04',
    title: 'Launch and optimize',
    description:
      'Start using Landinger to manage your projects, track your analytics, and collaborate with your team.',
  },
];

const UserStep = () => {
  return (
    <>
      <section className="bg-dark lg:py-25 py-17.5">
        <div className="container">
          <div
            className="grid lg:grid-cols-2 lg:gap-15 gap-5"
            data-aos="fade-up"
            data-aos-duration={600}
            data-aos-easing="ease-in-out"
          >
            <div>
              <div className="relative">
                <Image src={about} alt="About" className="rounded-2xl" />
                <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex text-dark absolute -top-2.5 start-7.5">
                  Get started in 4 easy steps
                </div>
              </div>
              <div className="flex mt-7.5 gap-2.5 md:flex-row flex-col">
                <p className="text-white">Ready to experience the full power of Landinger?</p>
                <Link href="/pricing-2" className="inline-flex text-white underline">
                  <div>Learn more</div>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute start-7.5 h-11/12 w-0.75 bg-neutral-100/20" />
              <div className="relative z-10">
                {userStepsData.map((step, index) => (
                  <div key={index} className="flex gap-5 flex-row mb-12.5">
                    <div className="flex-shrink-1">
                      <div className="size-15 bg-primary rounded-full inline-flex items-center justify-center">
                        <h5 className="lg:text-1.5xl text-2.5xl">{step.number}</h5>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-1.5xl mb-2.5 text-white">{step.title}</h2>
                      <p className="text-white">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/sign-up"
                className="py-3.5 lg:px-7.5 px-6.5 rounded-2xl inline-flex font-medium bg-primary text-dark hover:text-primary hover:bg-black transition-all duration-300"
              >
                Get started now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserStep;
