/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import Line from "@/components/CetegoryProducts/Line";
import HeadLink from "@/components/ui/HeadLink";
import { useCreateCustomerMutation } from "@/Redux/features/customer/customer.api";
import { toast } from "react-toastify";
import { setUser } from "@/Redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { imageUpload } from "@/Utils/imageUploads";


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [createCustomer, { isLoading }] = useCreateCustomerMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (formData: any) => {
        const toastId = toast.loading("Creating account...");
        const { name, email, contactNumber, password, photo } = formData;
        let profilePhoto = "";


        if (photo && photo instanceof File) {
            console.log("Photo is a valid file:", photo);  
            const imageUrl = await imageUpload(photo);
            console.log("Image URL after upload:", imageUrl);
            if (imageUrl) {
                profilePhoto = imageUrl;
            } else {
                toast.error("Image upload failed!");
                return;
            }
        } else {
            console.log("Photo is not a valid file:", photo); 
        }


        const formPayload = new FormData();
        formPayload.append("data", JSON.stringify({ name, email, contactNumber, password, profilePhoto }));
        console.log(formPayload)

        // if (photo && photo[0]) {
        //     formPayload.append("file", photo[0]);
        // }

        // try {
        //     const res = await createCustomer(formPayload).unwrap();
        //     if (res?.error) {
        //         throw new Error(res?.message || "Account creation failed!");
        //     }

        //     // Dispatch user data to the store
        //     dispatch(setUser({ user: res?.data?.result, token: res?.data?.accessToken }));

        //     // Success toast
        //     toast.update(toastId, {
        //         render: res?.message || "Account created successfully!",
        //         type: "success",
        //         isLoading: false,
        //         autoClose: 3000,
        //         position: "top-right",
        //     });

        //     navigate("/");
        // } catch (res: any) {
        //     toast.update(toastId, {
        //         render: res?.message || "Account creation failed! Please try again.",
        //         type: "error",
        //         isLoading: false,
        //         autoClose: 3000,
        //         position: "top-right",
        //     });
        // }
    };
    return (
        <div className="bg-gray-50 p-6">
            <HeadLink tag="Home" tag1="Register"></HeadLink>
            <div className="lg:flex justify-around p-6 pb-10 lg:mt-0 md:mt-16 mt-8">
                <div className="hidden lg:flex flex-col justify-center font-serif h-screen mx-auto -mt-16 animate__animated animate__fadeInDown">
                    <h1 className="text-7xl mb-6 text-gray-700 font-semibold">
                        Welcome to <br /> <span className="text-violet-400">Buy Nest</span>
                    </h1>
                    <p className="text-xl mt-4 text-gray-500">
                        Experience seamless online shopping with the best deals on a <br /> wide range of products.
                        Discover top-quality items <br /> from trusted vendors at unbeatable prices. <br />
                        Enjoy a smooth and secure checkout process <br /> with multiple payment options.
                        Shop now and get <br /> fast delivery straight to your doorstep!
                    </p>
                </div>

                <div className="flex justify-center items-center h-screen md:h-full lg:w-[500px] w-full animate__animated animate__fadeInDown">
                    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg font-serif">
                        <h2 className="text-2xl text-black text-center font-semibold">Register to Buy Nest</h2>
                        <p className="text-center text-black">Create account</p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <input
                                    type="name"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full p-3 border rounded-lg bg-white text-black"
                                    placeholder="Your Name *"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name.message?.toString()}
                                    </p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className="w-full p-3 border rounded-lg bg-white text-black"
                                    placeholder="Email address *"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email.message?.toString()}
                                    </p>
                                )}
                            </div>
                            <div>
                                <input
                                    type="phone"
                                    {...register("contactNumber", {
                                        required: "Phone Number is required",
                                    })}
                                    className="w-full p-3 border rounded-lg bg-white text-black"
                                    placeholder="Your Phone Number *"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">
                                        {errors.phone.message?.toString()}
                                    </p>
                                )}
                            </div>
                            <div>
                                <p className="p-1 text-gray-600 text-sm">Profile Photo <span className="text-xs text-gray-500">(optional)</span></p>
                                <input
                                    type="file"
                                    {...register("photo")}
                                    className="w-full p-3 border rounded-lg bg-white text-black"
                                    placeholder="Profile Photo *"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm">
                                        {errors.phone.message?.toString()}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                    className="w-full p-3 border rounded-lg bg-white text-black"
                                    placeholder="Password *"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        {errors.password.message?.toString()}
                                    </p>
                                )}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    {...register("notRobot", {
                                        required: "Must be entered this field",
                                    })}
                                    className="mr-2 text-black"
                                />
                                <span className="text-black">I&apos;m not a robot</span>
                            </div>
                            {errors.notRobot && (
                                <p className="text-red-500 text-sm">
                                    {errors.notRobot.message?.toString()}
                                </p>
                            )}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full p-3 text-white rounded-lg flex items-center justify-center ${isLoading ? "bg-gray-400" : "bg-violet-500"
                                    }`}
                            >
                                {isLoading ? (
                                    <>
                                        <svg
                                            className="w-5 h-5 mr-2 animate-spin"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2z"
                                            ></path>
                                        </svg>
                                        Creating Account...
                                    </>
                                ) : (
                                    "Continue"
                                )}
                            </button>
                        </form>
                        <div className="text-center text-black">
                            <a href="/login" className="text-violet-500 mr-2">
                                Sign in ⇨
                            </a>
                            if you don’t have an account.
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Line></Line>
            </div>
        </div>
    );
};

export default Register;
