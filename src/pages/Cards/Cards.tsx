import Heading from "@/Heading/Heading";
import { useAppSelector } from "@/Redux/hooks";
import SingleCard from "./SingleCard";
import { cardProduct } from "@/Redux/features/products/cardSlice";
import { Button } from "@/components/ui/button";
import CardSummey from "./CardSummey";
import { Link } from "react-router-dom";

const Cards = () => {
  const cartItems = useAppSelector(cardProduct);

  return (
    <div className="w-5/6 mx-auto my-20 min-h-screen">
      <div>
        <Heading Heading="My Cart" />
      </div>
      <div className="md:grid grid-cols-6 gap-4">
        <div className="overflow-x-auto col-span-4">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {cartItems.length > 0 ? (
                cartItems.map((product) => (
                  <SingleCard key={product._id} product={product} />
                ))
              ) : (
                <tr>
                  <td>No items in the cart</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="col-span-2 border  my-5 p-5">
          <div className="space-y-5">
            <CardSummey></CardSummey>
            <div>
              {cartItems.length > 0 ? (
                <>
                  <Link to="/checkout">
                    <Button className="bg-primary-gradient ">
                      Proceed To Checkout
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <p className="font-bold">Please Add Products Your Card</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
