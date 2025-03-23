import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import images from '@/assets/images';

const features = [
    {
        title: '🌟 Say Goodbye to Shopping Barriers!',
        description: 'PlutoFi brings international shopping to Africa—seamlessly.',
        image: images.happy_shopper,
        gradient: 'from-purple-700 to-transparent',
    },
    {
        title: 'Delivered to Your Doorstep in 10-14 Days!',
        description: 'Fast, secure, and reliable shipping you can trust.',
        image: images.smiling_customer,
        gradient: 'from-purple-500 to-transparent',
    },
];

export default function FeaturedSection() {
    return (
        <div className="py-10 px-[1rem] md:px-[5rem] mt-5">
            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                breakpoints={{
                    640: { slidesPerView: 1.5 },
                    1024: { slidesPerView: 2 },
                }}
            >
                {features.map((feature, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative p-6 bg-gradient-to-r rounded-xl shadow-lg flex flex-col justify-end text-white h-[400px]"
                            style={{ backgroundImage: `url(${feature.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl`}></div>
                            <div className="relative z-10">
                                <h2 className="text-xl font-bold">{feature.title}</h2>
                                <p className="text-sm mt-2">{feature.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
