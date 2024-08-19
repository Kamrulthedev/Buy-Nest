import { Button } from "@/components/ui/button";
import "../../../components/Navber/navber.css";
import Heading from "@/Heading/Heading";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div className="min-h-screen flex items-center ">
      <div className="mt-20 mb-20">
        <Heading
          Heading="Top Featured Brands"
          Text="Upgrade your setup with the latest in keycaps, cables, deskpads, wrist rests, and more"
        ></Heading>
        <div className="grid md:grid-cols-3 animate__animated  animate__fadeInUp  gap-4">
          <div className="bg-primary-gradient rounded-md   ">
            <div className="relative flex justify-center image-container items-center m-3 ">
              <div>
                <img
                  src="https://keebsforall.com/cdn/shop/files/Untitled-1_ac97dfe6-69d5-40f2-870a-46798218e0c4.jpg?v=1718675538&width=600"
                  alt=""
                  className="rounded-md"
                />
              </div>
              <div className="flex justify-center items-center absolute top-1/3">
                <div>
                  <h1 className="text-[#112] text-center mb-4 font-bold text-2xl">
                    Logitech
                  </h1>
                  <Link to="/products">
                    {" "}
                    <Button className="bg-primary-gradient">
                      {" "}
                      See Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-gradient rounded-md  ">
            <div className="relative flex justify-center image-container items-center m-3 ">
              <div>
                <img
                  src="https://keebsforall.com/cdn/shop/files/Rainy75.jpg?v=1712179355&width=600"
                  alt=""
                  className="rounded-md"
                />
              </div>
              <div className="flex justify-center items-center absolute top-1/3">
                <div>
                  <h1 className="text-[#112] text-center mb-4 font-bold text-2xl">
                    Razer
                  </h1>
                  <Link to="/products">
                    {" "}
                    <Button className="bg-primary-gradient">
                      {" "}
                      See Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary-gradient rounded-md  ">
            <div className="relative flex justify-center image-container items-center m-3 ">
              <div>
                <img
                  src="https://kbdfans.com/cdn/shop/files/ZJW_0712_720x.jpg?v=1715243155"
                  alt=""
                  className="rounded-md"
                />
              </div>
              <div className="flex justify-center items-center absolute top-1/3">
                <div>
                  <h1 className="text-[#112] text-center mb-4 font-bold text-2xl">
                    Corsair
                  </h1>
                  <Link to="/products">
                    {" "}
                    <Button className="bg-primary-gradient">
                      {" "}
                      See Products
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
