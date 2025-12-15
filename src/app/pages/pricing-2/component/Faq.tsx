'use client';
import React, { useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'You can cancel your subscription at any time from your account settings.',
  },
  {
    question: 'Do you offer discounts for bulk orders?',
    answer: 'We offer discounts for bulk orders. Please contact our sales team for more details.',
  },
  {
    question: 'How do I update my account information?',
    answer:
      'Update your account information by logging into your account and navigating to the account settings page.',
  },
  {
    question: 'What if I need to cancel my subscription?',
    answer:
      'If you need to cancel your subscription, you can do so from your account settings. If you have any issues, please contact our support team for assistance.',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<Set<number>>(new Set());

  const toggleAccordion = (index: number) => {
    const updatedSet = new Set(openIndex);
    if (updatedSet.has(index)) {
      updatedSet.delete(index);
    } else {
      updatedSet.add(index);
    }
    setOpenIndex(updatedSet);
  };

  return (
    <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
      <div className="container">
        <div
          className="md:mb-12.5 mb-7.5 text-center"
          data-aos="fade-up"
          data-aos-duration={500}
          data-aos-easing="ease-in-out"
        >
          <h2 className="lg:text-5.5xl md:text-4.6xl text-3.4xl mb-2.5">
            Frequently asked questions
          </h2>
        </div>

        <div data-aos="fade-up" data-aos-duration={500} data-aos-easing="ease-in-out">
          <div className="md:space-y-7.5 space-y-5 lg:w-1/2 mx-auto">
            {faqData.map((faq, index) => {
              const isOpen = openIndex.has(index);

              return (
                <div key={index} className="bg-body-bg p-5 rounded-2xl transition-all duration-300">
                  <button
                    className="w-full flex justify-between items-center gap-2.5 text-start"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="md:text-1.5xl text-xl">{faq.question}</h3>
                    <div
                      className={`size-7.5 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-[var(--color-primary)]' : 'bg-white'
                      }`}
                    >
                      <IconifyIconClient
                        icon={isOpen ? 'tabler:minus' : 'tabler:plus'}
                        className="size-5 text-dark"
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-5">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
