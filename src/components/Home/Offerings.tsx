import images from "@/assets/images";
import { LucideCheckCircle } from "lucide-react";

const offerings = [
    {
        title: "🚀 One Cart, Multiple Stores, One Checkout!",
        description: "Build your cart across different stores and check out in one go!",
        image: "/images/offering1.png", // Replace with actual URLs
    },
    {
        title: "🔒 Shop with Confidence, We’ve Got You Covered!",
        description: "Secure payments, trusted stores, and guaranteed delivery.",
        image: "/images/offering2.png",
    },
    {
        title: "🎉 The Future of Shopping is Here!",
        description: "PlutoFi is revolutionizing how you shop and ship.",
        image: "/images/offering3.png",
    },
];

export default function Offerings() {
    return (
        <section className="px-[1rem] md:px-[5rem] text-center py-6">
            <div className="flex flex-col items-center space-y-3">
                <span className="bg-white flex w-fit gap-2 text-sm px-3 py-1 rounded-lg shadow-lg">
                    <img src={images.vector} alt="vector" />
                    Over 50 verified stores
                </span>
                <h2 className="text-3xl font-bold">Our Offerings</h2>
                <p className="text-gray-500 mt-2">
                    Get your orders delivered quickly and safely, no matter where you are.
                </p>
            </div>
            

            <div className="grid md:grid-cols-3 gap-6 mt-10">
                {offerings.map((offering, index) => (
                    <div key={index} className="w-full overflow-hidden rounded-2xl shadow-lg bg-white">
                        <div
                            className="h-52 w-full bg-cover bg-center rounded-t-2xl"
                            style={{ backgroundImage: `url(${offering.image})` }}
                        />
                        <div className="p-5 text-left">
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                 {offering.title}
                            </h3>
                            <p className="text-gray-500 mt-1">{offering.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
