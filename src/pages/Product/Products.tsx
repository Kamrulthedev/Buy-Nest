

const Products = () => {
  return (
    <main className="bg-white min-h-screen py-8">
      {/* Hero Section */}
      <div className="bg-gray-200 p-2 px-10 shadow text-start">
        <p>Home/products</p>
      </div>

      {/* Wrapper Section */}
      <div className="container mx-auto mt-8 grid gap-6 px-4 sm:grid-cols-1 lg:grid-cols-[250px_1fr]">
        {/* Filters */}
        <aside className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <h2 className="font-bold text-lg">Search</h2>
            <input
              type="text"
              placeholder="Search"
              className="mt-2 w-full p-2 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div className="mb-4">
            <h2 className="font-bold text-lg">Category</h2>
            <ul className="mt-2 space-y-2">
              <li className="cursor-pointer hover:text-blue-500">All</li>
              <li className="cursor-pointer hover:text-blue-500">Men</li>
              <li className="cursor-pointer hover:text-blue-500">Women</li>
              <li className="cursor-pointer hover:text-blue-500">Kids</li>
              <li className="cursor-pointer hover:text-blue-500">Accessories</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="font-bold text-lg">Vendors</h2>
            <select
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "
            >
              <option value="all">All</option>
              <option value="polo">Polo</option>
              <option value="lacoste">Lacoste</option>
              <option value="guess">Guess</option>
            </select>
          </div>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Price</h2>
            <div className="flex items-center gap-4 mt-2">
              <span className="text-gray-500">-$∞</span>
              <input
                type="range"
                className="flex-grow"
                min="0"
                max="500"
                step="10"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="free-shipping"
              className="w-4 h-4 cursor-pointer"
            />
            <label htmlFor="free-shipping" className="text-gray-700 cursor-pointer">
              Free Shipping
            </label>
          </div>

          <button className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600">
            Clear Filters
          </button>
        </aside>

        {/* Products Section */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">0 Products Found</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button className="p-2 border rounded-md bg-gray-200">
                  Grid
                </button>
                <button className="p-2 border rounded-md">
                  List
                </button>
              </div>
              <div>
                <label htmlFor="sort" className="text-gray-700 mr-2">
                  Sort By
                </label>
                <select
                  id="sort"
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="lowest">Price (Lowest)</option>
                  <option value="highest">Price (Highest)</option>
                  <option value="a-z">Name (A-Z)</option>
                  <option value="z-a">Name (Z-A)</option>
                </select>
              </div>
            </div>
          </div>
          {/* Add your product list or grid here */}
          <div className="text-center text-gray-500">No products available</div>
        </section>
      </div>
    </main>
  );
};

export default Products;
