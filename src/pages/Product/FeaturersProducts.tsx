import Heading from "@/Heading/Heading";
import { TProductProps } from "@/types/types";
import Product from "./Product";
import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { setProducts } from "@/Redux/features/products/productsSlice";
import { useAppDispatch } from "@/Redux/hooks";

const FeaturersProducts = () => {
  const { data, isLoading } = useGetAllProductsQuery(undefined);
  const dispatch = useAppDispatch();
  if (isLoading) {
    return (
      <div>
        <p>Lodding.......</p>
      </div>
    );
  }
  const products = data?.data;
  if (data) {
    dispatch(setProducts(products));
  }
  const letestProduct = [...products].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  // console.log(letestProduct);
  // console.log("product", products);
  return (
    <div>
      <div className=" mx-auto my-20">
        <div className=" my-10">
          <Heading
            Heading="Featured Products"
            Text="Shop MK's selection of over 1,000 Mechanical Keyboards. Unlike membrane keyboards, where pressing a key pushes down on a single keyboard-sized membrane to complete a circuit, mechanical keyboards use individual mechanical switches for each key. Shop from a wide variety of sizes, switch types, keycaps, brands, and more to customize your gaming and typing experience."
          ></Heading>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {letestProduct?.slice(0, 6).map((product: TProductProps) => (
            <Product key={product?._id} product={product} />
          ))}
        </div>
        <div className="flex justify-center my-10">
          <Link to="/products">
            <Button className="bg-[#5c53fe] ">More Products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturersProducts;
