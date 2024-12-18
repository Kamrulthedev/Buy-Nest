/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";

const CustomerOrders = () => {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        // Simulate fetching order data from an API
        setOrders([
            {
                id: 1,
                imageUrl: "https://via.placeholder.com/50",
                name: "Awesome Product 1",
                price: 30.0,
                category: "Electronics",
                shopName: "Shop 1",
                orderStatus: "Delivered",
                totalPrice: 30.0,
            },
            {
                id: 2,
                imageUrl: "https://via.placeholder.com/50",
                name: "Cool Product 2",
                price: 50.0,
                category: "Home Goods",
                shopName: "Shop 2",
                orderStatus: "Pending",
                totalPrice: 50.0,
            },
            {
                id: 3,
                imageUrl: "https://via.placeholder.com/50",
                name: "Stylish Product 3",
                price: 20.0,
                category: "Fashion",
                shopName: "Shop 3",
                orderStatus: "Shipped",
                totalPrice: 20.0,
            },
        ]);
    }, []);

    return (
        <div className="p-6 bg-white text-gray-800 animate__animated animate__fadeInDown">
            <h1 className="text-3xl font-semibold text-violet-600 mb-6 animate__animated animate__fadeInDown">Your Order History</h1>
            
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
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 animate__animated animate__fadeInDown">
                                <td className="p-3 border">
                                    <img src={order.imageUrl} alt={order.name} className="w-12 h-12 object-cover rounded" />
                                </td>
                                <td className="p-3 border">{order.name}</td>
                                <td className="p-3 border">${order.price.toFixed(2)}</td>
                                <td className="p-3 border">{order.category}</td>
                                <td className="p-3 border">{order.shopName}</td>
                                <td className="p-3 border">{order.orderStatus}</td>
                                <td className="p-3 border">${order.totalPrice.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CustomerOrders;

