/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Photo from '@/components/Profile/Photo';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
    const { register, handleSubmit, setValue, watch } = useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [profileImage, setProfileImage] = useState<string | null>(null); 
    const [fileInput, setFileInput] = useState<File | null>(null); 

    const onSubmit = (data: any) => {
        const formData = new FormData();
        if (fileInput) {
            formData.append('profileImage', fileInput);
        }

        // Append the rest of the form data
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        // Log the FormData to the console
        for (let [key, value] of formData.entries()) {
            console.log("Profile Data", `${key}:`, value );
        }

        setIsEditing(false);
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            setFileInput(file);
            setProfileImage(URL.createObjectURL(file));
        }
    };
    return (
        <div className='mb-20 p-5 animate__animated animate__fadeInDown'>
            <div className='max-w-screen-lg mx-auto p-6 bg-white shadow-md rounded-lg'>
                {/* Cover Photo and Profile */}
                <Photo></Photo>
                <div className="py-6 animate__animated animate__fadeInDown">
                    {/* Profile Info and Edit Button */}
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-semibold">Kamrul Hassan</h1>
                            <p className="text-gray-600">Travel Blogger</p>
                            <p className="text-gray-600">01877722222</p>
                            <p className="text-gray-600">Address: Dhaka</p>
                        </div>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="mt-4 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-lg transition bg-primary-gradient"
                        >
                            Edit Profile
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-between mt-6 sm:mt-4">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold">120</h2>
                            <p className="text-gray-500">Posts</p>
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
                </div>

                {/* Edit Profile Form */}
                {isEditing && (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-gray-50 p-6 rounded-lg mt-8">
                        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

                        {/* Profile Image Input */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Profile Picture</label>
                            <input
                                type="file"
                                className="bg-white p-3 border rounded-md"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                            {profileImage && (
                                <img src={profileImage} alt="Profile Preview" className="mt-4 w-32 h-32 object-cover rounded-full" />
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                className="bg-white p-3 border rounded-md"
                                {...register('fullName')}
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Your Email</label>
                            <input
                                type="text"
                                className="bg-white p-3 border rounded-md"
                                {...register('email')}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Phone Number</label>
                            <input
                                type="text"
                                className="bg-white p-3 border rounded-md"
                                {...register('phone')}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold mb-2">Location</label>
                            <input
                                type="text"
                                className="bg-white p-3 border rounded-md"
                                {...register('location')}
                                placeholder="Enter your location"
                            />
                        </div>
                        <div className="flex space-x-4 mt-6">
                            <button
                                type="submit"
                                className="bg-violet-400 text-white px-6 py-2 rounded-md hover:bg-violet-500 transition"
                            >
                                Save Changes
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
