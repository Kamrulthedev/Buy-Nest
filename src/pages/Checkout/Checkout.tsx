import { Button } from "@/components/ui/button";
import CardSummey from "../Cards/CardSummey";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import {
  clearCart,
  selectTotalPrice,
} from "@/Redux/features/products/cardSlice";
import Heading from "@/Heading/Heading";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
type Inputs = {
  name: string;
  email: string;
  number: number;
  address: string;
};

const Checkout = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();
  const dispatch = useAppDispatch();
  const cartTotalPrice = useAppSelector(selectTotalPrice);
  const totalPrice = cartTotalPrice + 20;
  const onSubmit: SubmitHandler<Inputs> = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your order has been placed successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(clearCart());
    navigate("/success");
  };
  return (
    <div className="w-5/6 mx-auto my-20 ">
      <Heading Heading="CheckOut Page"></Heading>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="md:grid grid-cols-6 gap-6">
            <div className="space-y-5 border-2 p-5 rounded-xl col-span-4">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg p-2 border border-slate-400"
                  placeholder="name"
                  id="name"
                  {...register("name", { required: true })}
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg p-2 border border-slate-400"
                  placeholder="email"
                  id="name"
                  required
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="name">Number</label>
                <input
                  type="number"
                  className="w-full rounded-lg p-2 border border-slate-400"
                  placeholder="number"
                  id="name"
                  {...register("number", { required: true })}
                  required
                />
              </div>
              <div>
                <label htmlFor="name">Address</label>
                <textarea
                  cols={3}
                  rows={3}
                  className="w-full rounded-lg p-2 border border-slate-400"
                  placeholder="Address"
                  id="name"
                  {...register("address", { required: true })}
                  required
                />
              </div>
            </div>
            <div className="col-span-2 space-y-5  border p-5">
              <CardSummey />
              <div className="space-y-4">
                <div className="flex  justify-between items-center">
                  <h1 className="font-bold">Shipping Free: $20 </h1>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div className="flex justify-between border-t border-b ">
                  {" "}
                  <h1>Total Price With Shipping :</h1>
                  <h1 className="font-bold ">{totalPrice!}</h1>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept terms and conditions
                  </label>
                </div>
              </div>
              {/* <Link to="/success"> */}
              <Button type="submit" className="bg-primary-gradient  w-full">
                Please Your Order
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
