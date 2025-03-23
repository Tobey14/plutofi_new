import images from "@/assets/images";
import AppButtons from "../common/AppButtons";

export default function DownCard() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="bg-purple-300 rounded-3xl py-16 px-8 flex flex-col items-center space-y-6 shadow-lg">
                <span className="bg-white flex w-fit gap-2 text-sm px-3 py-1 rounded-lg shadow-lg">
                    <img src={images.vector} alt="vector" />
                    Over 50 verified stores
                </span>

                {/* Main Heading */}
                <h2 className="text-3xl md:text-5xl font-bold text-center">
                    Shop from global stores <br />
                    <span className="text-black">pay in your local currency</span>
                </h2>

                {/* Subtitle */}
                <p className="text-gray-700 text-lg text-center">
                    Connecting buyers to global stores. <br />
                    {/* Find great deals or list your own in just a few clicks! */}
                </p>

                <AppButtons btnWidth="w-[8rem] md:w-[10rem]"/>
            </div>
        </section>
    );
}
