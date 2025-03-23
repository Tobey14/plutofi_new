import Image from "next/image";
import { CircleCheck } from "lucide-react";
import images from "@/assets/images";
import AppButtons from "../common/AppButtons";

export default function TopSection() {
    return (
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 items-center mx-auto">
            <div className="w-full md:w-2/5 mt-5 text-center md:text-left order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold mt-4 relative text-plutofi">
                    Shop Beyond Borders, <br /> Pay with Ease!
                </h2>
                <img src={images.yellow_line} alt="vector" className="m-0 hidden md:block mt-3"/>

                <p className="text-gray-600 text-lg my-8">
                    PlutoFi is revolutionizing e-commerce for international shoppers! As a one-stop shopping platform, we break barriers, connecting African consumers to top US and global stores that were once out of reach.
                </p>

                <AppButtons />
            </div>

            <div className="flex justify-center order-1 md:order-2">
                <img src={images.about} alt={"Dispatch Man"} className="w-full md:w-fit" />
            </div>
        </div>        
     
    );
}
