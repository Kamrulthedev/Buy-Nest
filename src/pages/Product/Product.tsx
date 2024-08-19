import { Button } from "@/components/ui/button";

import { TProductProps } from "@/types/types";
import { IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";

import "animate.css";
import "../../components/Navber/navber.css";
import { renderStars } from "@/components/Reating/Reating";
const Product = ({ product }: { product: TProductProps }) => {
  return (
    <div className="animate__animated animate__fadeInUpf">
      <div className="card bg-base-300 mx-auto  image-container md:w-96 h-[500px]  ">
        <figure>
          <img src={product.image} className="h-60  w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>Brand:{product.brand}</p>
          <p>Available Quantity:{product.availableQuantity}</p>
          <div className="card-actions justify-between">
            <div className="">
              Price: <span className="font-bold"> ${product.price}</span>
            </div>
            <div className=" flex">{renderStars(product.rating)}</div>
          </div>
        </div>
        <div className="card-actions items-center justify-center mb-5 ">
          {/* <Button >Buy now</Button> */}
          <Link to={`/product/${product._id}`}>
            <Button className="bg-primary-gradient hover:ml-3   translate-x-1 delay-700  ">
              more details <IoIosArrowForward className="hover:ml-2 " />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
