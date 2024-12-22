/* eslint-disable @typescript-eslint/no-explicit-any */
import Heading from "@/Heading/Heading";
import { setCart } from "@/Redux/features/cart/cardSlice";
import { useDeleteCartItemMutation, useGetCartItemsQuery } from "@/Redux/features/cart/cartItem";
import { useAppDispatch } from "@/Redux/hooks";
import Line from "@/components/CetegoryProducts/Line";
import { GrNext } from "react-icons/gr";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Cards = () => {
  const { id } = useParams();
  const { data } = useGetCartItemsQuery(id as string);
  const CartItems = data?.data || [];
  const dispacth = useAppDispatch();
  const navigate = useNavigate();

  // Calculate summary data
  const totalQuantity = CartItems.reduce((sum: any, item: any) => sum + item.quantity, 0);
  const totalPrice = CartItems.reduce(
    (sum: any, item: any) => sum + item.product.price * item.quantity,
    0
  );
  const uniqueProducts = CartItems.length;

  const [DeleteItem] = useDeleteCartItemMutation()




  // Handle delete action
  const handleDelete = async (cartItemId: string) => {
    // Show a confirmation toast
  toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to delete this item?</p>
          <div className="flex justify-end space-x-3 mt-2">
            <button
              onClick={() => {
                deleteItemConfirmed(cartItemId);
                closeToast();
              }}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Yes
            </button>
            <button
              onClick={closeToast}
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false, 
        closeOnClick: false,
        draggable: false,
      }
    );
  };


  
  // Confirm deletion
  const deleteItemConfirmed = async (cartItemId: string) => {
    try {
      const res : any = await DeleteItem(cartItemId);

  
      toast.success( res?.message || "Cart item deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete cart item. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };
  

  // Handle checkout action
  const handleCheckout = () => {
    const checkoutData = {
      CartItems,
      totalQuantity,
      totalPrice,
    };

    dispacth(setCart(checkoutData));
    toast.success("Checkout successful!", {
      position: "top-right",
      autoClose: 3000,
    });

    navigate("/checkout");
  };


  return (
    <div className="px-4 md:px-6 lg:px-12 py-6">
      <div className="bg-gray-50 flex p-2 px-10 text-start gap-3">
        <p className="items-center gap-3 flex">
          <Link to="/" className="text-violet-500 hover:underline">
            Home
          </Link>
          <GrNext className="text-[12px]" />
        </p>
        <p className="text-violet-500 hover:underline">Cards</p>
      </div>
      <div className="w-full mx-auto my-5">
        <div>
          <Heading Heading="Shopping Cart" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 animate__animated animate__fadeInDown">
          {/* Cart Items Table */}
          <div className="overflow-x-auto col-span-4">
            <table className="table w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left animate__animated animate__fadeInDown">
                  <th className="p-2">Image</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total Amount</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {CartItems.map((item: any) => (
                  <tr key={item.id} className="hover:bg-gray-50 animate__animated animate__fadeInDown">
                    <td className="p-2 ">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="w-12 h-12 object-cover rounded-md"
                      />
                    </td>
                    <td className="p-2">{item.product.name}</td>
                    <td className="p-2">${item.product.price.toFixed(2)}</td>
                    <td className="p-2">{item.quantity}</td>
                    <td className="p-2">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="p-2">
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Summary Section */}
          <div className="col-span-2 border p-6 rounded-lg shadow-md bg-gray-100 mx-auto lg:mx-0 lg:col-span-2 w-full lg:w-auto animate__animated animate__fadeInDown">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center animate__animated animate__fadeInDown">
              Order Summary
            </h2>
            <div className="space-y-3 text-gray-700 animate__animated animate__fadeInDown">
              <div className="flex justify-between animate__animated animate__fadeInDown">
                <span>Total Unique Products:</span>
                <span>{uniqueProducts}</span>
              </div>
              <div className="flex justify-between animate__animated animate__fadeInDown">
                <span>Total Quantity:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="flex justify-between animate__animated animate__fadeInDown">
                <span>Total Price:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between animate__animated animate__fadeInDown">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-300 my-3 animate__animated animate__fadeInDown"></div>
              <div className="flex justify-between font-bold text-lg animate__animated animate__fadeInDown">
                <span>Grand Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button
              className={`mt-4 w-full py-2 rounded-md text-white animate__animated animate__fadeInDown ${CartItems.length === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-violet-400 hover:bg-violet-500"
                }`}
              onClick={handleCheckout}
              disabled={CartItems.length === 0}
            >
              Checkout
            </button>
          </div>

        </div>
        <div>
          <Line />
        </div>
      </div>
    </div>
  );
};

export default Cards;
