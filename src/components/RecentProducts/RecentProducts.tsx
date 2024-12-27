/* eslint-disable @typescript-eslint/no-explicit-any */
import { FiEye, FiHeart } from "react-icons/fi";
import { GiDorsalScales } from "react-icons/gi";
import Heading from "@/Heading/Heading";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/Redux/hooks";
import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import { useCreateCartItemMutation } from "@/Redux/features/cart/cartItem";
import { useState } from "react";
import { useUserCarsQuery } from "@/Redux/features/cart/cartApi";
import { toast } from "react-toastify";


const categories = ["All", "Bags", "Watches", "Belts", "Sale"];

const SkeletonCard = () => (
    <div className="relative bg-gray-200 overflow-hidden rounded-md animate-pulse">
        <div className="w-full h-80 bg-gray-300"></div>
        <div className="p-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-6 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
    </div>
);

const RecentProducts = () => {
    const user = useAppSelector((state) => state.auth.user);
    const { data: AllProducts, isLoading } = useGetAllProductsQuery([
        { name: "page", value: 2 }
    ]);
    const [CreateCartItem] = useCreateCartItemMutation()
    const [showDropdown, setShowDropdown] = useState(false);

    const { data: UserCarts } = useUserCarsQuery(user?.id as string)
    const Carts = UserCarts?.data;



    const handleAddToCart = async (productId: string, cartId: string) => {
        try {
            const res = await CreateCartItem({ productId, cartId }).unwrap();
            if (res.error) {
                throw new Error(res.message || "An unexpected error occurred.");
            }

            // Show success toast
            toast.success(res.message || "Item added to cart successfully!", {
                position: "top-right",
                autoClose: 3000,
            });
        } catch (res: any) {
            console.error("Error adding item to cart:", res?.error);

            // Show error toast
            toast.error(res.message || "Failed to add item to cart. Please try again.", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };


    return (
        <div className="bg-white py-8 px-4 font-serif">
            <Heading Heading="Recent Arrivals">
            </Heading>
            {/* Category Buttons */}
            <div className="flex justify-center gap-4 mb-8">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className="px-4 py-2 bg-white shadow-md rounded-lg hover:bg-slate-300 animate__animated animate__fadeInDown text-black font-medium"
                    >
                        {category}
                    </button>
                ))}
            </div>



            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate__animated animate__fadeOut">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {AllProducts?.data?.slice(0, 8).map((product: any) => (
                        <div
                            key={product.id}
                            className="relative bg-white overflow-hidden group animate__animated animate__fadeInDown"
                        >
                            {/* Product Image */}
                            <img
                                src={product?.imageUrl || "https://via.placeholder.com/150"}
                                alt={product.name}
                                className="w-full shadow-lg h-48 lg:h-80 object-cover hover:scale-110 transition-transform"
                            />

                            {/* Overlay Icons */}
                            <div className="absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 bg-white rounded-full shadow hover:text-blue-600">
                                    <FiEye size={20} />
                                </button>
                                <button className="p-2 bg-white rounded-full shadow hover:text-red-600">
                                    <FiHeart size={20} />
                                </button>
                                <button className="p-2 bg-white rounded-full shadow hover:text-gray-600">
                                    <GiDorsalScales size={20} />
                                </button>
                            </div>

                            {/* Product Info */}
                            <div className="p-4">
                                <p className="text-sm text-gray-500">{product.brand}</p>
                                <h2 className="font-medium text-lg">{product.name}</h2>
                                <p className="text-blue-600 font-bold">{product.price}</p>
                            </div>

                            {/* Hover Buttons */}
                            <div className="absolute bottom-4 left-0 right-0 flex justify-between space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link
                                    to={`/products/${product?.id}`}
                                    className="lg:px-4 px-2 py-2 text-xs lg:text-base bg-gray-400 text-white rounded-md hover:bg-gray-600"
                                >
                                    View Details
                                </Link>
                                <button
                                    className="lg:px-4 px-2 py-2 text-xs lg:text-base bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
                                    onClick={() => setShowDropdown((prev) => !prev)}
                                >
                                    Add to Cart
                                </button>

                                {showDropdown && (
                                    <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-lg">
                                        <ul className="py-2">
                                            {Carts.map((cart: any) => (
                                                <li
                                                    key={cart.id}
                                                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 text-[8px] cursor-pointer"
                                                    onClick={() => {
                                                        setShowDropdown(false);
                                                        handleAddToCart(product.id, cart.id);
                                                    }}
                                                >
                                                    {cart?.shop?.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}


            <div className="flex justify-center items-center mt-8 animate__animated animate__heartBeat">
                <Link to='/products' className="px-12 py-3 text-gray-700 border bg-white shadow-md hover:text-white hover:bg-gray-600 hover:shadow-lg transition-all duration-300 font-medium">
                    View More Products ⇨
                </Link>
            </div>

        </div >
    );
};

export default RecentProducts;