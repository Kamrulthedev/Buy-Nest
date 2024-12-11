/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useSearchParams, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Line from "@/components/CetegoryProducts/Line";
import HeadLink from "@/components/ui/HeadLink";



const Register = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const redirect = searchParams.get("redirect");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="bg-gray-50 p-6 ">
            <HeadLink tag="Home" tag1="Register"></HeadLink>
            <div className="lg:flex justify-around p-6 pb-10 lg:mt-0 mt-16">
                <div className="hidden lg:flex flex-col justify-center font-serif h-screen mx-auto -mt-16 animate__animated animate__fadeInDown">
                    <h1 className="text-7xl mb-6 text-gray-700 font-semibold">
                        Welcome to <br /> <span className="text-violet-400">Buy Nest</span>
                    </h1>
                    <p className="text-xl mt-4 text-gray-500">
                        Experience seamless online shopping with the best deals on a wide  <br />  range of products.
                    </p>
                </div>

                <div className="flex justify-center items-center h-screen md:h-full lg:w-[500px] w-full animate__animated animate__fadeInDown">
                    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg font-serif">
                        <h2 className="text-2xl text-black text-center font-semibold">Register to Buy Nest</h2>
                        <p className="text-center text-black">Access your account</p>

                        <button className="w-full flex items-center justify-center p-3 border-2 gap-6 rounded-3xl">
                            <FcGoogle className="w-6 h-6" />
                            <p className="hover:text-violet-500 text-gray-500 text-base">Continue with Google</p>
                        </button>
                        <button className="w-full flex items-center justify-center p-3 border-2 gap-6 rounded-3xl">
                            <FaGithub className="w-6 h-6" />
                            <p className="hover:text-violet-500 text-gray-500">Continue with GitHub</p>
                        </button>

                        <div className="text-center text-black flex items-center justify-center space-x-4">
                            <p className="border-b-2 flex-grow"></p>
                            <p>OR</p>
                            <p className="border-b-2 flex-grow"></p>
                        </div>

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
                                    {...register("phone", {
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
                                className="w-full p-3 bg-violet-500 text-white rounded-lg"
                            >
                                Continue
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
