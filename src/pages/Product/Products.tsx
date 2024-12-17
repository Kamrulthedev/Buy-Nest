/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductHero from "./ProductHero";
import VendorFilter from "@/components/ui/Filter/VendorFilter";
import SortProducts from "@/components/ui/Filter/SortProducts";
import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import { useAppSelector } from "@/Redux/hooks";

const Products = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const productsPerPage = 8;

  const { data: AllProducts, isLoading } = useGetAllProductsQuery([
    { name: "page", value: currentPage },
  ]);

  const products = AllProducts?.data || [];
  const filteredProducts = products.filter((product: any) =>
    (product.name?.toLowerCase() || "").includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a: any, b: any) =>
    (a.name || "").localeCompare(b.name || "")
  );

  const paginate = Math.ceil(AllProducts?.meta?.total / productsPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="bg-white min-h-screen py-8 animate__animated animate__fadeInDown">
      <ProductHero />
      <div className="container mx-auto mt-8 grid gap-6 px-4 sm:grid-cols-1 lg:grid-cols-[250px_1fr]">
        <aside className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <h2 className="font-bold text-lg">Search Products</h2>
            <input
              type="text"
              placeholder="Search"
              className="mt-2 w-full p-2 transition-transform hover:scale-x-105 border border-gray-300 bg-white rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <VendorFilter />
        </aside>

        <section>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">{AllProducts?.meta?.total} Products Found</p>
            <SortProducts />
          </div>

          {isLoading ? (
            <div className="text-center text-gray-500">Loading...</div>
          ) : sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 animate__animated animate__fadeInDown">
              {sortedProducts.map((product: any) => (
                <div
                  key={product.id}
                  className="relative p-4 border rounded-lg shadow hover:shadow-lg group h-[350px] flex flex-col justify-between"
                >
                  <img
                    src={product.imageUrl || "https://via.placeholder.com/150"}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="mt-2 font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  {product.discount && (
                    <p className="text-red-500">Discount: {product.discount}%</p>
                  )}

                  {/* Hover Buttons */}
                  <div className="absolute left-0 right-0 flex justify-between space-x-4 opacity-0 group-hover:opacity-100 transition-opacity px-4">
                    <Link
                      to={`/products/${product.id}`}
                      className="w-28 text-center h-8 items-center text-xs lg:text-base bg-blue-500 text-white rounded-md hover:bg-gray-600"
                    >
                      View Details
                    </Link>
                    <button className="w-28 text-center h-8  text-xs lg:text-base bg-violet-400 text-white rounded-md hover:bg-gray-600"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="mt-2 flex items-center gap-2 justify-between">
                    <img
                      src={product.shop.logoUrl || "https://via.placeholder.com/50"}
                      alt="Shop Logo"
                      className="w-9 h-9 p-[1px] rounded-full border border-violet-500"
                    />
                    <button
                      className="px-3 py-1 text-green-500 rounded text-xs "
                      onClick={() => console.log(product.shop.id, user?.id)}
                    >
                      Follow
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No products available</div>
          )}

          <div className="mt-4 flex justify-between items-center">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">Page {currentPage} of {paginate || 1}</span>
            <button
              disabled={currentPage === paginate}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Products;
