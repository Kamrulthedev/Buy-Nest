/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetByIdWithVendorShopsQuery, useUpdateShopMutation } from "@/Redux/features/shops/shopsApi";
import { useAppSelector } from "@/Redux/hooks";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ShopManagementWithVendor = () => {
    const user = useAppSelector((state) => state.auth.user);

    const { register, handleSubmit } = useForm();
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

    const { data } = useGetByIdWithVendorShopsQuery(user?.userId as string);
    const ShopData = data?.data;

    const [UpdateData] = useUpdateShopMutation()

    const handleUpdateClick = () => {
        setIsUpdateFormVisible(!isUpdateFormVisible);
    };


    const onSubmit = async (formData: any) => {
        const { name, description, logoUrl } = formData;

        const formPayload = new FormData();
        formPayload.append("data", JSON.stringify({ name, description }));

        if (logoUrl && logoUrl[0]) {
            formPayload.append("file", logoUrl[0]);
        }

        try {
            const id = ShopData?.id;

            // Display a loading toast
            const toastId = toast.loading("Updating shop...");
            const res = await UpdateData({ id, UpdateData: formPayload }).unwrap();

            // Update toast to success state
            toast.update(toastId, {
                render: res.message || "Shop updated successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
            });

        } catch (err: any) {
            console.error("Update failed:", err);

            // Show an error toast
            toast.error(err.message || "Failed to update shop. Please try again.");
        }
    };

    return (
        <div className="p-6 bg-white text-gray-800 animate__animated animate__fadeInDown">
            {/* Shop Details Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInDown">
                <div className="flex items-center mb-4">
                    <img
                        src={ShopData?.logoUrl || "https://i.ibb.co/44vhj8G/image.png"}
                        alt="Shop Logo"
                        className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                        <h2 className="text-2xl font-semibold text-violet-600">{ShopData?.name}</h2>
                        <p className="text-gray-600">{ShopData?.description}</p>
                        <p className="text-gray-500 text-sm">{ShopData?.followers?.length}</p>
                    </div>
                </div>
                <button
                    onClick={handleUpdateClick}
                    className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition"
                >
                    Update Shop Details
                </button>
                {isUpdateFormVisible && (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-4 bg-gray-200 p-4 rounded-md shadow-md space-y-4 animate__animated animate__fadeInDown"
                    >
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Logo</label>
                            <input
                                {...register("logoUrl")}
                                type="file"
                                name="logoFile"
                                className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Shop Name</label>
                            <input
                                {...register("name")}
                                type="text"
                                name="name"
                                defaultValue={ShopData?.name}
                                className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Description</label>
                            <textarea
                                {...register("description")}
                                defaultValue={ShopData?.description}
                                className="w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-violet-600"
                                rows={4}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition"
                        >
                            Save Changes
                        </button>
                    </form>
                )}
            </div>

            {/* Vendor Details Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8 animate__animated animate__fadeInDown">
                <h2 className="text-2xl font-semibold text-violet-600 mb-4">Vendor Details</h2>
                <div className="space-y-2">
                    <p>
                        <span className="font-bold text-gray-700">Name:</span> {ShopData?.vendor?.name}
                    </p>
                    <p>
                        <span className="font-bold text-gray-700">Email:</span> {ShopData?.vendor?.email}
                    </p>
                    <p>
                        <span className="font-bold text-gray-700">Contact Number:</span>{" "}
                        {ShopData?.vendor?.contactNumber}
                    </p>
                    <p>
                        <span className="font-bold text-gray-700">Address:</span>{" "}
                        {ShopData?.vendor?.address}
                    </p>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md animate__animated animate__fadeInDown">
                <h2 className="text-2xl font-semibold text-violet-600 mb-4">Shop Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="text-center bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Total Products</h3>
                        <p className="text-4xl font-bold text-violet-600">{ShopData?.products?.length}</p>
                    </div>
                    <div className="text-center bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Total Orders</h3>
                        <p className="text-4xl font-bold text-violet-600">{ShopData?.orders?.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopManagementWithVendor;
