import Link from 'next/link';
import React from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import { currentYear } from '@/component/CurrentYear';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-dark pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-32 lg:pb-12 overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-4 max-w-sm">
              <Link href="/">
                <Image
                  src="/Logos/SparkVerse-Logo-Footer.webp"
                  alt="SparkVerse AI Logo"
                  width={150}
                  height={55}
                  className="h-12 w-auto mb-6"
                />
              </Link>
              <h3 className="text-white text-xl font-bold mb-4 leading-tight">
                AI Product Knowledge Intelligence for Modern E-Commerce.
              </h3>
              <p className="text-white/70 text-base mb-8 leading-relaxed">
                Turning fragmented product data into intelligent search, AI agents, and actionable insights; securely and at scale.
              </p>
              <div className="flex gap-5">
                <Link href="#" className="group">
                  <IconifyIconClient
                    icon="tabler:brand-linkedin"
                    className="size-6 text-white/60 group-hover:text-primary transition-colors duration-300"
                  />
                </Link>
                <Link href="#" className="group">
                  <IconifyIconClient
                    icon="tabler:brand-github"
                    className="size-6 text-white/60 group-hover:text-primary transition-colors duration-300"
                  />
                </Link>
                <Link href="#" className="group">
                  <IconifyIconClient
                    icon="tabler:brand-x"
                    className="size-6 text-white/60 group-hover:text-primary transition-colors duration-300"
                  />
                </Link>
              </div>
            </div>

            {/* Menu Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
              {/* Product Section */}
              <div>
                <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase text-sm opacity-50">Product & Solutions</h4>
                <div className="flex flex-col gap-8">
                  <div>
                    <h5 className="text-primary font-semibold mb-3">Product</h5>
                    <ul className="flex flex-col gap-2.5">
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Semantic Search</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">AI Chatbots</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">AI Agents</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Analytics Intelligence</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Connectors & APIs</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Custom LLM Options</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-primary font-semibold mb-3">Solutions</h5>
                    <ul className="flex flex-col gap-2.5">
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">E-Commerce Search</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Headless Commerce</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Enterprise Knowledge Search</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">AI-Powered Discovery</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resources & Company Section */}
              <div>
                <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase text-sm opacity-50">Resources & Company</h4>
                <div className="flex flex-col gap-8">
                  <div>
                    <h5 className="text-primary font-semibold mb-3">Resources</h5>
                    <ul className="flex flex-col gap-2.5">
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Documentation</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Developer Hub</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Integrations</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Security & Compliance</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Trust Center</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Blog</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-primary font-semibold mb-3">Company</h5>
                    <ul className="flex flex-col gap-2.5">
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">About SparkVerse AI</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Research & Affiliations</Link></li>
                      <li><Link href="/contact-us" className="text-white/70 hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact & Compliance Section */}
              <div>
                <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase text-sm opacity-50">Contact & Compliance</h4>
                <div className="flex flex-col gap-8">
                  <div>
                    <h5 className="text-primary font-semibold mb-3">Contact Us</h5>
                    <div className="text-white/70 text-sm leading-relaxed mb-4">
                      105 Washington Rd, Bradford,<br />United Kingdom
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      <li><Link href="tel:44740400835" className="text-white/70 hover:text-primary transition-colors">📞 (44) 7404 00835</Link></li>
                      <li><Link href="mailto:info@sparkverse.ai" className="text-white/70 hover:text-primary transition-colors underline">📧 info@sparkverse.ai</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-primary font-semibold mb-3">Compliance</h5>
                    <ul className="flex flex-col gap-2.5">
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Privacy Policy</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Terms of Service</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Data Processing Agreement</Link></li>
                      <li><Link href="#" className="text-white/70 hover:text-primary transition-colors">Security Overview</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-white/10 mt-16 mb-10" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/50">
            <div>
              ©{currentYear} <span className="text-white">SparkVerse AI</span>. All rights reserved.
            </div>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
              <Link href="#" className="hover:text-primary transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
