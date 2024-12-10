
const FilterPageSearch = () => {
    return (
        <div className="mb-4">
            <h2 className="font-bold text-lg">Search Products</h2>
            <input
                type="text"
                placeholder="Search"
                className="mt-2 w-full p-2 transition-transform hover:scale-x-105 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
        </div>
    );
};

export default FilterPageSearch;