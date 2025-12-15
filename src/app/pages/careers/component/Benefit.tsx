import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

const Benefit = () => {
  return (
    <>
      <div
        className="bg-body-bg rounded-2xl lg:p-12.5 md:p-7.5 py-7.5 px-3.75 mt-15"
        data-aos="fade-up"
        data-aos-duration={600}
        data-aos-easing="ease-in-out"
      >
        <h2 className="md:text-2.5xl text-1.5xl">Our benefits </h2>
        <div className="grid md:grid-cols-2 md:gap-12.5 gap-5 mt-10">
          <div className="flex gap-3.75 flex-col">
            <div className="flex  items-center gap-2.5 ">
              <IconifyIconClient icon="tabler:circle-check" className="size-6" />
              <p className="text-base">Innovative work environment </p>
            </div>
            <div className="flex items-center  gap-2.5">
              <IconifyIconClient icon="tabler:circle-check" className="size-6" />
              <p className="text-base">Comprehensive health benefits </p>
            </div>
            <div className="flex items-center  gap-2.5">
              <IconifyIconClient icon="tabler:circle-check" className="size-6" />
              <p className="text-base">Professional development opportunities </p>
            </div>
            <div className="flex items-center  gap-2.5">
              <IconifyIconClient icon="tabler:circle-check" className="size-6" />
              <p className="text-base">Employee recognition programs </p>
            </div>
          </div>
          <div className="flex gap-3.75 flex-col">
            <div className="flex  items-center gap-2.5 ">
              <IconifyIconClient icon="tabler:circle-check" className="size-6" />
              <p className="text-base">Flexible work arrangements </p>
            </div>
            <div className="flex items-center  gap-2.5">
              <IconifyIconClient icon="tabler:circle-check" className="size-6" />
              <p className="text-base">Collaborative and inclusive culture </p>
            </div>
            <div className="flex items-center  gap-2.5">
              <IconifyIconClient icon="tabler:circle-check" className="size-6" />
              <p className="text-base">Cutting-Edge technology </p>
            </div>
            <div className="flex items-center  gap-2.5">
              <IconifyIconClient icon="tabler:circle-check" className="size-6" />
              <p className="text-base">Career advancement </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
