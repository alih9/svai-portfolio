'use client';
import Image from 'next/image';
import React from 'react';

// Connector Logos
import API from '@/assets/images/connectors/API_Logo_Icon.webp';
import AWS from '@/assets/images/connectors/AWS_Logo_Icon.webp';
import DynamoDB from '@/assets/images/connectors/Amazon_DynamoDB_Logo_Icon.webp';
import Cassandra from '@/assets/images/connectors/Apache_Cassandra_Logo_Icon.webp';
import AzureBlob from '@/assets/images/connectors/Azure_Storage_Blob_Logo_Icon.webp';
import AzureFiles from '@/assets/images/connectors/Azure_Storage_Files_Logo_Icon.webp';
import BitBucket from '@/assets/images/connectors/BitBucket_Logo.webp';
import Box from '@/assets/images/connectors/Box_Logo_Icon.webp';
import Confluence from '@/assets/images/connectors/Confluence_Logo_Icon.webp';
import DropBox from '@/assets/images/connectors/DropBox_Logo_Icon.webp';
import GitHub from '@/assets/images/connectors/GitHub_Logo_Icon.webp';
import GitLab from '@/assets/images/connectors/GitLab_Logo_Icon.webp';
import BigQuery from '@/assets/images/connectors/Google_BigQuery_Logo_Icon.webp';
import GoogleStorage from '@/assets/images/connectors/Google_Storage_Logo_Icon.webp';
import HubSpot from '@/assets/images/connectors/HubSpot_Logo.webp';
import HubSpot2 from '@/assets/images/connectors/HubSpot_Logo_2.webp';
import JSONIcon from '@/assets/images/connectors/JSON_Logo_Icon.webp';
import Jira from '@/assets/images/connectors/Jira_Logo_Icon.webp';
import Excel from '@/assets/images/connectors/Microsoft_Excel_Logo_Icon.webp';
import OneDrive from '@/assets/images/connectors/Microsoft_OneDrive_Logo_Icon.webp';
import SQLServer from '@/assets/images/connectors/Microsoft_SQL_Server_Logo.webp';
import SharePoint from '@/assets/images/connectors/Microsoft_SharePoint_Logo_Icon.webp';
import MongoDB from '@/assets/images/connectors/MongoDB_Logo_Icon.webp';
import MySQL from '@/assets/images/connectors/MySQL_Logo_Icon.webp';
import Oracle from '@/assets/images/connectors/Oracle_Logo_Icon.webp';
import PostgreSQL from '@/assets/images/connectors/PostgreSQL_Logo_Icon.webp';
import SDK from '@/assets/images/connectors/SDK_Logo_Icon.webp';
import SalesForce from '@/assets/images/connectors/SalesForce_Logo_Icon.webp';
import ServiceNow from '@/assets/images/connectors/ServiceNow_Logo_Icon.webp';
import Slack from '@/assets/images/connectors/Slack_Logo_Icon.webp';
import SnowFlake from '@/assets/images/connectors/SnowFlake_Logo_Icon.webp';
import WebHook from '@/assets/images/connectors/WebHook_Logo_Icon.webp';
import XMLIcon from '@/assets/images/connectors/XML_Logo_Icon.webp';
import ZenDesk from '@/assets/images/connectors/ZenDesk_Logo_Icon.webp';
import RDS from '@/assets/images/connectors/amazon_RDS_Logo_Icon.webp';
import S3 from '@/assets/images/connectors/amazon_S3_Logo_Icon.webp';
import Redshift from '@/assets/images/connectors/amazon_redshift_Logo_Icon.webp';

const connectors = [
  { src: AWS, alt: 'AWS' },
  { src: AzureBlob, alt: 'Azure Storage Blob' },
  { src: AzureFiles, alt: 'Azure Storage Files' },
  { src: API, alt: 'API' },
  { src: DynamoDB, alt: 'Amazon DynamoDB' },
  { src: Cassandra, alt: 'Apache Cassandra' },
  { src: BitBucket, alt: 'BitBucket' },
  { src: Box, alt: 'Box' },
  { src: Confluence, alt: 'Confluence' },
  { src: DropBox, alt: 'DropBox' },
  { src: GitHub, alt: 'GitHub' },
  { src: GitLab, alt: 'GitLab' },
  { src: BigQuery, alt: 'Google BigQuery' },
  { src: GoogleStorage, alt: 'Google Storage' },
  { src: HubSpot, alt: 'HubSpot' },
  { src: HubSpot2, alt: 'HubSpot' },
  { src: JSONIcon, alt: 'JSON' },
  { src: Jira, alt: 'Jira' },
  { src: Excel, alt: 'Microsoft Excel' },
  { src: OneDrive, alt: 'Microsoft OneDrive' },
  { src: SQLServer, alt: 'Microsoft SQL Server' },
  { src: SharePoint, alt: 'Microsoft SharePoint' },
  { src: MongoDB, alt: 'MongoDB' },
  { src: MySQL, alt: 'MySQL' },
  { src: Oracle, alt: 'Oracle' },
  { src: PostgreSQL, alt: 'PostgreSQL' },
  { src: SDK, alt: 'SDK' },
  { src: SalesForce, alt: 'SalesForce' },
  { src: ServiceNow, alt: 'ServiceNow' },
  { src: Slack, alt: 'Slack' },
  { src: SnowFlake, alt: 'SnowFlake' },
  { src: WebHook, alt: 'WebHook' },
  { src: XMLIcon, alt: 'XML' },
  { src: ZenDesk, alt: 'ZenDesk' },
  { src: RDS, alt: 'Amazon RDS' },
  { src: S3, alt: 'Amazon S3' },
  { src: Redshift, alt: 'Amazon Redshift' },
];

const IntegrateAnywhere = () => {
  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      <section
        className="bg-white lg:py-32 md:py-24 py-16 overflow-hidden"
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
              Integrate Any Source
            </div>
            <h2 className="mb-2.5 lg:text-5.5xl md:text-4.6xl text-3.4xl">
              Enterprise-Ready Cloud Connectors 
            </h2>
            <p className="text-lg text-black px-12">
              Our platform seamlessly integrates with your existing infrastructure, ensuring a smooth and efficient transition to AI-driven workflows.
            </p>
          </div>

          <hr className="lg:mt-17.5 lg:pt-17.5 md:pt-10 md:mt-10 border-neutral-200 pt-10 mt-10" />
          
          <div className="mt-10">
            <p className="font-medium text-dark mb-8 text-center md:text-left">See Integration Options</p>
            
            <div className="relative w-full overflow-hidden">
              <div className="flex animate-scroll whitespace-nowrap gap-12 items-center w-max">
                {/* First set of connectors */}
                {connectors.map((connector, index) => (
                  <div key={`c1-${index}`} className="flex-shrink-0">
                    <Image 
                      src={connector.src} 
                      alt={connector.alt} 
                      height={45} 
                      className="w-auto rounded grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110" 
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {connectors.map((connector, index) => (
                  <div key={`c2-${index}`} className="flex-shrink-0">
                    <Image 
                      src={connector.src} 
                      alt={connector.alt} 
                      height={45} 
                      className="w-auto rounded grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110" 
                    />
                  </div>
                ))}
              </div>
              
              {/* Fade gradients for smooth entry/exit */}
              <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
              <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntegrateAnywhere;
