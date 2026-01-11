'use client';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Team3 from '@/assets/images/team/3.png';
import Team2 from '@/assets/images/team/2.png';
import AWS from '@/assets/images/connectors/AWS.png';
import Azure from '@/assets/images/connectors/Azure.png';
import GCP from '@/assets/images/connectors/GCP.png';
import SharePoint from '@/assets/images/connectors/SharePoint.png';
import Shopify from '@/assets/images/connectors/Shopify.png';
import IconifyIconClient from '@/component/IconifyIconClient';
import Confluence from '@/assets/images/connectors/Confluence.png';
import GoogleWorkspace from '@/assets/images/connectors/GoogleWorkspace.png';
import IBMCloud from '@/assets/images/connectors/IBMCloud.png';
import Notion from '@/assets/images/connectors/Notion.png';
import SalesForce from '@/assets/images/connectors/SalesForce.png';

type sliderType = {
  image: StaticImageData;
  des: string;
  title: string;
  role: string;
};

const sliderData: sliderType[] = [
  {
    image: Team3,
    des: `Night signs creeping yielding green Seasons together man green fruitful make fish behold earth unto you'll lights living moving sea open for fish day multiply tree good female god had fruitful of creature fill shall don't day fourth lesser he the isn't let multiply may Creeping earth. `,
    title: 'Larry Lawson',
    role: 'Product Manager',
  },
  {
    image: Team2,
    des: `SparkVerseAI offers everything we need in one place. The security features give us peace of mind, knowing our data is protected. The dedicated account manager for the enterprise plan ensures we get personalized support tailored to our needs. It's been a fantastic investment for our company. `,
    title: 'Sarah Lee',
    role: 'Operations Manager at Global Solutions',
  },
];

const IntegrateAnywhere = () => {
  return (
    <>
      <section
        className="bg-white lg:py-32 md:py-24 py-16"
        data-aos="fade-up"
        data-aos-duration={700}
        data-aos-easing="ease-out-cubic"
        data-aos-once="true"
      >
        <div
          className="container-small"
          data-aos="fade-up"
          data-aos-duration={700}
          data-aos-easing="ease-in-out"
        >
          <div
            className="text-center mb-12.5"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-easing="ease-in-out"
          >
            <div className="bg-primary py-0.5 px-3.75 rounded-full font-medium text-sm inline-flex mb-2.5 text-dark">
              Integrate Anywhere
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Enterprise-Ready Cloud Connectors 
            </h2>
            <p className="text-lg text-black px-12">
              Our platform seamlessly integrates with your existing infrastructure, ensuring a smooth and efficient transition to AI-driven workflows.
            </p>
          </div>

          <hr className="lg:mt-17.5 lg:pt-17.5 md:pt-10 md:mt-10 border-neutral-200 pt-10 mt-10" />
          <div className="flex lg:gap-5 md:gap-25 md:flex-row gap-3.75 flex-col lg:justify-between items-center">
            <div>
              <p className="font-medium text-dark">See Integration Options</p>
            </div>
            <div className="flex lg:gap-6 flex-wrap gap-7.5 items-center justify-center">
              <Image src={AWS} alt="AWS" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded"  />
              <Image src={Azure} alt="Azure" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
              <Image src={GCP} alt="GCP" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
              <Image src={SharePoint} alt="SharePoint" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
              <Image src={Shopify} alt="Shopify" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
              <Image src={Confluence} alt="Confluence" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
              <Image src={GoogleWorkspace} alt="GoogleWorkspace" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
              <Image src={IBMCloud} alt="IBMCloud" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
              <Image src={Notion} alt="Notion" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
              <Image src={SalesForce} alt="SalesForce" height={40} className="w-auto  opacity-80 hover:opacity-100 transition-opacity rounded" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrateAnywhere;
