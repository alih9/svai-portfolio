
'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { submitContactForm } from '../actions';
import { Icon } from '@iconify/react';
import CountryDropdown from '@/component/ui/CountryDropdown';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
    country: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);

    setIsSubmitting(false);
    if (result.error) {
      setMessage({ type: 'error', text: result.error });
    } else {
      setMessage({ type: 'success', text: 'Thank you! Your request has been submitted.' });
      setFormData({ name: '', email: '', role: '', message: '' ,country:''});
      (event.target as HTMLFormElement).reset();
      
      // Reset Preline select if possible
      if (typeof window !== 'undefined' && window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    }
  };

  return (
    <section className="bg-body-bg lg:py-25 md:py-22.5 py-17.5 overflow-hidden">
      <div className="container-small">
        <div
          className="text-center md:mb-15 mb-10"
          data-aos="fade-up"
        >
             <h2 className="mb-4 lg:text-6xl md:text-5xl text-4xl font-bold tracking-tight text-dark">
            Contact <span className="text-primary">SparkVerse AI</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your data into intelligence? <br/> We're here to help you navigate the future of AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Info Card */}
          <div 
            className="lg:col-span-6 bg-dark p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between text-white relative overflow-hidden group"
            data-aos="fade-right"
          >
            {/* Background Accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2.5xl font-bold mb-6 text-primary leading-tight">
                Let’s Talk About Your Use Case
              </h3>
              <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                Whether you’re exploring intelligent search, AI chatbots, autonomous agents, analytics or secure deployment models, our team is here to help you evaluate what fits your organization; without pressure or unnecessary steps.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Icon icon="lucide:mail" className="text-primary text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold tracking-wider mb-1">Email us</p>
                    <Link href="mailto:info@sparkverse.ai" className="hover:text-primary transition-colors">
                      info@sparkverse.ai
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Icon icon="lucide:phone" className="text-primary text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold tracking-wider mb-1">Call us</p>
                    <Link href="tel:+44740400835" className="hover:text-primary transition-colors">
                      + (44) 7404 00835
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <Icon icon="lucide:map-pin" className="text-primary text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-bold tracking-wider mb-1">Visit us</p>
                    <p className="">105 Washington Rd, Bradford, UK.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">Privacy first approach</p>
              <p className="text-sm text-gray-400 italic">"Secure deployment models tailored for your enterprise needs."</p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div 
            className="lg:col-span-6 px-8"
            data-aos="fade-left"
          >
            
            
            
  <form onSubmit={handleSubmit} className="space-y-6">
               <div className="mb-5">
                 <label htmlFor="name" className="mb-1.25 block font-normal">
                   Full Name 
                 </label>
                 <input
                   className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14 "
                   maxLength={256}
                   name="name"
                   value={formData.name}
                   onChange={handleInputChange}
                   placeholder="John Deo"
                   type="text"
                   id="name"
                 />
               </div>
               <div className="mb-5">
                 <label htmlFor="email" className="mb-1.25 block font-normal">
                   Work Email 
                 </label>
                 <input
                   className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14"
                   maxLength={256}
                   name="email"
                   value={formData.email}
                   onChange={handleInputChange}
                   placeholder="Used only to respond to your request"
                   type="email"
                   id="email"
                   required
                 />
               </div>
               <div className="mb-5 flex gap-5 lg:flex-row flex-col">
                <div className="w-full">
                   <label htmlFor="role" className="mb-1.25 block font-normal">
                     Your Role 
                   </label>
                   <input
                     className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-14"
                     name="role"
                     value={formData.role}
                     onChange={handleInputChange}
                       placeholder="CTO, IT Lead..."
                     type="text"
                     id="role"
                   />
                 </div>
                 <div className="w-full">
                   <label htmlFor="country" className="mb-1.25 block font-normal">
                     Country
                   </label>
                  <CountryDropdown 
                  name="country"
                   value={formData.country}
                   onChange={(val) => setFormData(prev => ({ ...prev, country: val }))}
              placeholder="Search or select..."
            />
                 
                    
                 </div>
               </div>
               <div className="mb-5">
                 <label htmlFor="message" className="mb-1.25 block font-normal">
                   How can we help you? 
                 </label>
                 <textarea
                   className="bg-white rounded-2xl py-2.5 px-5 border border-neutral-200 w-full h-50"
                   name="message"
                   value={formData.message}
                   onChange={handleInputChange}
                   maxLength={5000}
                   placeholder="Short message about your use case, questions or goals"
                 />
                

               </div>
               <div>
                 <button
                   type="submit"
                 disabled={isSubmitting}

                   className="md:h-14 w-full py-3.5 lg:px-7.5 px-6.5 text-center bg-dark font-medium rounded-2xl text-white transition-all duration-300 hover:text-primary flex items-center justify-center gap-3"
                 >
                   {/* Submit */}
                    {isSubmitting ? (
                   <>
                     <Icon icon="lucide:loader-2" className="animate-spin text-2xl" />
                     Processing...
                   </>
                 ) : (
                   <>
                     Send Inquiry
                     <Icon icon="lucide:send" className="text-xl" />
                   </>
                 )}
                 </button>
               </div>
             </form>
           


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
