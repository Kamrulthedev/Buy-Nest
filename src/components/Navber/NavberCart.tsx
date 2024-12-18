/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { useGetAllShopsNameandIdQuery } from "@/Redux/features/shops/shopsApi";
import { useState } from "react";
import { useCreateCartMutation } from "@/Redux/features/cart/cartApi";
import { toast } from "react-toastify";
import { addCard } from "@/Redux/features/cart/cartSlice";

const NavberCart = () => {
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const { data: shops } = useGetAllShopsNameandIdQuery(undefined);
  const [showSelector, setShowSelector] = useState(false);
  const [selectedShop, setSelectedShop] = useState<string>("");
  const dispatch = useAppDispatch();


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
      console.log("User ID is missing.");
      return;
    }

    const CreateCartData = {
      userId: user.id,
      shopId: selectedShop,
    };

    try {
      console.log(CreateCartData);
      const res = await CreateCart(CreateCartData).unwrap();
      console.log(res);
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

  const cards = useAppSelector((state) => state.carts.cards);
  console.log(cards)

  return (
    <div className="text-gray-600 relative group">
      <Link
        to="/cards"
        className="hover:text-violet-500 flex items-center gap-1"
      >
        <FiShoppingCart size={24} />
        <span className="hidden md:inline">Cart</span>
      </Link>

      <div className="absolute top-full right-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-64 mt-1 z-10 animate__animated animate__fadeInDown">
        <ul className="p-4">
          {cards?.map((shop: { id: string; name: string }) => (
            <li key={shop.id}>
              <Link
                className="block px-4 py-2 mb-4 hover:bg-slate-100 rounded-lg text-gray-700"
                 to={`/notifications/${shop.id}`}
              >
                {shop.name}
              </Link>
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
