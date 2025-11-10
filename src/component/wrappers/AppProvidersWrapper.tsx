'use client';
import { ReactNode, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { usePathname } from 'next/navigation';

const AppProvidersWrapper = () => {
  const pathname = usePathname();
  useEffect(() => {
    Aos.init({ once: true });

    import('preline/dist/preline');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
    }, 400);
  }, [pathname]);

  return null;
};

export default AppProvidersWrapper;
