import FilterPageSearch from "@/components/ui/Filter/FilterPageSearch";
import ProductHero from "./ProductHero";
import VendorFilter from "@/components/ui/Filter/VendorFilter";
import SortProducts from "@/components/ui/Filter/SortProducts";

const Products = () => {

  return (
    <main className="bg-white min-h-screen py-8 animate__animated animate__fadeInDown">
      <ProductHero></ProductHero>
      {/* Wrapper Section */}
      <div className="container mx-auto mt-8 grid gap-6 px-4 sm:grid-cols-1 lg:grid-cols-[250px_1fr]">
        {/* Filters */}
        <aside className="bg-white p-6 rounded-lg shadow-lg">
          <FilterPageSearch></FilterPageSearch>
          <div className="mb-4">
            <h2 className="font-bold text-lg">Category</h2>
            <ul className="mt-2 space-y-2">
              <li className="cursor-pointer hover:text-violet-500">All</li>
              <li className="cursor-pointer hover:text-violet-500">Men</li>
              <li className="cursor-pointer hover:text-violet-500">Women</li>
              <li className="cursor-pointer hover:text-violet-500">Kids</li>
              <li className="cursor-pointer hover:text-violet-500">Accessories</li>
            </ul>
          </div>
          <VendorFilter></VendorFilter>
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

          <button className="mt-4 w-full text-xs py-2 bg-red-500 text-white rounded hover:bg-red-600">
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
              <SortProducts></SortProducts>
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
