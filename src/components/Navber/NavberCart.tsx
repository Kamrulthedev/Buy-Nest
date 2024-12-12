import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";


const NavberCart = () => {
    return (
        <div className="text-gray-600">
             <Link
            to="/cards"
            className="hover:text-violet-500 flex items-center gap-1"
          >
            <FiShoppingCart size={24} />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </div>
    );
};

export default NavberCart;