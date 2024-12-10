import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';

const MobaileNaber = () => {
    return (
        <div className="md:hidden bg-violet-50 px-4 py-2 animate__animated animate__fadeInDown rounded-md">
        <div className="p-3">
          <div className="flex items-center mb-4 relative hover:scale-105 transition-transform">
            <input
              type="text"
              placeholder="Search products"
              className="w-full px-4 py-2 border text-gray-500 bg-white rounded-lg focus:outline-none"
            />
            <button className="relative -ml-14 px-4 rounded-r-lg text-violet-500">
              <FiSearch size={20} />
            </button>
          </div>
          <Link className="block text-xl py-2 hover:bg-gray-200 p-3 rounded-lg" to='/'>Home</Link>
          <Link className="block text-xl py-2 hover:bg-gray-200 p-3 rounded-lg" to='/products'>Shop</Link>
          <Link className="block text-xl py-2 hover:bg-gray-200 p-3 rounded-lg" to='/about'>About</Link>
          <Link className="block text-xl py-2 hover:bg-gray-200 p-3 rounded-lg" to='/contact'>Contact</Link>
        </div>
      </div>
    );
};

export default MobaileNaber;