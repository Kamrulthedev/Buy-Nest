import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import Heading from "@/Heading/Heading";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { resetCart } from "@/Redux/features/cart/cartSlice";

type Inputs = {
    name: string;
    email: string;
    number: number;
    address: string;
};

const Checkout = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const dispatch = useAppDispatch();

    const CartItems = useAppSelector((state) => state.cardsItem.CartItems);
    const ItemsQuantity = useAppSelector((state) => state.cardsItem.totalQuantity);
    const ItemsTotalPrice = useAppSelector((state) => state.cardsItem.totalPrice);
    console.log(CartItems, ItemsQuantity, ItemsTotalPrice)


    const onSubmit: SubmitHandler<Inputs> = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your order has been placed successfully!",
            showConfirmButton: false,
            timer: 1500,
        });
        dispatch(resetCart());
        navigate("/success");
    };

    return (
        <div className="w-5/6 mx-auto my-20 animate__animated animate__fadeInDown">
            <Heading Heading="Checkout Page" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="md:grid grid-cols-6 gap-6">
                        <div className="space-y-5 border-2 p-5 rounded-xl col-span-4">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="w-full rounded-lg p-2 border border-violet-400 bg-gray-50"
                                    placeholder="Name"
                                    id="name"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="w-full rounded-lg p-2 border border-violet-400 bg-gray-50"
                                    placeholder="Email"
                                    id="email"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="number">Number</label>
                                <input
                                    type="number"
                                    className="w-full rounded-lg p-2 border border-violet-400 bg-gray-50"
                                    placeholder="Number"
                                    id="number"
                                    {...register("number", { required: "Number is required" })}
                                />
                                {errors.number && <span className="text-red-500">{errors.number.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="address">Address</label>
                                <textarea
                                    cols={3}
                                    rows={3}
                                    className="w-full rounded-lg p-2 border border-violet-400 bg-gray-50"
                                    placeholder="Address"
                                    id="address"
                                    {...register("address", { required: "Address is required" })}
                                />
                                {errors.address && <span className="text-red-500">{errors.address.message}</span>}
                            </div>
                        </div>

                        <div className="col-span-2 space-y-5 border p-5">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h1 className="font-bold">Shipping Fee: $20</h1>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms-shipping" required />
                                        <label htmlFor="terms-shipping" className="text-sm font-medium leading-none">Cash on Delivery</label>
                                    </div>
                                </div>

                                <div className="flex justify-between border-t border-b">
                                    <h1>Total Price With Shipping:</h1>
                                    <h1 className="font-bold">444444444</h1>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" required />
                                    <label htmlFor="terms" className="text-sm font-medium leading-none">Accept terms and conditions</label>
                                </div>
                            </div>
                            <Button type="submit" className="bg-primary-gradient w-full">
                                Place Your Order
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
