/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetByIdProductsQuery } from "@/Redux/features/products/productsApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const ProductDetailsWithVendor = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetByIdProductsQuery(id as string);


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;

    const product = data?.data;
    const shop = product?.shop;
    const reviews = product?.reviews;


    return (
        <div className="p-6 animate__animated animate__fadeInDown">
            <Link to="/vendor/products-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <h1 className="text-2xl font-bold mb-6">Product Details</h1>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="flex justify-center">
                    <img
                        src={product?.imageUrl}
                        alt={product?.name}
                        className="w-full max-w-sm rounded-lg shadow-lg"
                    />
                </div>

                {/* Product Information */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">{product?.name}</h2>
                    <p className="text-gray-600 mb-2">Category: {product?.category}</p>
                    <p className="text-gray-600 mb-2">Price: ${product?.price.toFixed(2)}</p>
                    <p className="text-gray-600 mb-2">Stock: {product?.stock}</p>
                    <p className="text-gray-600 mb-2">Discount: {product?.discount}%</p>
                    <p className="text-gray-600 mb-4">Description: {product?.description}</p>

                    {/* Shop Information */}
                    <div className="mt-6">
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
            <div className="mt-12">
                <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
                {reviews && reviews.length > 0 ? (
                    <div className="space-y-4">
                        {reviews.map((review: any, index: number) => (
                            <div
                                key={index}
                                className="p-4 border border-gray-200 rounded-lg shadow-sm"
                            >
                                <div className="flex items-center mb-2">
                                    <img
                                        src={review.user.profilePicture}
                                        alt={review.user.name}
                                        className="w-10 h-10 rounded-full mr-4"
                                    />
                                    <div>
                                        <p className="font-semibold">{review.user.name}</p>
                                        <p className="text-gray-500 text-sm">
                                            {new Date(review.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-2">{review.comment}</p>
                                <p className="text-yellow-500">
                                    {Array(review.rating)
                                        .fill("★")
                                        .join("")}
                                    {Array(5 - review.rating)
                                        .fill("☆")
                                        .join("")}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No reviews available for this product.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetailsWithVendor;