'use client';

import React, { useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import Link from 'next/link';
import { mobileMenuData } from '@/component/layout/Topbar/data/mobileMenuData';
import Image from 'next/image';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 dark:bg-neutral-900/80 z-[79]"
          onClick={onClose}
        />
      )}

      <div
        id="mobileMenuOffcanvas"
        className={`fixed top-4 inset-x-4 rounded-lg overflow-hidden bg-white z-80 transition-all h-80 duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-neutral-200 sticky top-0">
          <Link href="/">
            <Image
              src="/Logos/PNG/FINAL LOGO-02.png"
              alt="logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="bg-neutral-600/15 text-neutral-600 size-8 flex justify-center items-center rounded-full"
            aria-label="Close"
          >
            <IconifyIconClient icon="tabler:x" className="size-4" />
          </button>
        </div>

        <div className="flex flex-col p-4 overflow-y-auto h-[calc(100%-64px)]">
          {mobileMenuData.map((menu, index) => (
            <div key={index}>
              <button
                className="flex justify-between items-center w-full py-2.5 font-medium text-dark"
                onClick={() => toggleMenu(index)}
              >
                <span>{menu.title}</span>
                <IconifyIconClient
                  icon="tabler:chevron-down"
                  className={`size-4 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && menu.children && (
                <div className="pl-2 mt-2 flex flex-col gap-1">
                  {menu.children.map((child, idx) => (
                    <Link
                      key={idx}
                      href={child.href}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
                      onClick={onClose}
                    >
                      {child.icon && (
                        <IconifyIconClient icon={child.icon} className="text-black size-5" />
                      )}
                      <div>
                        <div className="text-black font-medium">{child.label}</div>
                        {child.description && (
                          <p className="text-sm text-gray-500">{child.description}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="text-dark text-base flex items-center py-2.5 font-medium hover:underline"
          >
            Contact Us
          </Link>

          <div className="flex md:hidden mt-3">
            <Link
              href="/log-in"
              className="w-full bg-primary text-center text-dark hover:text-primary hover:bg-dark rounded-lg px-7.5 py-3.5 font-medium transition-all duration-300"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
