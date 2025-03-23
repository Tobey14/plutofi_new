import images from "@/assets/images";
import Image from "next/image";
import AppButtons from "../common/AppButtons";

export default function FooterHero() {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={images.footer_bg} 
          alt="Shopping Bags"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        
      </div>

      <div className="relative z-10 max-w-3xl px-6 md:px-12">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight text-yellow-400">
          Shop from global stores, <br /> pay in your local currency.
        </h1>
        <img src={images.white_line} alt="" className="my-2"/>

        <AppButtons />
      </div>
    </section>
  );
}
