import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="w-full lg:w-[600px] p-4 transition-transform hover:scale-x-110">
    <div className="flex items-center justify-center relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full md:w-1/2 p-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 pr-12"
      />
      <button className="absolute ml-48 lg:ml-72 text-gray-600 rounded-r-lg">
        <FaSearch className="w-5 h-5" />
      </button>
    </div>
  </div>
  );
};

export default SearchBar;
