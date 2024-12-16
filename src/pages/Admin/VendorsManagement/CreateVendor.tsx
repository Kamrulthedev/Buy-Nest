/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCreatevendorMutation } from "@/Redux/features/user/userApi";
import React, { useRef } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CreateVendor = () => {
    const profilePhotoRef = useRef<HTMLInputElement>(null);
    const logoRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const [createVendor, { isLoading }] = useCreatevendorMutation();

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const toastId = toast.loading("Creating Vendor & Shop...");

        const formData = new FormData();

        // Files handling
        const files: File[] = [];
        if (profilePhotoRef.current?.files?.[0]) {
            files.push(profilePhotoRef.current.files[0]);
        }
        if (logoRef.current?.files?.[0]) {
            files.push(logoRef.current.files[0]);
        }

        // Append files to FormData
        files.forEach((file) => formData.append("files", file));

        // Append other data as a single JSON object
        const data = {
            password: (e.target as any).password.value,
            name: (e.target as any).vendorName.value,
            email: (e.target as any).vendorEmail.value,
            contactNumber: (e.target as any).vendorContactNumber.value,
            address: (e.target as any).vendorAddress.value,
            shopName: (e.target as any).shopName.value,
            shopDescription: (e.target as any).shopDescription.value,
        };

        // Ensure all fields are correctly added
        if (!data.password || !data.name || !data.email || !data.contactNumber) {
            return;
        }

        formData.append("data", JSON.stringify(data));

        // Debug log to check FormData contents
        const debugData: Record<string, any> = { files: [], data: null };
        formData.forEach((value, key) => {
            if (key === "files") {
                debugData.files.push((value as File).name);
            } else if (key === "data") {
                debugData.data = JSON.parse(value as string);
            }
        });

        // API Call
        try {
            const response = await createVendor(formData).unwrap();
            // Success toast
            toast.update(toastId, {
                render: response?.message || "Vendor & Shop created successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });

            // Reset the form after successful submission
            formRef.current?.reset();
        } catch (response: any) {
            toast.update(toastId, {
                render: response?.message || "Vendor & Shop creation failed! Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
        }
    };

    return (
        <div className="p-4">
            <Link to="/admin/vendors-management" className="text-start text-xl">
                <IoMdArrowRoundBack />
            </Link>
            <div className="max-w-2xl mx-auto p-2">
                <h1 className="text-2xl font-bold mb-4">Create Vendor and Shop</h1>
                <form onSubmit={handleSubmit} ref={formRef} className="space-y-6"> {/* Attach ref here */}
                    {/* Vendor Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Vendor Details</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="vendorName"
                                placeholder="Vendor Name"
                                className="w-full border border-violet-400 bg-gray-200 rounded px-4 py-2 "
                                required
                            />
                            <input
                                type="email"
                                name="vendorEmail"
                                placeholder="Vendor Email"
                                className="w-full border rounded px-4 py-2 border-violet-400 bg-gray-200"
                                required
                            />
                            <input
                                type="file"
                                name="profilePhoto"
                                ref={profilePhotoRef}
                                className="w-full border rounded px-4 py-2 border-violet-400 bg-gray-200"
                                accept="image/*"
                            />
                            <input
                                type="text"
                                name="vendorContactNumber"
                                placeholder="Contact Number"
                                className="w-full border rounded px-4 py-2 border-violet-400 bg-gray-200"
                                required
                            />
                            <textarea
                                name="vendorAddress"
                                placeholder="Vendor Address"
                                className="w-full border rounded px-4 py-2 border-violet-400 bg-gray-200"
                                required
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full border rounded px-4 py-2 border-violet-400 bg-gray-200"
                                required
                            />
                        </div>
                    </div>

                    {/* Shop Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Shop Details</h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="shopName"
                                placeholder="Shop Name"
                                className="w-full border rounded px-4 py-2 border-violet-400 bg-gray-200"
                                required
                            />
                            <textarea
                                name="shopDescription"
                                placeholder="Shop Description"
                                className="w-full border rounded px-4 py-2 border-violet-400 bg-gray-200"
                                required
                            />
                            <input
                                type="file"
                                name="logo"
                                ref={logoRef}
                                className="w-full border rounded px-4 py-2 border-violet-400 bg-gray-200"
                                accept="image/*"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        disabled={isLoading} // Disable button while loading
                    >
                        {isLoading ? (
                            <div className="flex justify-center items-center space-x-2">
                                <AiOutlineLoading className="animate-spin" />
                                <span>Submitting...</span>
                            </div>
                        ) : (
                            "Submit"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateVendor;