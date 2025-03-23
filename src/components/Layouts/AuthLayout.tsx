import React from 'react';
import images from '@/assets/images';
import Navbar from '../Home/NavBar';
import Footer from '../Home/Footer';
import NewFooter from '../Home/NewFooter';
import FooterHero from '../Home/FooterHero';
import Newsletter from '../Home/Newsletter';

export default function AuthLayout({
  children,
  pageTitle = ''
}: {
  children: React.ReactNode;
  pageTitle?: string;
}) {
  return (
    <div className="w-full overflow-y-auto">
      <Navbar />
      <div className="">
        {children}
      </div>

      <div className="relative">
        <FooterHero />
        {/* <Newsletter /> */}
        <Footer />

        {/* <NewFooter /> */}

      </div>


    </div>
  );
}
