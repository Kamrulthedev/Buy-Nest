/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Line from "@/components/CetegoryProducts/Line";
import HeadLink from "@/components/ui/HeadLink";
import { useAppDispatch } from "@/Redux/hooks";
import { setUser } from "@/Redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/Redux/features/auth/authApi";

const Login = () => {
    const [login, {isLoading}] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        const toastId = toast.loading("Logging in...");

        const loginData = {
            email: data.email,
            password: data.password,
        };

        console.log(loginData)

        try {
            const res = await login(loginData);
            console.log(res)
            if (res.data.error) {
                throw new Error(res?.data?.message || "Login failed!");
            }

            // Dispatch user data to the store
            dispatch(setUser({ user: res?.data?.data?.user, token: res?.data?.data?.accessToken }));

            toast.update(toastId, {
                render: "Login successful!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
            // Redirect to the home page
            navigate("/");
        } catch (error: any) {
            toast.update(toastId, {
                render: error.message || "Login failed! Please try again.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                position: "top-right",
            });
        }
    };


    return (
        <div className="bg-gray-50 p-6 ">
            <HeadLink tag="Home" tag1="Login"></HeadLink>
            <div className="lg:flex justify-around p-6 pb-10">
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
                        <h2 className="text-2xl text-black text-center font-semibold">Login to Buy Nest</h2>
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
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                    className="w-full p-3 border rounded-lg bg-white text-black"
                                    placeholder="Email address *"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{String(errors.email.message)}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="password"
                                    {...register("password", { required: "Password is required" })}
                                    className="w-full p-3 border rounded-lg bg-white text-black"
                                    placeholder="Password *"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">{String(errors.password.message)}</p>
                                )}
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    {...register("notRobot", { required: "Verification required" })}
                                    className="mr-2"
                                />
                                <span className="text-black">I'm not a robot</span>
                            </div>
                            {errors.notRobot && (
                                <p className="text-red-500 text-sm">{String(errors.notRobot.message)}</p>
                            )}

                            <div className="text-right">
                                <a href="/forgot-password" className="text-violet-500">
                                    Forgot password?
                                </a>
                            </div>
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
                                        Login.........
                                    </>
                                ) : (
                                    "Continue"
                                )}
                            </button>
                        </form>

                        <div className="text-center text-black">
                            <a href="/register" className="text-violet-500 mr-2">
                                Sign Up ⇨
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

export default Login;