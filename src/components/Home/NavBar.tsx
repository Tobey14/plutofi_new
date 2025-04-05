import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { PlutofiNewLogo } from '@/components/widgets/PlutofiLogo';
import { useNavigation } from "@/hooks/useNavigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let { navigateToAbout, navigateToFaq, navigateToHome, navigateToContact } = useNavigation();

  return (
    <nav className="bg-white fixed w-full top-0 left-0 z-50 px-[1rem] md:px-[5rem]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer" onClick={navigateToHome}>
          <PlutofiNewLogo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 items-center">
          <div className="hover:text-plutofi no-underline font-medium cursor-pointer" onClick={navigateToHome}>
            <p>Home</p>
          </div>

          <div className="hover:text-plutofi no-underline font-medium cursor-pointer" onClick={navigateToAbout}>
            <p>About Us</p>
          </div>

          <div className="hover:text-plutofi no-underline font-medium cursor-pointer" onClick={() => console.log('going to blog')}>
            <p>Blog</p>
          </div>

          <div className="hover:text-plutofi no-underline font-medium cursor-pointer" onClick={navigateToContact}>
            <p>Contact Us</p>
          </div>

          <div className="hover:text-plutofi no-underline font-medium cursor-pointer" onClick={navigateToFaq}>
            <p>FAQs</p>
          </div>
        </div>

        <Button className="hidden md:block rounded-lg hover:bg-plutofi hover:opacity-80">
          Download the App
        </Button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pt-2 pb-8 flex flex-col items-center space-y-6">
          <div className="hover:text-plutofi no-underline font-medium cursor-pointer" onClick={() => {navigateToAbout(); setIsOpen(false)}}>
            <p>About Us</p>
          </div>
          <div className="hover:text-plutofi no-underline font-medium cursor-pointer" onClick={() => {navigateToContact(); setIsOpen(false)}}>
            <p>Contact Us</p>
          </div>
          <div className="hover:text-plutofi no-underline font-medium cursor-pointer" onClick={() => { navigateToFaq(); setIsOpen(false)}}>
            <p>FAQs</p>
          </div>
          <Button className="rounded-lg hover:bg-plutofi hover:opacity-80">
            Download the App
          </Button>
        </div>
      </div>
    </nav>
  );
}
