import { useNavigation } from "@/hooks/useNavigation";
import { Facebook, Instagram, X } from "lucide-react";
import { Button } from "../ui/button";
import Newsletter from "./Newsletter";

export default function Footer() {

  let { navigateToAbout, navigateToFaq, navigateToHome, navigateToPrivacyPolicy, navigateToTerms, navigateToContact, navigateToCookiePolicy, navigateToRefundReturn } = useNavigation();

  return (
    <footer className="bg-[#1E1821] text-white py-10 text-md relative">
      <div className="absolute top-[-3rem] w-full">
        <Newsletter />
      </div>
      <div className="flex flex-wrap justify-between px-[2rem] md:px-[5rem] mt-16 md:mt-10 items-center">
        <div className="col-span-2 md:col-span-1 w-full md:w-[30%]">
          <img src="/images/plutofi_logo_white.svg" alt="white logo" className="" />
          <p className="text-gray-400 mt-6">
            PlutoFi is your trusted gateway to international shopping. Shop, pay, and receive your items with ease.
          </p>

          <p className="text-gray-400 mt-8">
            <span className="font-bold">Address:</span> 13000 S Tryon St, <br />
            STE F-167 Charlotte, NC 28278
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 gap-[3rem] mt-5">
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li className="cursor-pointer" onClick={navigateToHome}>Home</li>
              <li className="cursor-pointer" onClick={navigateToAbout}>About Us</li>
              <li>Career <span className="text-xs bg-plutofi text-white px-2 py-1 rounded-lg">Coming Soon</span> </li>
              <li>Our People <span className="text-xs bg-plutofi text-white px-2 py-1 rounded-lg">Coming Soon</span></li>
              <li className="cursor-pointer" onClick={navigateToContact}>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="cursor-pointer" onClick={navigateToFaq}>FAQs</li>
              <li className="flex items-center gap-2">
                Blog <span className="text-xs bg-plutofi text-white px-2 py-1 rounded-lg">Coming Soon</span>
              </li>
            </ul>

            {/* Social Icons */}
            <h3 className="text-white font-semibold mt-6">Connect with us</h3>
            <div className="flex space-x-4 mt-3">
              <Facebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <Instagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
              <X className="text-gray-400 hover:text-white cursor-pointer" size={20} />
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li className="cursor-pointer" onClick={navigateToPrivacyPolicy}>Privacy Policy</li>
              <li className="cursor-pointer" onClick={navigateToTerms}>Terms & Conditions</li>
              <li className="cursor-pointer" onClick={navigateToCookiePolicy}>Cookies Policy</li>
              <li className="cursor-pointer" onClick={navigateToRefundReturn}>Refund & Return Policy</li>
            </ul>
          </div>
        </div>

      </div>
      {/* Copyright Section */}
      <div className="text-gray-500 mt-10 px-[2rem] md:px-[5rem]">
        <hr className="my-3 text-gray-400" />

        © 2024 PlutoFi Limited. All rights reserved.
      </div>
    </footer>
  );
}
