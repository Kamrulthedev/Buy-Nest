
const SortProducts = () => {
    return (
        <div>
        <label htmlFor="sort" className="text-gray-700 mr-2">
          Sort By
        </label>
        <select
          id="sort"
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
        >
          <option value="lowest">Price (Lowest)</option>
          <option value="highest">Price (Highest)</option>
          <option value="a-z">Name (A-Z)</option>
          <option value="z-a">Name (Z-A)</option>
        </select>
      </div>
    );
};

export default SortProducts;