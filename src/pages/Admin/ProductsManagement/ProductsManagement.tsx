import { useState } from "react";
import { Link } from "react-router-dom";

// Example Product Data
const initialProducts = [
    {
        id: "1",
        imageUrl: "https://via.placeholder.com/100",
        name: "Classic Denim Jacket",
        category: "FASHION",
        price: 59.99,
        stock: 25,
        discount: 10,
    },
    {
        id: "2",
        imageUrl: "https://via.placeholder.com/100",
        name: "Elegant Evening Gown",
        category: "FASHION",
        price: 149.99,
        stock: 10,
        discount: 20,
    },
    {
        id: "3",
        imageUrl: "https://via.placeholder.com/100",
        name: "Casual Cotton T-Shirt",
        category: "FASHION",
        price: 19.99,
        stock: 50,
        discount: 5,
    },
];

const ProductsManagement = () => {
    const [products, setProducts] = useState(initialProducts);
    const [searchQuery, setSearchQuery] = useState("");

    // Filter products based on search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handlers for action buttons
    const handleDetails = (ProductId: string) => {
        console.log(`Details clicked for product ID: ${ProductId}`);
    };

    const handleUpdate = (ProductId: string) => {
        console.log(`Update clicked for product ID: ${ProductId}`);
    };

    const handleDelete = (ProductId: string) => {
        console.log(`Delete clicked for product ID: ${ProductId}`);
    };

    return (
        <div className="p-6 animate__animated animate__fadeInDown">
            <div className="flex justify-between mb-4">
                <h1 className="lg:text-3xl md:text-2xl text-base font-bold">Product Management</h1>
                <Link
                    to="/admin/create-product"
                    className="bg-green-500 text-white px-2 lg:px-4 py-2 rounded hover:bg-green-600 text-xs md:text-sm lg:text-base"
                >
                    Create Product
                </Link>
            </div>

            {/* Search Bar */}
            <div className="mb-4 lg:flex justify-between lg:space-y-0 space-y-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border rounded-lg p-2 w-full lg:w-1/2 bg-gray-100 border-violet-500"
                />


                <div className="mb-4 text-lg font-medium">
                    Products: {filteredProducts.length}
                </div>
            </div>



            {/* Product Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
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
                        {filteredProducts.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="border border-gray-200 px-4 py-2 text-center">
                                    <img
                                        src={product.imageUrl}
                                        alt={product.name}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                </td>
                                <td className="border border-gray-200 px-4 py-2">{product.name}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.category}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.price.toFixed(2)}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.stock}</td>
                                <td className="border border-gray-200 px-4 py-2">{product.discount}</td>
                                <td className="border border-gray-200 px-4 py-2 space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row justify-center">
                                    <button
                                        onClick={() => handleDetails(product.id)}
                                        className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 w-full md:w-auto"
                                    >
                                        Details
                                    </button>
                                    <button
                                        onClick={() => handleUpdate(product.id)}
                                        className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 w-full md:w-auto"
                                    >
                                        Update
                                    </button>
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
        </div>
    );
};

export default ProductsManagement;
