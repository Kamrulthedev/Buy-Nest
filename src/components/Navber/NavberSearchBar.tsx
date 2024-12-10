import {  FiSearch } from "react-icons/fi";

const NavberSearchBar = () => {
    return (
        <div className="hidden md:flex items-center w-1/3 mx-4 bg-white relative hover:scale-110 transition-transform">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-4 py-2 border rounded-xl text-gray-500 focus:outline-none bg-white"
        />
        <button className="relative -ml-16 px-4 rounded-r-lg text-blue text-gray-500">
          <FiSearch size={20} />
        </button>
      </div>

    );
};

export default NavberSearchBar;