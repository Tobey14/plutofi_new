
import React, { useState, useEffect, useRef } from "react";
import DownCard from "@/components/Home/DownCard";
import TopSection from "@/components/About/TopSection";
import MissionVision from "@/components/About/MissionVision";
import Head from "next/head";
import { ContactForm } from "@/components/Contact/ContactForm";
import images from "@/assets/images";
import ContactInfo from "@/components/Contact/ContactInfo";


export default function About() {
  return (
    <div className="">
      <Head>
        <title>Contact Us | Plutofi</title>
        <meta name="description" content="Plutofi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plutofi_icon_dark.svg" />
      </Head>
      <div className="overflow-y-auto w-full mt-[8rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 relative text-plutofi">
            Contact us
          </h2>
          <img src={images.yellow_line} alt="vector" className="m-0 hidden md:block mt-3 w-fit" />

          <h1 className="mb-1 text-3xl font-bold text-gray-900 md:text-5xl mt-5 ">
            Need help? We are here for you!
          </h1>

          <p className="text-lg mt-3">
            Leave us a message
          </p>
        </div>




        <ContactForm />

        <ContactInfo />

        {/* <MissionVision /> */}

        {/* <DownCard /> */}


      </div>
    </div>

  );
}
