import IconifyIconClient from '@/component/IconifyIconClient';

type FaqItem = {
    question: string;
    answer: string;
};

type FaqSection = {
    title: string;
    items: FaqItem[];
};

const faqSections: FaqSection[] = [
    {
        title: 'General',
        items: [
            {
                question: 'Can I cancel my subscription at any time?',
                answer: 'You can cancel your subscription at any time from your account settings.',
            },
            {
                question: 'Do you offer discounts for bulk orders?',
                answer:
                    'We offer discounts for bulk orders. Please contact our sales team for more details.',
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
        ],
    },
    {
        title: 'Software',
        items: [
            {
                question: 'How can I update my billing information?',
                answer:
                    'Billing information can be updated by logging into your account and going to the billing section under account settings.',
            },
            {
                question: 'Will I receive a refund if I cancel my subscription?',
                answer:
                    'Our refund policy varies depending on the subscription plan. Please refer to our refund policy page or contact support for specific details.',
            },
            {
                question: 'Can I set up automatic payments for my invoices?',
                answer: 'Automatic payments can be set up in the billing section of your account settings.',
            },
            {
                question: 'How can I view my billing history?',
                answer:
                    'View your billing history by logging into your account and going to the billing section.',
            },
        ],
    },
    {
        title: 'Billing',
        items: [
            {
                question: 'Do you share my personal information with third parties?',
                answer:
                    'We do not share your personal information with third parties without your consent, except as required by law. Please review our privacy policy for more details.',
            },
            {
                question: 'Is my payment information secure?',
                answer: 'Your payment information is secure, as we use industry-standard encryption.',
            },
            {
                question: 'Can I access, update, or delete my personal information?',
                answer:
                    'Access, update, or delete your personal information through your account settings. If you need assistance, please contact our support team.',
            },
            {
                question: 'How long do you retain my personal data?',
                answer:
                    'We retain your personal data for as long as your account is active or as needed to provide you with our services. Please refer to our data retention policy for more details.',
            },
        ],
    },
];

const Faq = () => {


    return (
        <section className="bg-white lg:py-25 md:py-22.5 py-17.5">
            <div className="container-small">
                {faqSections.map((section, sectionIndex) => (
                    <div
                        key={section.title}
                        className="text-center md:mb-20 mb-15"
                        data-aos="fade-up"
                        data-aos-delay={sectionIndex * 100 + 150}
                        data-aos-duration={500}
                        data-aos-easing="ease-in-out"
                    >
                        <h2 className="lg:text-4xl md:text-4.6xl text-3.4xl md:mb-7.5 mb-2.5">
                            {section.title}
                        </h2>
                        <div>
                            <div className="md:space-y-7.5 space-y-5">
                                {section.items.map((item, idx) => (
                                    <div className={`hs-accordion bg-body-bg p-5 rounded-2xl`} key={idx}>
                                        <button className="hs-accordion-toggle w-full flex justify-between items-center gap-2.5 text-start">
                                            <h3 className="md:text-1.5xl text-xl">
                                                {item.question}
                                            </h3>
                                            <div>
                                                <div className="bg-white hs-accordion-active:bg-primary size-7.5 rounded-full flex items-center justify-center">
                                                    <IconifyIconClient icon='tabler:plus' className="size-5 block hs-accordion-active:hidden" />
                                                    <IconifyIconClient icon='tabler:minus' className="size-5 hidden hs-accordion-active:block" />
                                                </div>
                                            </div>
                                        </button>
                                        <div className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 text-start hidden`}>
                                            <p className="mt-5">{item.answer}</p>
                                        </div>
                                    </div>
                                ))

                                }

                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
