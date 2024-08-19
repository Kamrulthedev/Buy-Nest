// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex justify-center items-center ">
            <div>
              <img
                src="https://kbdfans.com/cdn/shop/files/3000_e6dbbdb6-4bc4-4b7a-b9d5-fdb3099fb6c5_1512x.jpg?v=1718932600"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center absolute top-1/2">
              <div>
                <h1 className="text-white text-center mb-4 font-bold text-2xl">
                  PBTfans Count Dracula
                </h1>
                <Button className="bg-primary-gradient"> Order Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center ">
            <div>
              <img
                src="https://kbdfans.com/cdn/shop/files/3000-1_1512x.jpg?v=1715586446"
                alt=""
              />
            </div>
            <div className=" absolute top-1/2">
              <div>
                <h1 className="text-white text-center mb-3 font-bold text-2xl">
                  ODIN R4
                </h1>
                <Button className="bg-primary-gradient"> Order Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center ">
            <div>
              <img
                src="https://kbdfans.com/cdn/shop/files/1_97f3a5eb-6dc8-4e93-a27a-b0e1dc82bb29_1512x.png?v=1708737421"
                alt=""
              />
            </div>
            <div className=" absolute top-1/2 flex">
              <div>
                <h1 className="text-white text-center mb-3 font-bold text-2xl">
                  ODIN R4
                </h1>

                <Button className="bg-primary-gradient"> Order Now</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
