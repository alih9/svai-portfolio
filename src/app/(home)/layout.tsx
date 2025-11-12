import Footer from '@/component/layout/Footer/Footer';
import Topbar from '@/component/layout/Topbar';
import { type ReactNode } from 'react';

const HomeLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <>
      <Topbar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
