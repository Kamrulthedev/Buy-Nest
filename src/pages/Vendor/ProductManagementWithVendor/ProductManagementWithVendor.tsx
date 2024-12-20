import { useGetAllProductsWithVendorQuery } from "@/Redux/features/products/productsApi";
import { useAppSelector } from "@/Redux/hooks";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
    id: string;
    name: string;
    imageUrl: string;
    category: string;
    price: number;
    stock: number;
    discount: number;
}

const ProductManagementWithVendor = () => {
    const user = useAppSelector((state) => state.auth.user);

    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    // Fetching products from the API with pagination parameters
    const { data, error, isLoading } = useGetAllProductsWithVendorQuery(user?.userId, [
        { name: "page", value: currentPage.toString() },
        { name: 'limit', value: productsPerPage.toString() },
    ]);


    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading products</div>;


    // Filter products based on search query
    const filteredProducts = data?.data?.data?.filter((product: Product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

    const totalPages = Math.ceil(data?.data?.meta?.total / productsPerPage);

    const handleDelete = (ProductId: string) => {
        console.log(`Delete clicked for product ID: ${ProductId}`);
    };

    return (
        <div className="p-6 animate__animated animate__fadeInDown">
            <div className="flex justify-between mb-4">
                <h1 className="lg:text-3xl md:text-2xl text-base font-bold text-violet-500 animate__animated animate__fadeInDown">Product Management</h1>
                <Link
                    to="/vendor/create-product-with-vendor"
                    className="bg-green-500 text-white px-2 lg:px-4 py-2 rounded hover:bg-green-600 text-xs md:text-sm lg:text-base"
                >
                    Create Product
                </Link>
            </div>

            {/* Search Bar */}
            <div className="mb-4 lg:flex justify-between lg:space-y-0 space-y-4">
                <input
                    type="text"
                    placeholder="Search products Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border rounded-lg p-2 w-full lg:w-1/2 bg-gray-100 border-violet-500"
                />
                <div className="mb-4 text-lg font-medium">
                    Products: {data?.data?.meta?.total}
                </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-sm animate__animated animate__fadeInDown">
                            <th className="border border-gray-200 px-4 py-2">Image</th>
                            <th className="border border-gray-200 px-4 py-2">Name</th>
                            <th className="border border-gray-200 px-4 py-2">Category</th>
                            <th className="border border-gray-200 px-4 py-2">Price ($)</th>
                            <th className="border border-gray-200 px-4 py-2">Stock</th>
                            <th className="border border-gray-200 px-4 py-2">Discount (%)</th>
                            <th className="border border-gray-200 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product: Product) => (
                            <tr key={product.id} className="hover:bg-gray-50 text-sm animate__animated animate__fadeInDown">
                                <td className="border border-gray-200 px-4 py-2 text-center">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-12 h-12 object-cover rounded-md"
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">{product.name}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.category}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.price.toFixed(2)}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.stock}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.discount}</td>
                                <td className="border border-gray-200 px-4 py-2 space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row justify-center">
                                    <Link
                                        to={`/vendor/product-details/${product?.id}`}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 w-full md:w-auto"
                                    >
                                        Details
                                    </Link>
                                    <Link
                                        to={`/vendor/product-update/${product?.id}`}
                                        className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 w-full md:w-auto"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 w-full md:w-auto"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between mt-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="px-4 py-2">Page {currentPage} of {totalPages || 1}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductManagementWithVendor;
