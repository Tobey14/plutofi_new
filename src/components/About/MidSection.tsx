import Image from "next/image";
import { CircleCheck } from "lucide-react";
import images from "@/assets/images";
import AppButtons from "../common/AppButtons";

export default function MidSection() {
    return (
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between gap-4 items-center mx-auto">

            <div className="flex justify-center">
                <img src={images.about_down} alt={"Dispatch Man"} className="w-full md:w-fit" />
            </div>


            <div className="w-full md:w-2/5 mt-5 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mt-4 relative text-plutofi">
                    Why PlutoFi?
                </h2>
                <img src={images.yellow_line} alt="vector" className="m-0 hidden md:block mt-3" />

                <p className="text-gray-600 text-lg my-8">
                    We’re not just an app we’re a movement. By making
                    cross-border shopping seamless, secure, and accessible,
                    we empower millions to access quality products, support economic inclusion, and unlock global opportunities.                
                </p>

                <AppButtons />
            </div>

        </div>

    );
}
