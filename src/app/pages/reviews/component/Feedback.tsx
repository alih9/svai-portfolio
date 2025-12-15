import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Img1 from '@/assets/images/team/5.png';
import Img2 from '@/assets/images/about/8.png';
import Img3 from '@/assets/images/hero/1.png';
import Img4 from '@/assets/images/team/3.png';
import Img5 from '@/assets/images/about/4.png';
import Img6 from '@/assets/images/client/5.svg';
import Img7 from '@/assets/images/team/2.png';
import Image from 'next/image';

const Feedback = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5 ">
        <div className="container">
          <div
            className="lg:mb-12.5 text-center mb-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Feedback from our customers{' '}
            </h2>
          </div>
          <div
            className="grid lg:grid-cols-3 lg:gap-7.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div>
              <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl mb-7.5">
                <div className="flex gap-3.75 flex-col">
                  <div>
                    <div className="flex gap-1.5 mb-3.75">
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient
                        icon="tabler:"
                        className="iconify tabler--star-half-filled lg:size-5 text-yellow-400"
                      />
                    </div>
                    <p className="mb-2.5">
                      It's been a game-changer for our business, and I can't imagine going back to
                      the way things were before.{' '}
                    </p>
                  </div>
                  <div>
                    <div className="text-black text-bold">— Louis Ferguson</div>
                  </div>
                </div>
              </div>

              <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl mb-7.5">
                <div className="flex gap-3.75 flex-col">
                  <div>
                    <div className="flex gap-1.5 mb-3.75">
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-half-filled" className="lg:size-5 text-yellow-400" />
                    </div>
                    <p className="mb-2.5">
                      Started several mistake joy say painful removed reached end. State burst think
                      end are its. Arrived off she elderly beloved him affixed noisier yet.{' '}
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Image src={Img1} alt="" className="size-12.5 rounded-full" />
                    <div className="text-black text-bold">Carolyn Ortiz </div>
                  </div>
                </div>
              </div>

              <div className="lg:mb-7.5 mb-5">
                <Image
                  src={Img2}
                  alt=""
                  className="h-57.5 w-full object-cover object-bottom rounded-2xl"
                />
              </div>
            </div>
            <div>
              <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl mb-7.5">
                <div className="flex gap-3.75 flex-col">
                  <div>
                    <Image
                      src={Img3}
                      alt=""
                      className="lg:h-49 size-full object-cover rounded-2xl"
                    />
                  </div>
                  <div>
                    <div className="flex gap-1.5 mb-3.75">
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-half-filled" className="lg:size-5 text-yellow-400" />
                    </div>
                    <p className="mb-2.5">
                      Started several mistake joy say painful removed reached end. State burst think
                      end are its. Arrived off she elderly beloved him affixed noisier yet.{' '}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl lg:mb-7.5 mb-5">
                <div className="flex gap-3.75 flex-col">
                  <div>
                    <div className="flex gap-1.5 mb-3.75">
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-half-filled" className="lg:size-5 text-yellow-400" />
                    </div>
                    <p className="mb-2.5">
                      Started several mistake joy say painful removed reached end. State burst think
                      end are its. Arrived off she elderly beloved him affixed noisier yet.{' '}
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Image src={Img4} alt="" className="size-12.5 rounded-full" />
                    <div className="text-black text-bold">Billy Vasquez </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-7.5">
                <Image src={Img5} alt="" className="h-57.5 w-full object-cover rounded-2xl" />
              </div>

              <div className="bg-body-bg lg:p-7.5 p-5 rounded-2xl lg:mb-7.5 mb-5">
                <div className="flex gap-3.75 flex-col">
                  <div>
                    <div className="bg-white rounded-2xl flex items-center justify-center mb-5 h-45">
                      <Image src={Img6} alt="" className="h-7.5" />
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-1.5 mb-3.75">
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-filled" className="lg:size-5 text-yellow-400" />
                      <IconifyIconClient icon="tabler:star-half-filled" className="lg:size-5 text-yellow-400" />
                    </div>
                    <p className="mb-2.5">
                      Started several mistake joy say painful removed reached end. State burst think
                      end are its. Arrived off she elderly beloved him affixed noisier yet.{' '}
                    </p>
                  </div>
                  <div className="flex gap-2.5 items-center">
                    <Image src={Img7} alt="" className="size-12.5 rounded-full" />
                    <div className="text-black text-bold">Amanda Reed </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
