/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetByIdProductsQuery } from "@/Redux/features/products/productsApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "@/Redux/hooks";

const Details = () => {
    const { id } = useParams();
    const user = useAppSelector((state) => state.auth.user);
    const { data, error, isLoading } = useGetByIdProductsQuery(id as string);
    const navigate = useNavigate();


    // Handle loading and error states
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;

    // Destructure product and shop data from the response
    const product = data?.data;
    const shop = product?.shop;

    const handleAddToCart = () => {
        if (!user) {
            navigate("/login");
        } else {
            console.log("Add to Cart:", product?.id, "User:", user?.id);
        }
    };

    const handleBuyNow = () => {
        if (!user) {
            navigate("/login");
        } else {
            console.log("Buy Now:", product?.id, "User:", user?.id);
        }
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
                            src={product?.imageUrl}
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
                            <button
                                onClick={handleAddToCart}
                                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                Add to Cart
                            </button>
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
                </div>
            </div>
        </div>
    );
};

export default Details;
