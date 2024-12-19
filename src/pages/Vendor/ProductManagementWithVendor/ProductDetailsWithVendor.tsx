import { useGetByIdProductsQuery } from "@/Redux/features/products/productsApi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const ProductDetailsWithVendor = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetByIdProductsQuery(id as string);

    // Handle loading and error states
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product details</div>;

    // Destructure product and shop data from the response
    const product = data?.data;
    const shop = product?.shop;

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
        </div>
    );
};

export default ProductDetailsWithVendor;