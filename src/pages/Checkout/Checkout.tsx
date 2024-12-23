/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import Heading from "@/Heading/Heading";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { resetCart } from "@/Redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/Redux/features/order/OrderApi";
import { useCreateOrderItemMutation } from "@/Redux/features/order/orderItemApi";

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
    const [CreateOrder] = useCreateOrderMutation()
    const [CreateOrderItem] = useCreateOrderItemMutation()


    const CartItems = useAppSelector((state) => state.cardsItem.CartItems);
    const ItemsQuantity = useAppSelector((state) => state.cardsItem.totalQuantity);
    const ItemsTotalPrice = useAppSelector((state) => state.cardsItem.totalPrice);

    // Calculate the final price with the shipping fee
    const shippingFee = 20;
    const finalPrice = ItemsTotalPrice + shippingFee;


    const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
        try {
            // Log each cart item
            CartItems.forEach((item: any) => {
                console.log(item);
            });
            console.log(data)
    
            // Prepare order data
            const OrderData: any = {
                TotalPrice: finalPrice.toString(),
                userId: CartItems.length > 0 ? CartItems[0]?.cart?.userId : null,
                shopId: CartItems.length > 0 ? CartItems[0]?.cart?.shopId : null,
                cardId: CartItems.length > 0 ? CartItems[0]?.cartId : null,
            };
    
            // Validate required fields
            if (!OrderData.userId || !OrderData.shopId || !OrderData.cardId) {
                throw new Error("Invalid Order Data: Missing userId, shopId, or cardId.");
            }
    
            // Create the order
            const response: any = await CreateOrder(OrderData);
            if (response.error) {
                throw new Error("Order Failed!");
            }
    
            const orderId = response?.data?.data?.id;
    
            // Use for...of for asynchronous operations
            for (const item of CartItems) {
                const OrderItemData: any = {
                    orderId: orderId,
                    productId: item?.product?.id,
                    quantity: item?.quantity,
                    price: item?.product?.price,
                };
                console.log("Order Item Data:", OrderItemData);
    
                // Wait for the item to be created
                await CreateOrderItem(OrderItemData);
            }
    
            // Success notification
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your order has been placed successfully!",
                showConfirmButton: false,
                timer: 1500,
            });
    
            dispatch(resetCart());
            navigate("/success");
        } catch (error: any) {
            // Error notification
            console.error("Error creating order:", error.message);
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to place the order. Please try again!",
                showConfirmButton: true,
            });
        }
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
                                    <h1 className="font-bold">Shipping Fee: ${shippingFee}</h1>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms-shipping" required />
                                        <label htmlFor="terms-shipping" className="text-sm font-medium leading-none">Cash on Delivery</label>
                                    </div>
                                </div>

                                <div className="flex justify-between border-t border-b">
                                    <h1>Total Price With Shipping:</h1>
                                    <h1 className="font-bold">${finalPrice}</h1>
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

                {/* Cart Items Display */}
                {CartItems.length > 0 && (
                    <div className="cart-summary mt-10">
                        <h3 className="text-xl font-semibold mb-4">Cart Summary</h3>
                        <ul>
                            {CartItems.map((item) => (
                                <li key={item?.id} className="flex justify-between">
                                    <span>{item?.product.name}</span>
                                    <span>${item?.product.price} x {item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-2">Total Quantity: {ItemsQuantity}</p>
                        <p className="font-bold">Total Price: ${ItemsTotalPrice}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Checkout;
