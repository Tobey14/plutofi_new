import images from "@/assets/images";
import { div } from "framer-motion/client";

const products = [
    {
        name: "The north coat",
        price: "$260",
        oldPrice: "$360",
        image: "/images/product_1.svg", // Replace with actual paths
    },
    {
        name: "Gucci duffle bag",
        price: "$960",
        oldPrice: "$1160",
        image: "/images/product_2.svg",
    },
    {
        name: "RGB liquid CPU Cooler",
        price: "$160",
        oldPrice: "$170",
        image: "/images/product_3.svg",
    },
    {
        name: "Small BookShelf",
        price: "$360",
        oldPrice: "$820",
        image: "/images/product_4.svg",
    },
];

export default function PopularProducts() {
    return (
        <section className="max-w-6xl mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
                {products.map((product, index) => (
                    <div key={index} >
                        <div className="bg-gray-100 rounded-lg p-4">
                            <div className="flex justify-center items-center h-40">
                                <img src={product.image} alt={product.name} className="max-h-full object-contain" />
                            </div>


                        </div>


                        <div className="mt-4">
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                                Sold by: <img src={images.amazon} alt="Amazon" className="h-4" /> <span className="text-black text-xs">Amazon</span>
                            </p>
                            <h3 className="text-lg font-semibold mt-1">{product.name}</h3>

                            <div className="mt-2">
                                <span className="text-lg font-bold text-plutofi">{product.price}</span>
                                {product.oldPrice && (
                                    <span className="text-gray-400 text-sm line-through ml-2">{product.oldPrice}</span>
                                )}
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </section>
    );
}
