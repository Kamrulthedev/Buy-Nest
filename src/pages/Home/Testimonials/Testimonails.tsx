import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Testimonial } from "./tastimolialsLIst";
import { FaStar } from "react-icons/fa";
import Heading from "@/Heading/Heading";

const Testimonails = () => {
  return (
    <div className=" text-center ">
      <div className=" ">
        <Heading Heading="Customers Reviews" Text="Testimonials"></Heading>

        <Swiper
          // slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper grid grid-cols-3"
        >
          <div>
            {Testimonial.map((item, idx) => (
              <>
                <SwiperSlide>
                  <div
                    className=" rounded-3xl md:h-[400px] h-full flex items-center bg-slate-300  justify-center  relative"
                    key={idx}
                  >
                    <div className=" absolute md:top-10 top-2     bg-primary-gradient rounded-[50%] p-2">
                      <img
                        src={item.image}
                        alt=""
                        className="md:w-32 md:h-32 w-20 h-20 rounded-[50%]  "
                      />
                    </div>
                    <div className="bg-white m-5 pt-20 sm:mt-20 pb-10 px-10 rounded-2xl">
                      <h1 className="text-center  ">{item.review}</h1>
                      <div className="flex space-y-5 items-center justify-between ">
                        <div className="flex flex-col mt-5 space-y-1 items-start">
                          <h1 className="font-bold text-xl">{item.name}</h1>
                          <h1 className="">{item.post}</h1>
                        </div>
                        <div className="flex text-yellow-500 text-xl">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonails;
