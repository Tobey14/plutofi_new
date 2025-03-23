import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import images from '@/assets/images';

const products = [
    { name: 'Apple AirPods 4', rating: 4.5, image: images.product_1, tag: 'Popular' },
    { name: 'AirPods Pro 2nd Generation', rating: 4.6, image: images.product_2 },
    { name: 'Maison Francis Kurkdjian', rating: 4.2, image: images.product_3, tag: 'Popular' },
    { name: 'Apple AirPods Max', rating: 4.5, image: images.product_4 },
    { name: 'Apple iPad A14', rating: 4.8, image: images.product_1, tag: 'Popular' },
    { name: 'UGG Tasman - Chestnut', rating: 4.8, image: images.product_3, discount: '-15%' },
];

export default function PopularProducts() {
    return (
        <div className="py-10 px-[1rem] md:px-[5rem]">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <p className="text-plutofi text-sm">Sponsored</p>
                    <h2 className="text-2xl font-bold">Popular products</h2>
                </div>
                <button className="bg-plutofi text-white px-4 py-2 rounded-lg">Download the App</button>
            </div>

            <div className="relative">
                <Swiper
                    breakpoints={{
                        320: { slidesPerView: 1 },   // Mobile
                        640: { slidesPerView: 2 },   // Small tablets
                        1024: { slidesPerView: 3 },  // Laptops
                        1280: { slidesPerView: 4 },  // Large screens
                    }}

                    spaceBetween={20}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    observer={true}
                    observeParents={true}
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative p-4 bg-white rounded-xl shadow-md">
                                {product.tag && (
                                    <span className="absolute top-2 left-2 bg-gray-100 text-xs px-2 py-1 rounded-full">{product.tag}</span>
                                )}
                                {product.discount && (
                                    <span className="absolute top-2 right-2 bg-red-200 text-xs px-2 py-1 rounded-full">{product.discount}</span>
                                )}
                                <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
                                <p className="text-sm text-gray-600">{product.name}</p>
                                <p className="flex items-center gap-1 text-sm font-semibold">
                                    ⭐ {product.rating}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute bottom-[-2rem] flex justify-center gap-6 w-full">
                    <button className="swiper-button-prev bg-plutofi text-white p-8 rounded-full">
                        <ChevronLeft />
                    </button>
                    <button className="swiper-button-next bg-plutofi text-white p-8 rounded-full">
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}
