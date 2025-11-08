import Link from 'next/link';
import React from 'react';

type Step = {
  title: string;
  points: string[];
};

const steps: Step[] = [
  {
    title: 'Step 1: Access Fusion link Dashboard',
    points: [
      "If you don't already have a Fusion link account, you can sign up for one at Fusion link website.",
      'Once registered, log in to your Fusion link account using your credentials.',
    ],
  },
  {
    title: 'Step 2: Generate Integration Token',
    points: [
      'In the Fusion link dashboard, navigate to the "Integrations" or "API Settings" section, usually located in the settings menu.',
      'Locate the option to generate an integration token and follow the provided instructions.',
      'This token will serve as the authentication mechanism between your SaaS application and Fusion link.',
    ],
  },
  {
    title: 'Step 3: Configure Integration in Your SaaS Dashboard',
    points: [
      "Log in to your SaaS application's dashboard and navigate to the integrations settings page.",
      'Look for the option to add a new integration and select Fusion link from the list of available integrations.',
      'Paste the integration token generated in Step 2 into the designated field.',
      'Save your changes to enable the integration.',
    ],
  },
  {
    title: 'Step 4: Map Data Fields',
    points: [
      "After configuring the integration, you'll need to map the relevant data fields between your SaaS application and Fusion link.",
      'This mapping ensures that the data exchanged between the two platforms is correctly synchronized.',
      'Common data fields to map may include customer information, product details, orders, and inventory levels.',
    ],
  },
  {
    title: 'Step 5: Test Integration',
    points: [
      'To ensure that the integration is functioning properly, perform various actions within your SaaS application, such as creating new customers or processing orders.',
      'Verify that the data is accurately synchronized with Fusion link and reflects the changes made in real-time.',
      'Testing the integration thoroughly helps identify any potential issues early on and ensures a seamless user experience.',
    ],
  },
  {
    title: 'Step 6: Additional Configuration (if applicable)',
    points: [
      'Depending on your specific use case and requirements, you may need to configure additional settings within Fusion link.',
      'This could include defining synchronization frequency, setting up data filters or transformations, or configuring advanced features offered by Fusion link.',
      'Refer to the Fusion link documentation or reach out to their support team for guidance on any advanced configurations.',
    ],
  },
  {
    title: 'Step 7: Troubleshooting (if necessary)',
    points: [
      "In the event that you encounter any difficulties during the integration process, don't hesitate to seek assistance.",
      'Consult the Fusion link documentation, knowledge base, or community forums for troubleshooting tips and common solutions.',
      'If the issue persists, reach out to Fusion link support team for personalized assistance and guidance in resolving the issue promptly.',
    ],
  },
];

const Integrations = () => {
  return (
    <>
      <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
        <div className="container">
          <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
            {steps.map((step, index) => (
              <div key={index} className="md:mb-10 mb-5">
                <h6 className="text-1.5xl mb-2.5">{step.title}</h6>
                <ul className="list-disc pl-5 space-y-2 md:mb-10 mb-5">
                  {step.points.map((point, i) => (
                    <li key={i} className="mb-2.5">
                      {point.includes('Fusion link website') ? (
                        <>
                          If you don't already have a Fusion link account, you can sign up for one
                          at{' '}
                          <Link href="" className="underline text-dark">
                            Fusion link website.
                          </Link>
                        </>
                      ) : (
                        point
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Integrations;
