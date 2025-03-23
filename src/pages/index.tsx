
import Hero from "@/components/Home/Hero";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FeaturedStores from "@/components/Home/FeaturedStores";
import images from "@/assets/images";
import Offerings from "@/components/Home/Offerings";
import AppButtons from "@/components/common/AppButtons";
import PopularProducts from "@/components/Home/PopularProducts";
import DownCard from "@/components/Home/DownCard";
import { div } from "framer-motion/client";
import Head from "next/head";
import PopularProductsNew from "@/components/Home/PopularProductsNew";
import FeaturedSection from "@/components/Home/FeatureSection";
import HowToGetStarted from "@/components/Home/HowToGetStarted";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Plutofi - E-commerce made easy</title>
        <meta name="description" content="Plutofi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/plutofi_icon_dark.svg" />
      </Head>
      <div className="overflow-y-auto w-full">
        <Hero />

        <div className="bg-[#F8F8F8]">
          <Offerings />

          <PopularProductsNew />

          <FeaturedSection />

          <HowToGetStarted />
        </div>
        <FeaturedStores />
      </div>
    </div>

  );
}
