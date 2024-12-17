import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";


const NavberCart = () => {
  return (
    <div className="text-gray-600 relative group">
      <Link
        to="/cards"
        className="hover:text-violet-500 flex items-center gap-1"
      >
        <FiShoppingCart size={24} />
        <span className="hidden md:inline">Cart</span>
      </Link>

      <div className="absolute top-full right-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-64 mt-1 z-10 animate__animated animate__fadeInDown">
        <ul className="p-4">
          <li>
            <Link
              className="block px-4 py-2 hover:bg-slate-100 rounded-lg text-gray-700"
              to="/notifications/1"
            >
              Shop - 1
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-slate-100 rounded-lg text-gray-700"
              to="/notifications/2"
            >
              Shop - 2
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 hover:bg-slate-100 rounded-lg text-gray-700"
              to="/notifications/3"
            >
              Shop - 3
            </Link>
          </li>
          <li>
            <button
              className="block px-4 py-2 hover:bg-violet-500 bg-violet-400 rounded-lg text-gray-200"
            >
              Create New Cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavberCart;