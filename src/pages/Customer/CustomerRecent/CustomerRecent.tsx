/* eslint-disable @typescript-eslint/no-explicit-any */

import  { useState, useEffect } from "react";

const CustomerRecent = () => {
    const [recentOrders, setRecentOrders] = useState<any[]>([]);
    const [recentActivities, setRecentActivities] = useState<any[]>([]);

    useEffect(() => {
        // Simulate fetching recent orders
        setRecentOrders([
            {
                id: 1,
                product: "Product 1",
                orderDate: "2024-12-15",
                status: "Delivered",
                totalPrice: 30.0,
            },
            {
                id: 2,
                product: "Product 2",
                orderDate: "2024-12-10",
                status: "Shipped",
                totalPrice: 50.0,
            },
        ]);

        // Simulate fetching recent activities
        setRecentActivities([
            { id: 1, activity: "Liked Product 3", date: "2024-12-14" },
            { id: 2, activity: "Followed Shop 1", date: "2024-12-12" },
            { id: 3, activity: "Added Product 4 to Wishlist", date: "2024-12-11" },
        ]);
    }, []);

    return (
        <div className="p-6 bg-white text-gray-800">
            <h1 className="text-3xl font-semibold text-violet-600 mb-6">Recent Activity</h1>

            {/* Recent Orders Section */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-violet-500 mb-4">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-100 text-violet-600">
                                <th className="p-3 border">Product</th>
                                <th className="p-3 border">Order Date</th>
                                <th className="p-3 border">Status</th>
                                <th className="p-3 border">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                    <td className="p-3 border">{order.product}</td>
                                    <td className="p-3 border">{order.orderDate}</td>
                                    <td className="p-3 border">{order.status}</td>
                                    <td className="p-3 border">${order.totalPrice.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Recent Activities Section */}
            <section>
                <h2 className="text-2xl font-semibold text-violet-500 mb-4">Recent Activities</h2>
                <ul className="space-y-4">
                    {recentActivities.map((activity) => (
                        <li key={activity.id} className="p-4 bg-gray-50 rounded-lg shadow-md">
                            <p className="text-lg font-medium text-gray-800">{activity.activity}</p>
                            <p className="text-sm text-gray-500">On {activity.date}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default CustomerRecent;
