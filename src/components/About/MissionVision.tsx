import images from "@/assets/images";

export default function MissionVision() {
    return (
        <section className="px-[2rem] md:px-[5rem] px-6 py-16">
            {/* Title */}

            <div className="flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold mt-4 relative text-plutofi">
                    Welcome to Boundless Shopping!
                </h2>
                <img src={images.yellow_line} alt="vector" className="m-0 hidden md:block mt-3 w-fit" />
            </div>


            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-32">
                <div className="text-center md:text-left bg-[#FFF686] rounded-xl p-8">
                    <h3 className="text-plutofi font-semibold text-xl">Our Mission</h3>
                    <p className="text-lg font-semibold mt-2">
                        🌍 Bridging Borders, Empowering Shoppers!
                    </p>
                    <p className="text-lg mt-3">
                        PlutoFi connects African consumers to global stores, making cross-border shopping seamless, secure, and accessible.
                        We enable users to shop worldwide, pay in local currency, and receive fast, hassle-free deliveries—fueling economic inclusion and global trade.
                    </p>
                </div>

                {/* Vision */}
                <div className="text-center md:text-left bg-[#520880] rounded-xl p-8 text-white">
                    <h3 className="text-[#FFF686] font-semibold text-xl">Our Vision</h3>
                    <p className="text-lg font-semibold mt-2">
                        🚀 A Borderless Shopping Experience!
                    </p>
                    <p className="mt-3 text-lg">
                        We envision a world where everyone can shop globally without limits.
                        PlutoFi is building the future of e-commerce—making quality products, fair pricing, and seamless transactions accessible to all.
                    </p>
                </div>
            </div>
        </section>
    );
}
