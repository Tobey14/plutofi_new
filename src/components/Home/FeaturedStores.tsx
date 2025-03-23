import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
    { src: "/images/Boss.png", alt: "Boss" },
    { src: "/images/amazon.png", alt: "Amazon" },
    { src: "/images/apple.png", alt: "Apple" },
    { src: "/images/farfetch.png", alt: "Farfetch" },
    { src: "/images/tom-ford.png", alt: "Tom Ford" },
    // { src: "/images/nike.png", alt: "Nike" },
    { src: "/images/Brooks Brothers.png", alt: "Brooks Brothers" },
  { src: "/images/Coach.png", alt: "coach" },
  { src: "/images/best-buy.png", alt: "Best Buy" },
  { src: "/images/Ebay.png", alt: "ebay" },
  { src: "/images/Fashion nova.png", alt: "Fashion nova" },
  { src: "/images/gucci.png", alt: "gucci" },
  { src: "/images/h&m.png", alt: "h&m" },
  { src: "/images/jbl.png", alt: "jbl" },
  { src: "/images/Kirkland.png", alt: "kirkland's" },
  { src: "/images/louis-vuitton.png", alt: "louis-vuitton" },
  { src: "/images/macys.png", alt: "macys" },
  { src: "/images/Neiman Marcus.png", alt: "Neiman Marcus" },
  { src: "/images/Playstation.png", alt: "Playstation" },
  { src: "/images/puma.png", alt: "puma" },
  { src: "/images/saks.png", alt: "saks" },
  { src: "/images/samsung.png", alt: "samsung" },
  { src: "/images/Sephora.png", alt: "sephora" },
  { src: "/images/sony.png", alt: "sony" },
  { src: "/images/Sweet water.png", alt: "Sweet water" },
  { src: "/images/tom-ford.png", alt: "tom-ford" },
  { src: "/images/Ulta.png", alt: "ulta" },
  { src: "/images/zara.png", alt: "zara" },
  { src: "/images/Xbox.png", alt: "Xbox" },
];

const FeaturedStores = () => {
  return (
    <section className="py-8 text-center overflow-hidden bg-white">
      <Marquee 
        gradient={false} 
        speed={30} 
        pauseOnHover={false}
        className="flex"
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-6 flex-shrink-0">
            <img src={logo.src} alt={logo.alt} width={60} height={30} />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default FeaturedStores;
