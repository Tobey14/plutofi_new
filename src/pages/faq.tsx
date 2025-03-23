import React, { useState, useEffect, useRef } from "react";
import DownCard from "@/components/Home/DownCard";
import FAQSection from "@/components/About/FAQs";
import Head from "next/head";
import images from "@/assets/images";


export default function About() {
  return (
    <div>
      <Head>
        <title>FAQ | Plutofi</title>
        <meta name="description" content="Plutofi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plutofi_icon_dark.svg" />
      </Head>
      <div className="overflow-y-auto w-full mt-[8rem]">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 relative text-plutofi">
          Frequently Asked Questions
          </h2>
          <img src={images.yellow_line} alt="vector" className="m-0 hidden md:block mt-3 w-fit" />
        </div>

        <FAQSection />

        <DownCard />


      </div>
    </div>

  );
}
