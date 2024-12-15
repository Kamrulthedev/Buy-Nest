/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Photo from '@/components/Profile/Photo';
import { setUser } from '@/Redux/features/auth/authSlice';
import { useUpdateMeMutation } from '@/Redux/features/user/userApi';
import { useAppSelector } from '@/Redux/hooks';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const user = useAppSelector((state) => state.auth.user);
    const [UpdateMe, { isLoading }] = useUpdateMeMutation();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    const [isEditing, setIsEditing] = useState(false);


    const onSubmit = async (data: any) => {
        const toastId = toast.loading("Updating My Profile...");
        const { name, contactNumber, address, photo } = data;

        const formPayload = new FormData();
        // Only include data if it's present
        if (name || contactNumber || address) {
            formPayload.append("data", JSON.stringify({ name, contactNumber, address }));
        } else {
            formPayload.append("data", JSON.stringify({}));
        }

        if (photo && photo[0]) {
            formPayload.append("file", photo[0]);
        }

        try {
            const res = await UpdateMe(formPayload);
            if (res?.data?.error) {
                throw new Error(res?.data?.message || "Profile Update failed!");
            }

            dispatch(setUser({
                user: res?.data?.data,
            }));

            // Success toast
            toast.update(toastId, {
                render: res?.message || "Profile updated successfully!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
        } catch (error) {
            toast.update(toastId, {
                render: "Profile update failed! Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
        }

        setIsEditing(false);
    };



    return (
        <div className='mb-20 p-5 animate__animated animate__fadeInDown font-serif'>
            <div className='max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-lg'>
                {/* Cover Photo and Profile */}
                <Photo profile={user?.profilePhoto}></Photo>
                <div className="py-6 animate__animated animate__fadeInDown">
                    {/* Profile Info and Edit Button */}
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-semibold">{user?.name}</h1>
                            <p className="text-gray-600">{user?.email}</p>
                            <p className="text-gray-600">{user?.role}</p>
                            <p className="text-gray-600">{user?.contactNumber}</p>
                            <p className="text-gray-600">Address: {user?.address}</p>
                        </div>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="mt-4 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-lg transition bg-primary-gradient"
                        >
                            Edit Profile
                        </button>
                    </div>

                    {/* Stats */}
                    {
                        user?.role === "ADMIN" && (
                            <div className="flex justify-between mt-6 sm:mt-4">
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">120</h2>
                                    <p className="text-gray-500">Products</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">300</h2>
                                    <p className="text-gray-500">Customer</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">180</h2>
                                    <p className="text-gray-500">Shop</p>
                                </div>
                            </div>
                        )
                    }
                    {
                        user?.role === "VENDOR" && (
                            <div className="flex justify-between mt-6 sm:mt-4">
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">120</h2>
                                    <p className="text-gray-500">Products</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">300</h2>
                                    <p className="text-gray-500">Followers</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">180</h2>
                                    <p className="text-gray-500">Following</p>
                                </div>
                            </div>
                        )
                    }
                    {
                        user?.role === "CUSTOMER" && (
                            <div className="flex justify-between mt-6 sm:mt-4">
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">120</h2>
                                    <p className="text-gray-500">Order</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">300</h2>
                                    <p className="text-gray-500">Followers</p>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-xl font-semibold">180</h2>
                                    <p className="text-gray-500">Following</p>
                                </div>
                            </div>
                        )
                    }
                </div>

                {/* Edit Profile Form */}
                {isEditing && (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-50 p-6 rounded-lg mt-8 animate__animated animate__fadeInDown">
                        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

                        {/* Profile Image Input */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Profile Picture</label>
                            <input
                                type="file"
                                className="bg-white p-3 border rounded-md"
                                {...register("photo")}
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                defaultValue={user?.name}
                                className="bg-white p-3 border rounded-md"
                                {...register('name')}
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Phone Number</label>
                            <input
                                type="text"
                                defaultValue={user?.contactNumber}
                                className="bg-white p-3 border rounded-md"
                                {...register('contactNumber')}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Location</label>
                            <input
                                type="text"
                                defaultValue={user?.address}
                                className="bg-white p-3 border rounded-md"
                                {...register('address')}
                                placeholder="Enter your location"
                            />
                        </div>
                        <div className="flex space-x-4 mt-6">
                            <button
                                type="submit"
                                className="bg-violet-400 text-white px-6 py-2 rounded-md hover:bg-violet-500 transition"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <FaSpinner className="animate-spin" />
                                ) : (
                                    "Save Changes"
                                )}
                            </button>
                            <button
                                type="button"
                                className="bg-red-400 text-white px-6 py-2 rounded-md hover:bg-red-500 transition"
                                onClick={() => setIsEditing(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default MyProfile;
