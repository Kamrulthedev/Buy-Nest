/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetByIdProductsQuery } from "@/Redux/features/products/productsApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "@/Redux/hooks";
import { useState } from "react";
import { useUserCarsQuery } from "@/Redux/features/cart/cartApi";
import { useCreateCartItemMutation } from "@/Redux/features/cart/cartItem";
import { toast } from "react-toastify";

const Details = () => {
    const { id } = useParams();
    const user = useAppSelector((state) => state.auth.user);
    const { data, error, isLoading } = useGetByIdProductsQuery(id as string);
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const [CreateCartItem] = useCreateCartItemMutation()

    const [showReviewForm, setShowReviewForm] = useState(false);
    const [review, setReview] = useState({
        user: user?.name || "",
        comment: "",
        rating: "",
    });

    const { data: UserCarts } = useUserCarsQuery(user?.id as string)
    const Carts = UserCarts?.data;

    // Handle loading and error states
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;

    // Destructure product and shop data from the response
    const product = data?.data;
    const shop = product?.shop;

    const handleBuyNow = () => {
        if (!user) {
            navigate("/login");
        } else {
            console.log("productId:", product?.id, "User:", user?.id);
        }
    };


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





    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Review Submitted:", review);
        setShowReviewForm(false);
        setReview({ user: user?.name || "", comment: "", rating: "" });
    };


    return (
        <div className="p-6">
            <Link to="/products" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <div className="p-6 animate__animated animate__fadeInDown">
                <h1 className="text-2xl font-bold mb-6">Product Details</h1>

                {/* Product Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="flex justify-center">
                        <img
                            src={product?.imageUrl || "https://via.placeholder.com/150"}
                            alt={product?.name}
                            className="w-full max-w-sm rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Product Information */}
                    <div>
                        <h2 className="text-xl font-semibold mb-2">{product?.name}</h2>
                        <p className="text-gray-600 mb-2">Category: {product?.category}</p>
                        <p className="text-gray-600 mb-2">Price: ${product?.price?.toFixed(2)}</p>
                        <p className="text-gray-600 mb-2">Stock: {product?.stock}</p>
                        <p className="text-gray-600 mb-2">Discount: {product?.discount}%</p>
                        <p className="text-gray-600 mb-4">Description: {product?.description}</p>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-4">
                            <div className="relative">
                                <button
                                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => setShowDropdown((prev) => !prev)}
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
                                                        handleAddToCart(product.id, cart?.id);
                                                    }}
                                                >
                                                    {cart?.shop?.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <button
                                onClick={handleBuyNow}
                                className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* Shop Information */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold mb-2">Shop Details</h3>
                            {shop && (
                                <div>
                                    <img
                                        src={shop.logoUrl}
                                        alt={shop.name}
                                        className="w-16 h-16 object-cover rounded-full mb-4"
                                    />
                                    <p className="text-gray-600 mb-2">Shop Name: {shop.name}</p>
                                    <p className="text-gray-600">Description: {shop.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Product Reviews */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold mb-4">Product Reviews</h2>
                    {product?.reviews?.length > 0 ? (
                        <ul className="space-y-4">
                            {product.reviews.map((review: any, index: number) => (
                                <li key={index} className="p-4 border rounded-lg shadow">
                                    <p className="text-gray-800 font-semibold">{review.user}</p>
                                    <p className="text-gray-600">{review.comment}</p>
                                    <p className="text-yellow-500">Rating: {review.rating} / 5</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600">No reviews available for this product.</p>
                    )}

                    {/* Add Review Button */}
                    <button
                        onClick={() => setShowReviewForm(true)}
                        className="mt-4 px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
                    >
                        Add Review
                    </button>

                    {/* Review Form */}
                    {showReviewForm && (
                        <form onSubmit={handleReviewSubmit} className="mt-4 p-4 border rounded-lg shadow">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">User Name</label>
                                <input
                                    type="text"
                                    value={review.user}
                                    onChange={(e) => setReview({ ...review, user: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Comment</label>
                                <textarea
                                    value={review.comment}
                                    onChange={(e) => setReview({ ...review, comment: e.target.value })}
                                    className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Rating</label>
                                <input
                                    type="number"
                                    value={review.rating}
                                    onChange={(e) => setReview({ ...review, rating: e.target.value })}
                                    min="1"
                                    max="5"
                                    className="w-full px-3 py-2 border rounded-lg bg-gray-100"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            >
                                Submit Review
                            </button>
                            <button
                                onClick={() => setShowReviewForm(false)}
                                className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;
