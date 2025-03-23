
import React, { useState, useEffect, useRef } from "react";
import DownCard from "@/components/Home/DownCard";
import TopSection from "@/components/About/TopSection";
import MissionVision from "@/components/About/MissionVision";
import Head from "next/head";
import FeaturesSection from "@/components/About/FeaturesSection";
import MidSection from "@/components/About/MidSection";


export default function About() {
  return (
    <div className="">
      <Head>
        <title>About Us | Plutofi</title>
        <meta name="description" content="Plutofi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plutofi_icon_dark.svg" />
      </Head>
      <div className="py-[5rem] w-full px-[2rem] md:px-[5rem] ">
       

        <TopSection />

        <FeaturesSection />

        <MidSection />

        <MissionVision />

      </div> 
    </div>
    
  );
}
