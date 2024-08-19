import ProductTable from "./ProductTable";
import { TProductProps } from "@/types/types";
import { useAppSelector } from "@/Redux/hooks";
import { seletetProducts } from "@/Redux/features/products/productsSlice";
import Heading from "@/Heading/Heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const findProduct = useAppSelector(seletetProducts);
  if (!findProduct.length) {
    return <p>Lodding...........</p>;
  }

  return (
    <div className="min-h-screen w-5/6 my-20 mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <Heading Heading="Dashboard"></Heading>
        </div>
        <div>
          <Link to="/addproducts">
            <Button>Add Products</Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto ">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {findProduct.length && (
                <>
                  {findProduct.map((product: TProductProps) => (
                    <ProductTable key={product._id} product={product} />
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
