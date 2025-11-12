'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import IconifyIconClient from '@/component/IconifyIconClient';
import dynamic from 'next/dynamic';
const MobileMenu = dynamic(() => import('./component/MobileMenu'));
const NavMenu = dynamic(() => import('./component/NavMenu'));

const Topbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-white sticky top-0 inset-x-0 w-screen z-20 transition-all duration-300 ${
          isSticky ? 'shadow-md' : ''
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between py-2.5 lg:py-4.5">
            <div className="text-lg font-bold">
              <Link href="/svai">
                {/* Desktop/tablet — full wordmark */}
                <Image
                  src="/Logos/PNG/FINAL LOGO-01.png"
                  alt="Logo"
                  width={100}
                  height={36}
                  className="hidden sm:block h-8.5 lg:h-14 w-auto"
                />
                {/* Mobile — short mark */}
                <Image
                  src="/Logos/PNG/FINAL LOGO-02.png"
                  alt="Logo"
                  width={36}
                  height={36}
                  className="block sm:hidden h-8.5 lg:h-9 w-auto"
                />
              </Link>
            </div>
            <NavMenu />
            <div className="flex flex-row justify-center items-center md:gap-4 gap-2.5">
              <div className="md:flex hidden">
                <Link
                  href="/request-a-demo"
                  className="bg-primary text-dark hover:text-primary hover:bg-dark rounded-2xl px-7.5 py-3.5 font-medium transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="bg-dark  text-white focus:text-black focus:bg-primary inline-flex justify-center items-center rounded-2xl md:size-13 size-11 p-3.5 font-medium transition-all duration-300"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="mobileMenuOffcanvas"
                  onClick={() => setMenuOpen(true)}
                >
                  <IconifyIconClient icon="tabler:menu-2" className="text-2xl size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Topbar;
