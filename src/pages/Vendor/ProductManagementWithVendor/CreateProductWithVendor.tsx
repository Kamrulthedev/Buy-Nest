/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreateProductMutation } from "@/Redux/features/products/productsApi";
import { useGetAllShopsQuery } from "@/Redux/features/shops/shopsApi";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CreateProductWithVendor = () => {
 const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [createProduct, { isLoading }] = useCreateProductMutation();
    const { data: allShops } = useGetAllShopsQuery(undefined);

    const onSubmit = async (formData: any) => {
        const toastId = toast.loading("Creating product...");
        const { name, description, price, discount, stock, category, shop, file } = formData;
        const parsedPrice = parseFloat(price);
        const parsedDiscount = parseFloat(discount) || 0;
        const parsedStock = parseInt(stock);

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

        if (file && file[0]) {
            formPayload.append("file", file[0]);
        }

        try {
            const res = await createProduct(formPayload).unwrap();
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
            reset(); 
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
            <Link to="/vendor/products-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <h1 className="text-3xl font-bold mb-4 text-center">Create Product</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <input
                            type="text"
                            placeholder="Enter product name"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            {...register("name", { required: "Product name is required" })}
                        />
                        {errors.name && <span className="text-red-500 text-sm">Product name is required</span>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            {...register("price", { required: "Price is required" })}
                        />
                        {errors.price && <span className="text-red-500 text-sm">Price is required</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Discount</label>
                        <input
                            type="number"
                            placeholder="Enter discount"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            {...register("discount")}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Stock</label>
                        <input
                            type="number"
                            placeholder="Enter stock quantity"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            {...register("stock", { required: "Stock is required" })}
                        />
                        {errors.stock && <span className="text-red-500 text-sm">Stock is required</span>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        {...register("category", { required: "Category is required" })}
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
                    {errors.category && <span className="text-red-500 text-sm">Category is required</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Shop</label>
                    <select
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        {...register("shop", { required: "Shop selection is required" })}
                    >
                        <option value="">Select a shop</option>
                        {allShops?.data?.map((shop: any) => (
                            <option key={shop.id} value={shop.id}>
                                {shop.name}
                            </option>
                        ))}
                    </select>
                    {errors.shop && <span className="text-red-500 text-sm">Shop selection is required</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        placeholder="Enter product description"
                        className="w-full border rounded-lg p-2 h-24 bg-gray-200"
                        {...register("description", { required: "Description is required" })}
                    ></textarea>
                    {errors.description && <span className="text-red-500 text-sm">Description is required</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Image <span className="text-gray-500">(optional)</span></label>
                    <input
                        type="file"
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        {...register("file")}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-violet-500 text-white py-2 rounded hover:bg-violet-600"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex justify-center items-center space-x-2">
                            <AiOutlineLoading className="animate-spin" />
                            <span>Creating product...</span>
                        </div>
                    ) : (
                        " Create Product"
                    )}
                </button>
            </form>
        </div>
    );
};
export default CreateProductWithVendor;