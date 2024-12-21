/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { FiMoreVertical, FiShoppingCart } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useGetAllShopsNameandIdQuery } from "@/Redux/features/shops/shopsApi";
import { useState } from "react";
import { useCreateCartMutation, useDeleteCartMutation, useUserCarsQuery } from "@/Redux/features/cart/cartApi";
import { toast } from "react-toastify";
import { addCard, removeFromCart } from "@/Redux/features/cart/cartSlice";

const NavberCart = () => {
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const { data: shops } = useGetAllShopsNameandIdQuery(undefined);
  const [showSelector, setShowSelector] = useState(false);
  const [selectedShop, setSelectedShop] = useState<string>("");
  const dispatch = useAppDispatch();
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  const {data: UserCarts} = useUserCarsQuery(user?.id as string)
  const Carts = UserCarts?.data;

  const [CreateCart] = useCreateCartMutation()

  const handleCreateCart = () => {
    if (!user) {
      navigate("/login");
    } else {
      setShowSelector(true);
    }
  };

  const handleConfirmCart = async () => {
    const toastId = toast.loading("Creating Cart...");

    if (!selectedShop) {
      console.log("Please select a shop.");
      return;
    }

    if (!user?.id) {
      navigate("/login");
      console.log("User ID is missing.");
      return;
    }

    const CreateCartData = {
      userId: user?.id,
      shopId: selectedShop,
    };

    try {
      const res = await CreateCart(CreateCartData).unwrap();
      if (res?.error) {
        throw new Error(res?.message || "Cart creation failed!");
      }
      dispatch(addCard({ cardId: res?.data?.id, cardName: res?.data?.shop?.name }));

      // Success toast
      toast.update(toastId, {
        render: res?.message || "Cart created successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        position: "top-right",
      });

      setShowSelector(false);
    } catch (res: any) {
      console.error("Error creating cart:", res?.error);
      toast.update(toastId, {
        render: res?.message || "Cart creation failed! Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        position: "top-right",
      });
    }
  };


  const [deleteCart] = useDeleteCartMutation();

  const handleDropdownToggle = (id: string) => {
    setShowDropdown(showDropdown === id ? null : id);
  };

  const handleDelete = async (cartId: string) => {
    try {
      await deleteCart(cartId).unwrap();
      dispatch(removeFromCart(cartId));
      toast.success("Cart deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to delete cart. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleUpdate = (CartId: string) => {
    console.log(`Update shop with ID: ${CartId}`);
  };

  return (
    <div className="text-gray-600 relative group">
      <Link
        to=''
        className="hover:text-violet-500 flex items-center gap-1"
      >
        <FiShoppingCart size={24} />
        <span className="hidden md:inline">Cart</span>
      </Link>

      <div className="absolute top-full right-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-64 mt-1 z-10 animate__animated animate__fadeInDown">
        <ul className="p-4">
          {Carts?.map((shop: { id: string; name: string, shop:any }) => (
            <li key={shop.id} className="relative">
              <Link
                className="block px-4 py-2 mb-4 hover:bg-slate-100 rounded-lg text-gray-700"
                to={`/cards/${shop.id}`}
              >
                {shop?.shop?.name}
              </Link>

              {/* 3-dot icon for dropdown */}
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => handleDropdownToggle(shop.id)}
              >
                <FiMoreVertical size={20} />
              </button>

              {/* Dropdown menu */}
              {showDropdown === shop.id && (
                <div className="absolute right-0 mt-1 bg-white shadow-lg rounded-lg w-40 z-10">
                  <ul className="p-2">
                    <li>
                      <button
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-700 rounded-lg"
                        onClick={() => handleUpdate(shop.id)}
                      >
                        Update
                      </button>
                    </li>
                    <li>
                      <button
                        className="block px-4 py-2 hover:bg-gray-100 text-red-500 rounded-lg"
                        onClick={() => handleDelete(shop.id)}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          ))}

          {showSelector ? (
            <>
              <li>
                <select
                  value={selectedShop}
                  onChange={(e) => setSelectedShop(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 bg-gray-100 rounded-lg border focus:ring-violet-500"
                >
                  <option value="" disabled>
                    Select a shop
                  </option>
                  {shops?.data?.map((shop: { id: string; name: string }) => (
                    <option key={shop.id} value={shop.id}>
                      {shop.name}
                    </option>
                  ))}
                </select>
              </li>
              <li>
                <button
                  className="block w-full px-4 py-2 mt-2 hover:bg-violet-500 bg-violet-400 rounded-lg text-gray-200"
                  onClick={handleConfirmCart}
                >
                  Confirm Selection
                </button>
              </li>
            </>
          ) : (
            <li>
              <button
                className="block w-full px-4 py-2 hover:bg-violet-500 bg-violet-400 rounded-lg text-gray-200"
                onClick={handleCreateCart}
              >
                Create New Cart
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavberCart;
