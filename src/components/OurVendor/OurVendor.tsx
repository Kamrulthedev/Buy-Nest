import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the autoplay style
import "./OurVendor.css";
import { Autoplay, Navigation } from "swiper/modules";
import Heading from "@/Heading/Heading";

const vendors = [
    { id: 1, name: "Jhon Dow", logo: "https://i.ibb.co.com/nMPzV4Z/image.png", description: "Vendor 1 provides high-quality products and services to our customers. Trusted by thousands. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo facilis veniam magni, corrupti dolore culpa corporis esse eius, quas deleniti quidem ad impedit iusto, quasi magnam repellendus tenetur tempore! " },
    { id: 2, name: "Ringina Tabassum", logo: "https://i.ibb.co.com/fSy3MFp/image.png", description: " omers. Trusted by thousands. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo facilis veniam magni, corrupti dolore culpa corporis esse eius, quas deleniti quidem ad impediVendor 2 specializes in fast deliveries and customer satisfaction." },
    { id: 3, name: "Dinmojumdar", logo: "https://i.ibb.co.com/hC5dpNF/image.png", description: " omers. Trusted by thousands. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo facilis veniam magni, corrupti dolore culpa corporis esse eius, quas deleniti quidem ad impedi Vendor 3 offers competitive pricing and extensive customer support." },
    { id: 4, name: "Denal Trmp", logo: "https://i.ibb.co.com/rfp43Tn/image.png", description: " omers. Trusted by thousands. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo facilis veniam magni, corrupti dolore culpa corporis esse eius, quas deleniti quidem ad impedi Vendor 4 is known for eco-friendly products and innovation." },
    { id: 5, name: "Komola Heris", logo: "https://i.ibb.co.com/hC5dpNF/image.png", description: " omers. Trusted by thousands. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo facilis veniam magni, corrupti dolore culpa corporis esse eius, quas deleniti quidem ad impediVendor 5 provides reliable and premium services for your needs." },
    { id: 6, name: "Jofia Tham", logo: "https://i.ibb.co.com/hC5dpNF/image.png", description: " omers. Trusted by thousands. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo facilis veniam magni, corrupti dolore culpa corporis esse eius, quas deleniti quidem ad impediVendor 6 is a leader in the industry with a strong focus on sustainability." },
];

const OurVendor = () => {
    return (
        <div className="bg-white py-8 px-4 mt-20 font-serif mb-16">
             <Heading Heading="Our Vendors Shop"></Heading>
            <Swiper
                modules={[Autoplay, Navigation]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop
                slidesPerView={1}
                spaceBetween={20}
                speed={100}
                navigation
                className="vendor-swiper"
            >
                {vendors.map((vendor) => (
                    <SwiperSlide key={vendor.id}>
                        <div className="p-8 animate__animated animate__slideInRight bg-white  rounded-lg flex flex-col items-center w-full mx-auto transition-all duration-300 hover:scale-105">
                            <img
                                src={vendor.logo}
                                alt={vendor.name}
                                className="h-28 w-28 lg:h-42 lg:w-42 rounded-full object-contain transition-all duration-300"
                            />
                            <h3 className="mt-4 text-2xl lg:text-3xl font-semibold text-gray-800">{vendor.name}</h3>
                            <p className="mt-4 text-md text-gray-600">{vendor.description}</p>
                            <div className="mt-6 flex space-x-4">
                                <a href="#" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                                    Follow
                                </a>
                                <a href="#" className="px-6 py-2 bg-gray-300 text-black hover:text-white rounded hover:bg-gray-600 transition duration-200">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OurVendor;
