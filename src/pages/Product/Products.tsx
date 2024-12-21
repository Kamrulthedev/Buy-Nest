/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductHero from "./ProductHero";
import VendorFilter from "@/components/ui/Filter/VendorFilter";
import SortProducts from "@/components/ui/Filter/SortProducts";
import { useGetAllProductsQuery } from "@/Redux/features/products/productsApi";
import { useAppSelector } from "@/Redux/hooks";
import { useUserCarsQuery } from "@/Redux/features/cart/cartApi";
import { useCreateCartItemMutation } from "@/Redux/features/cart/cartItem";
import { toast } from "react-toastify";

const Products = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [CreateCartItem] = useCreateCartItemMutation()

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


  const [showDropdown, setShowDropdown] = useState(false);

  const { data: UserCarts } = useUserCarsQuery(user?.id as string)
  const Carts = UserCarts?.data;



  const handleAddToCart = async (productId: string, cartId: string) => {
    try {
        const res = await CreateCartItem({ productId, cartId }).unwrap();
        if (res.error) {
          throw new Error(res.message || "An unexpected error occurred.");
      }

        // Show success toast
        toast.success( res.message || "Item added to cart successfully!", {
            position: "top-right",
            autoClose: 3000,
        });
    } catch (res: any) {
        console.error("Error adding item to cart:", res?.error);

        // Show error toast
        toast.error( res.message ||"Failed to add item to cart. Please try again.", {
            position: "top-right",
            autoClose: 3000,
        });
    }
};



  const handleAddToFollow = (productId: string) => {
    if (!user) {
      navigate("/login");
    } else {
      console.log("Add to Follow:", productId, "User:", user?.id);
    }
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
                  className="relative p-4 border rounded-lg shadow hover:shadow-lg group h-[310px] flex flex-col justify-between"
                >
                  <img
                    src={product?.imageUrl || "https://via.placeholder.com/150"}
                    alt={product?.name}
                    className="w-full h-40 object-cover rounded"
                  />
                  <h3 className="mt-2 font-semibold">{product?.name}</h3>
                  <p className="text-gray-600">${product?.price}</p>
                  {product?.discount && (
                    <p className="text-red-500">Discount: {product?.discount}%</p>
                  )}

                  {/* Hover Buttons */}
                  <div className="absolute left-0 right-0 flex justify-between space-x-4 opacity-0 group-hover:opacity-100 transition-opacity px-4">
                    <Link
                      to={`/products/${product?.id}`}
                      className="w-28 h-8 flex justify-center items-center text-xs lg:text-base bg-blue-500 text-white rounded-md hover:bg-gray-600"
                    >
                      View Details
                    </Link>

                    <div className="relative">
                      <button
                        className="w-28 text-center h-8 text-xs lg:text-base bg-violet-400 text-white rounded-md hover:bg-gray-600"
                        onClick={() => setShowDropdown((prev) => !prev)}
                      >
                        Add to Cart
                      </button>

                      {showDropdown && (
                        <div className="absolute mt-2 w-32 bg-white border rounded-md shadow-lg">
                          <ul className="py-2">
                            {Carts.map((cart: any) => (
                              <li
                                key={cart.id}
                                className="px-4 py-2 text-gray-700 hover:bg-gray-200 text-[8px] cursor-pointer"
                                onClick={() => {
                                  setShowDropdown(false);
                                  handleAddToCart(product.id, cart.id);
                                }}
                              >
                                {cart?.shop?.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2 justify-between">
                    <img
                      src={product?.shop?.logoUrl || "https://via.placeholder.com/50"}
                      alt="Shop Logo"
                      className="w-9 h-9 p-[1px] rounded-full border border-violet-500"
                    />
                    <button
                      className="px-3 py-1 text-green-500 rounded text-xs "
                      onClick={() => handleAddToFollow(product?.id)}
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
