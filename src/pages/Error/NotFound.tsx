// import { RootState } from '@/Redux/store';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    // Get the authentication state from the Redux store
    //   const isAuthenticated = useSelector((state: RootState) => state?.auth.user);
    const isAuthenticated = false

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center font-serif">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6 text-black">Oops! Page Not Found</h2>
            <p className="text-lg mb-6 text-black">It seems like the page you&apos;re looking for doesn&apos;t exist.</p>
            <div className="flex space-x-4">
                <button
                    onClick={() => navigate("/")}
                    className="text-blue-500 underline hover:text-blue-700 text-lg"
                >
                    Go to Home
                </button>
                {/* Conditionally render the 'Go to Login' button based on authentication state */}
                {!isAuthenticated && (
                    <button
                        onClick={() => navigate("/login")}
                        className="text-blue-500 underline hover:text-blue-700 text-lg"
                    >
                        Go to Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default NotFound;
