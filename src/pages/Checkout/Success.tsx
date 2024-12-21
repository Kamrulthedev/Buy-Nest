import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Success = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate("/");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-violet-500 via-indigo-500 to-purple-500">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg max-w-lg mx-4">
                <div className="mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-24 h-24 mx-auto text-green-500 animate__animated animate__zoomIn"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                    Your Order Was Placed Successfully!
                </h1>
                <p className="text-gray-600 mb-6">
                    Thank you for shopping with us. We are processing your order and will notify you soon.
                </p>
                <Button 
                    onClick={handleRedirect} 
                    className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition duration-300"
                >
                    Go to Homepage
                </Button>
            </div>
        </div>
    );
};

export default Success;
