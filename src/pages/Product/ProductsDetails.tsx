import { renderStars } from "@/components/Reating/Reating";
import { Button } from "@/components/ui/button";
import Heading from "@/Heading/Heading";
import { addToCart } from "@/Redux/features/products/cardSlice";
import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import {
  getSingleProduct,
  singleProductFromState,
} from "@/Redux/features/products/productsSlice";

import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { TProductProps } from "@/types/types";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const dispatch = useAppDispatch();
  // get id form params
  const { id } = useParams();

  dispatch(getSingleProduct(id as string));
  const [cardBtn, setCardBtn] = useState(false);
  const [count, setCount] = useState(1);

  // get all products for TRENDING PRODUCTS
  const { data } = useGetAllProductsQuery(undefined);

  const products = data?.data;

  const product = useAppSelector(singleProductFromState) as TProductProps;

  // count total quantity of card
  const totalQuantity = product?.availableQuantity - count || 0;

  const handleAddToCartBtn = (product: TProductProps) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your Product has been Added To Card",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(addToCart({ product, quantity: count }));

    setCardBtn(true);
  };

  return (
    <div className="w-5/6 mx-auto my-20">
      {product && (
        <>
          <Heading Heading={product.title} />

          <div className="md:grid md:grid-cols-5 gap-20 ">
            <div className="md:col-span-3">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full"
                />
              </div>

              <div className="mt-20">
                <Heading Heading="About Products" />
                <h1 className="text-2xl text-[#112] my-3">{product.title}</h1>
                <p>{product.description}</p>
              </div>
            </div>

            <div className="space-y-4 mb-10 md:col-span-2">
              <div className="space-y-5">
                <h1 className="text-2xl">{product.title}</h1>
                <h3>
                  Price: <span className="font-bold">${product.price}</span>
                </h3>
                <h1>Brand: {product.brand}</h1>
                {totalQuantity === 0 ? (
                  <h1>
                    Available Quantity:{" "}
                    <span className="font-bold">Out of Stock</span>
                  </h1>
                ) : (
                  <p>Available Quantity: {totalQuantity}</p>
                )}
                <h5 className="flex ">Rating: {renderStars(product.rating)}</h5>

                <div className="flex gap-5">
                  <div className="flex gap-5 items-center border px-5">
                    {count === 0 ? (
                      <p className="text-center font-extrabold">
                        <FaMinus className="text-2xl" />
                      </p>
                    ) : (
                      <p
                        onClick={() => setCount(count - 1)}
                        className="text-center font-extrabold cursor-pointer"
                      >
                        <FaMinus className="text-2xl" />
                      </p>
                    )}
                    <p className="text-2xl">{count}</p>
                    {product.availableQuantity === count ? (
                      <p className="text-center font-extrabold">
                        <FaPlus className="text-2xl" />
                      </p>
                    ) : (
                      <p
                        onClick={() => setCount(count + 1)}
                        className="text-center font-extrabold cursor-pointer"
                      >
                        <FaPlus className="text-2xl" />
                      </p>
                    )}
                  </div>
                  <div>
                    {cardBtn ? (
                      <Link to="/cards">
                        <Button>Go To Cart Page</Button>
                      </Link>
                    ) : (
                      <Button
                        onClick={() => handleAddToCartBtn(product)}
                        className="bg-primary-gradient"
                      >
                        Add To Cart
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <Heading Heading="Trending Products" />
                <div className="flex flex-col gap-5">
                  {products?.slice(0, 2).map((product: TProductProps) => (
                    <div
                      key={product._id}
                      className="card bg-base-100 shadow-xl"
                    >
                      <figure>
                        <img src={product.image} alt={product.title} />
                      </figure>
                      <div className="card-body">
                        <Link
                          to={`/product/${product._id}`}
                          className="card-title hover:text-[18px] hover:duration-500"
                        >
                          {product.title}
                        </Link>
                        <h1 className="font-bold">Price: ${product.price}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductsDetails;
