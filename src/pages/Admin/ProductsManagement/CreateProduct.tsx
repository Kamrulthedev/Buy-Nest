/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllShopsQuery } from "@/Redux/features/shops/shopsApi";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        discount: "",
        stock: "",
        category: "",
        shop: "",
        file: null,
    });

    const { data: allShops } = useGetAllShopsQuery(undefined);

    // Handle form input change
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle file input change
    const handleFileChange = (e: any) => {
        setFormData((prevData) => ({ ...prevData, file: e.target.files[0] }));
    };

    // Handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const data = {
            name: formData.name,
            description: formData.description,
            price: formData.price,
            discount: formData.discount ? formData.discount : 0,
            stock: formData.stock,
            category: formData.category,
            shopId: formData.shop,
        };

        const file = formData.file;

        console.log("Data:", data);
        console.log("File:", file);
    };

    const categories = [
        "ELECTRONICS",
        "FASHION",
        "HOME_APPLIANCES",
        "BOOKS",
        "BEAUTY_AND_PERSONAL_CARE",
        "SPORTS_AND_OUTDOORS",
        "TOYS_AND_GAMES",
        "GROCERY_AND_GOURMET",
        "AUTOMOTIVE",
        "HEALTH_AND_WELLNESS",
        "FURNITURE",
        "BABY_PRODUCTS",
    ];


    return (
        <div className="p-6 max-w-4xl mx-auto animate__animated animate__fadeInDown">
            <Link to="/admin/products-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <h1 className="text-3xl font-bold mb-8 text-center">Create Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter product name"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Discount <span className="text-xs text-gray-500">(optional)</span> </label>
                        <input
                            type="number"
                            name="discount"
                            value={formData.discount}
                            onChange={handleChange}
                            placeholder="Enter discount"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Stock</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            placeholder="Enter stock quantity"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Shop</label>
                    <select
                        name="shop"
                        value={formData.shop}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        required
                    >
                        <option value="">Select a shop</option>
                        {allShops?.data?.map((shop: any) => (
                            <option key={shop.id} value={shop.id}>
                                {shop.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Enter product description"
                        className="w-full border rounded-lg p-2 h-24 bg-gray-200"
                        required
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Image</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 w-full md:w-auto"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
