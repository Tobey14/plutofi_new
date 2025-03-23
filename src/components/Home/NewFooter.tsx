import { Facebook, Instagram, X } from "lucide-react";
import Newsletter from "./Newsletter";

export default function Footer() {
    return (
        <footer className="bg-[#161016] text-white py-10 px-6 md:px-16">

            <div className="absolute top-[-3rem] w-full">
                <Newsletter />
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold flex items-center space-x-2">
                        <span className="text-white">Pluto</span>
                        <span className="text-purple-500">Fi</span>
                    </h2>
                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                        PlutoFi is revolutionizing e-commerce for international shoppers! As a one-stop
                        shopping platform, we break barriers, connecting African consumers to top US and
                        global stores that were once out of reach.
                    </p>
                    <p className="text-gray-300 font-semibold mt-4">
                        Address:
                        <br />
                        <span className="font-normal">13000 S Tryon St, STE F-167 Charlotte, NC 28278</span>
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Home</li>
                        <li>About Us</li>
                        <li className="flex items-center gap-2">
                            Career <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Coming Soon</span>
                        </li>
                        <li className="flex items-center gap-2">
                            Our People <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Coming Soon</span>
                        </li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                {/* Resources Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>FAQs</li>
                        <li className="flex items-center gap-2">
                            Blog <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">Coming Soon</span>
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

                {/* Legal Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Cookies Policy</li>
                        <li>Refund & Return Policy</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
                Copyright &copy; 2025, PlutoFi
            </div>
        </footer>
    );
}
