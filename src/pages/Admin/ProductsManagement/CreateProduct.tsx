/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateProductMutation } from "@/Redux/features/products/productsApi";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { toast } from "react-toastify";
import { useGetAllShopsQuery } from "@/Redux/features/shops/shopsApi";

const CreateProduct = () => {
    const [createProduct] = useCreateProductMutation();
    const { data: allShops } = useGetAllShopsQuery(undefined);

    const onSubmit = async (formData: any) => {
        const toastId = toast.loading("Creating product...");
        const { name, description, price, discount, stock, category, shop, file } = formData;

        // Parse price, discount, and stock to numbers
        const parsedPrice = parseFloat(price);
        const parsedDiscount = parseFloat(discount) || 0;
        const parsedStock = parseInt(stock);

        // Create a payload
        const formPayload = new FormData();
        formPayload.append("data", JSON.stringify({
            name,
            description,
            price: parsedPrice,
            discount: parsedDiscount,
            stock: parsedStock,
            category,
            shopId: shop,
        }));

        // Only append file if it's selected
        if (file && file[0]) {
            formPayload.append("file", file[0]);
        }
        console.log(formData)

        try {
            const res = await createProduct(formPayload).unwrap();
            console.log(res);
            if (res?.error) {
                throw new Error(res?.message || "Product creation failed!");
            }

            // Success toast
            toast.update(toastId, {
                render: res?.message || "Product created successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });

        } catch (res: any) {
            toast.update(toastId, {
                render: res?.message || "Product creation failed! Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
        }
    };



    return (
        <div className="p-6 max-w-4xl mx-auto animate__animated animate__fadeInDown">
            <Link to="/admin/products-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <h1 className="text-3xl font-bold mb-4 text-center">Create Product</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as HTMLFormElement);
                    const file = formData.get("file");
                    const data: any = Object.fromEntries(formData.entries());
                    data.file = file;
                    onSubmit(data);
                }}
                className="space-y-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <input
                            type="text"
                            name="name"
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
                            placeholder="Enter price"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Discount</label>
                        <input
                            type="number"
                            name="discount"
                            placeholder="Enter discount"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Stock</label>
                        <input
                            type="number"
                            name="stock"
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
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        required
                    >
                        <option value="">Select a category</option>
                        {[
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
                        ].map((cat) => (
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
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full md:w-auto"
                >
                    Create Product
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
