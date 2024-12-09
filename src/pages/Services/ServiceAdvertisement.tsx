import { LuCircleDollarSign } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";

const ServiceAdvertisement = () => {
  return (
    <div className="mb-20 font-serif mt-10">
      <div>
        <div>
          <div className="md:grid grid-cols-3 gap-4">
            <div className="p-8 text-center lg:text-left lg:items-start flex flex-col items-center space-y-1 animate__animated animate__zoomIn">
              <MdOutlineLocalShipping className="text-5xl"/>
              <h1 className="text-2xl font-semibold">Free Shipping</h1>
              <h6>Orders Over $500</h6>
            </div>


            <div className="p-8 text-center lg:text-left lg:items-start flex flex-col items-center space-y-1 animate__animated animate__zoomIn">
              <RiSecurePaymentFill className="text-5xl" />
              <h1 className="text-2xl font-semibold">Quick Payment</h1>
              <h6>100% Secure</h6>
            </div>

              <div className="p-8 text-center lg:text-left lg:items-start flex flex-col items-center space-y-1 animate__animated animate__zoomIn">
                <LuCircleDollarSign className="text-5xl" />
                <h1 className="text-2xl font-semibold">24/7 Support</h1>
                <h6>Ready For You</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
