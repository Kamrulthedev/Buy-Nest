import Heading from "@/Heading/Heading";
import { useAppSelector } from "@/Redux/hooks";
import SingleCard from "./SingleCard";
import { cardProduct } from "@/Redux/features/products/cardSlice";
import { Button } from "@/components/ui/button";
import CardSummey from "./CardSummey";
import { Link } from "react-router-dom";
import HeadLink from "@/components/ui/HeadLink";
import Line from "@/components/CetegoryProducts/Line";

const Cards = () => {
  const cartItems = useAppSelector(cardProduct);

  return (
    <div>
      <div className="px-6">
        <HeadLink tag="Home" tag1="cards"></HeadLink>
      </div>
      <div className="w-5/6 mx-auto my-5 min-h-screen">
        <div>
          <Heading Heading="Shopping Cart" />
        </div>
        <div className="md:grid grid-cols-6 gap-4  animate__animated animate__fadeInDown">
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

          <div className="col-span-2 border my-5 p-5 animate__animated animate__fadeInDown">
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
        <div>
          <Line></Line>
        </div>
      </div>

    </div>
  );
};

export default Cards;
