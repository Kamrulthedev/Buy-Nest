import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

const Wishlist = () => {
    return (
        <div>
            <Link
                to="/wishlist"
                className="text-gray-600 hover:text-violet-500 flex items-center gap-1"
            >
                <FiHeart size={24} />
                <span className="hidden md:inline">Wishlist</span>
            </Link>
        </div>
    );
};

export default Wishlist;