import Heading from "@/Heading/Heading";
import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

const ServiceAdvertisement = () => {
  return (
    <div className=" mb-20">
      <div>
        <div>
          <Heading
            Heading="our service offered for you"
            Text="Offering the largest dedicated selection of mechanical keyboards, the fastest ship speeds, and the best customer service in the industry."
          ></Heading>
          <div className="md:grid grid-cols-4 gap-4 ">
            <div className="bg-[#ffe47f]  relative animate_animated animate__fadeInLeft rounded-xl ">
              <div className="space-y-1 p-8">
                <MdOutlineLocalShipping className="text-5xl" />
                <h1 className="text-2xl font-semibold">Free shipping</h1>
                <h6>Orders Over $500</h6>
              </div>
              <div>
                <MdOutlineLocalShipping className="text-7xl opacity-15 absolute top-2 right-4" />
              </div>
            </div>
            <div className="bg-[#e9effc] relative rounded-xl">
              <div className="space-y-1 p-8">
                <RiSecurePaymentFill className="text-5xl" />
                <h1 className="text-2xl font-semibold">Quick Payment</h1>
                <h6>100% Secure</h6>
              </div>
              <div>
                <RiSecurePaymentFill className="text-7xl opacity-15 absolute top-2 right-4" />
              </div>
            </div>
            <div className="bg-[#ebd3c5] relative rounded-xl">
              <div className="space-y-1 p-8">
                <LuCircleDollarSign className="text-5xl" />
                <h1 className="text-2xl font-semibold">Big Cashback</h1>
                <h6>Over 40% Cashback</h6>
              </div>
              <div>
                <LuCircleDollarSign className="text-7xl opacity-15 absolute top-2 right-4" />
              </div>
            </div>
            <div className="bg-[#eaeed6] relative rounded-xl">
              <div className="space-y-1 p-8">
                <LuCircleDollarSign className="text-5xl" />
                <h1 className="text-2xl font-semibold">24/7 Support</h1>
                <h6>Ready For You</h6>
              </div>
              <div>
                <LuCircleDollarSign className="text-7xl opacity-15 absolute top-2 right-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
