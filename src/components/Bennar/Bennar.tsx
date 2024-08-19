import { Button } from "../ui/button";
import "../Navber/navber.css";
import Marquee from "react-fast-marquee";

const Bennar = () => {
  return (
    <div className="">
      <div className="md:grid grid-cols-4 gap-2 ">
        <div className="relative col-span-2">
          <div className="image-container">
            <img
              src="https://mechanicalkeyboards.com/cdn/shop/files/Keyboard_Banner.jpg?v=1707783381"
              alt=""
            />
          </div>
          <div className="absolute top-0 p-20  md:space-y-10">
            <h1>Type in style</h1>
            <h1 className="md:text-5xl animate__animated animate__fadeInDown space-x-3 text-primary-text font-bold">
              Mechanical <br /> Keyboard
            </h1>
            <Button className="bg-primary-gradient animate__animated animate__fadeInUp">
              Shop Keyboard
            </Button>
          </div>
        </div>
        <div className="relative col-span-1">
          <div className="image-container">
            <img
              src="https://mechanicalkeyboards.com/cdn/shop/files/Keycaps_Banner_v2_green_bg.jpg"
              alt=""
              className="w-full md:h-[377px]"
            />
          </div>
          <div className=" absolute top-0 space-y-64 p-10   ">
            <div className="">
              <h1>Change the Lock</h1>
            </div>
            <div className="">
              <h1 className="text-xl font-bold">KeyCaps</h1>
            </div>
          </div>
        </div>
        <div className=" col-span-1">
          <div className="flex  flex-col gap-2">
            <div className="relative image-container">
              <div className="">
                <img
                  src="https://mechanicalkeyboards.com/cdn/shop/files/Switches_Banner.jpg"
                  alt=""
                  className="w-full  animate__animated animate__fadeInDown h-full"
                />
              </div>
              <div className=" absolute top-0  space-y-20 p-10   ">
                <div className="">
                  <h1 className="uppercase  ">Switch it Up</h1>
                </div>
                <div className="">
                  <h1 className="animate__animated animate__fadeInDown  font-bold">
                    Switches
                  </h1>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="image-container">
                <img
                  src="https://mechanicalkeyboards.com/cdn/shop/files/Mice_Banner.jpg"
                  alt=""
                  className="w-full animate__animated animate__fadeInDown h-full"
                />
              </div>
              <div className=" absolute top-0  space-y-24 py-5 px-10   ">
                <div className="">
                  <h1 className="uppercase  text-[#282828]">
                    Navigate with precision
                  </h1>
                </div>
                <div className="">
                  <h1 className="text-xl font-bold animate__animated animate__fadeInDown">
                    Mice
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee>
        <div>
          <ul className="flex  gap-10 text-5xl font-bold uppercase mt-20 ">
            <li>Logitech</li>
            <li>Corsair</li>
            <li>Razer</li>
            <li>SteelSeries</li>
            <li>HyperX</li>
            <li>Ducky</li>
            <li>Cooler Master</li>
            <li>Das Keyboard</li>
            <li>Microsoft</li>
            <li className="mr-10">Apple</li>
          </ul>
        </div>
      </Marquee>
    </div>
  );
};

export default Bennar;
