"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; // Import your utility for Tailwind class merging
import images from "@/assets/images";
import AppButtons from "../common/AppButtons";

const heroData = [
  {
    title: "Shop the world, pay in local currency",
    description: "No borders. No limits. Just seamless global shopping. Discover, shop, and ship with ease—right from your phone.",
    image: images.phone, // Replace with actual paths
  },

];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % heroData.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="relative w-full flex items-center pt-[1rem] md:pt-[5rem] px-[1rem] md:px-[5rem] h-[140vh] md:h-[100vh]">
      <div className="flex justify-between items-start flex-wrap space-y-4">
        <div className="w-full md:w-2/5 mt-5">
          <span className="bg-white flex w-fit gap-2 text-sm px-3 py-1 rounded-lg">
            <img src={images.vector} alt="vector" />
            Over 50 verified stores
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 relative text-plutofi">
            {heroData[index].title}
            <img src={images.curve_line} alt="vector" className="m-0 hidden md:block"/>
          </h1>
          <p className="text-gray-700 mt-4 text-lg">{heroData[index].description}</p>

          

          {/* App Buttons */}
          <AppButtons />
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            key={heroData[index].image}
            src={heroData[index].image}
            alt="Hero Image"
            className=""
          />
        </div>

      </div>
    </div>
  );
}
