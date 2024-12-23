/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllOrderItemsQuery } from "@/Redux/features/order/orderItemApi";
import { useAppSelector } from "@/Redux/hooks";
import { useState, useEffect } from "react";

interface OrderItem {
    id: string;
    product: {
        name: string;
        price: number;
        id: string;
        category: string;
        imageUrl: string;
        shop: {
            name: string;
        };
    };
    order: {
        status: string;
        totalPrice: number;
    };
}

const CustomerOrders = () => {
    const user = useAppSelector((state) => state.auth.user);
    const [orders, setOrders] = useState<OrderItem[]>([]);

    const id = user?.id;
    const { data } = useGetAllOrderItemsQuery(id as string);

    const OrdersData = data?.data as OrderItem[];

    useEffect(() => {
        if (OrdersData) {
            setOrders(OrdersData);
        }
    }, [OrdersData]);

    return (
        <div className="p-6 bg-white text-gray-800 animate__animated animate__fadeInDown">
            <h1 className="text-3xl font-semibold text-violet-600 mb-6 animate__animated animate__fadeInDown">
                Your Order History
            </h1>

            {/* Orders Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 text-violet-600 animate__animated animate__fadeInDown">
                            <th className="p-3 border text-left">Image</th>
                            <th className="p-3 border text-left">Name</th>
                            <th className="p-3 border text-left">Price</th>
                            <th className="p-3 border text-left">Category</th>
                            <th className="p-3 border text-left">Shop Name</th>
                            <th className="p-3 border text-left">Order Status</th>
                            <th className="p-3 border text-left">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders?.map((order) => (
                                <tr key={order?.id} className="hover:bg-gray-50 animate__animated animate__fadeInDown">
                                    <td className="p-3 border">
                                        <img
                                            src={order?.product?.imageUrl || "https://via.placeholder.com/50"}
                                            alt={order.product.name}
                                            className="w-12 h-12 object-cover rounded"
                                        />
                                    </td>
                                    <td className="p-3 border">{order?.product?.name}</td>
                                    <td className="p-3 border">${order?.product?.price.toFixed(2)}</td>
                                    <td className="p-3 border">{order?.product?.category}</td>
                                    <td className="p-3 border">{order?.product?.shop?.name}</td>
                                    <td className="p-3 border">{order?.order?.status}</td>
                                    <td className="p-3 border">${order?.order?.totalPrice.toFixed(2)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={7} className="p-3 border text-center text-gray-500">
                                    No orders found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerOrders;
