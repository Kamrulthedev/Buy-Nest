import Heading from "@/Heading/Heading";
import {
  cardProduct,
  selectTotalPrice,
} from "@/Redux/features/products/cardSlice";
import { useAppSelector } from "@/Redux/hooks";

const CardSummey = () => {
  const cartItems = useAppSelector(cardProduct);
  const cartTotalPrice = useAppSelector(selectTotalPrice);
  return (
    <div>
      <div>
        <Heading Heading="card summery"></Heading>

        <div className="space-y-4">
          <div className="flex justify-between ">
            <h1>Total Items: </h1>
            <h1>{cartItems?.length}</h1>
          </div>
          <div>
            {cartItems?.map((product) => (
              <div className="flex justify-between border-t">
                <h1>
                  Total Card: ( {product?.quantity} X {product.price} )
                </h1>
                <h1>{product?.quantity * product.price}</h1>
              </div>
            ))}
            <h1></h1>
          </div>
          <div className="flex justify-between border-t">
            {" "}
            <h1>Total price:</h1>
            <h1 className="font-bold">{cartTotalPrice!}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSummey;
