/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetByIdProductsQuery, useUpdateProductMutation } from "@/Redux/features/products/productsApi";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";

const ProductUpdateWithVendor = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetByIdProductsQuery(id as string);

    const [UdpateProduct] = useUpdateProductMutation()

    useEffect(() => {
        if (data?.data) {
            const { name, price, discount, stock, category, description } = data.data;
            reset({
                name,
                price,
                discount,
                stock,
                category,
                description,
            });
        }
    }, [data, reset]);

    const onSubmit = async (formData: any) => {
        console.log("Final Form Data:", formData);
        const toastId = toast.loading("Updating product...");
        const { name, imageUrl, stock, discount, price, description, category } = formData;

        const formPayload = new FormData();
        formPayload.append("data", JSON.stringify({name, imageUrl, stock, discount, price, description, category}), {});

        if (imageUrl && imageUrl[0]) {
            formPayload.append("file", imageUrl[0]);
        }


        try {
            // Mock API call or use your mutation function
            const res = await UdpateProduct(formPayload).unwrap();
            console.log(res)
            if (res?.error) throw new Error(res?.message);

            toast.update(toastId, {
                render: "Product updated successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });

            navigate("/vendor/products-management");
        } catch (err: any) {
            toast.update(toastId, {
                render: err.message || "Product update failed! Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto animate__animated animate__fadeInDown">
            <Link to="/vendor/products-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <h1 className="text-3xl font-bold mb-4 text-center">Update Product</h1>
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
                            {...register("name")}
                        />                 
                          </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <input
                            type="number"
                            placeholder="Enter price"
                            className="w-full border rounded-lg p-2 bg-gray-200"
                            {...register("price")}
                        />
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
                            {...register("stock")}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        {...register("category")}
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
                    <label className="block text-sm font-medium mb-1">Description</label>
                    <textarea
                        placeholder="Enter product description"
                        className="w-full border rounded-lg p-2 h-24 bg-gray-200"
                        {...register("description", { required: "Description is required" })}
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Image <span className="text-gray-500">(optional)</span></label>
                    <input
                        type="file"
                        className="w-full border rounded-lg p-2 bg-gray-200"
                        {...register("imageUrl")}
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
                            <span>Updating product...</span>
                        </div>
                    ) : (
                        "Update Product"
                    )}
                </button>
            </form>
        </div>
    );
};

export default ProductUpdateWithVendor;
