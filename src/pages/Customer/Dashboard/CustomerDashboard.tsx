/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CustomerDashboard = () => {
    const [orders, setOrders] = useState<any[]>([]);
    const [followers, setFollowers] = useState<number>(0);
    const [followerData, setFollowerData] = useState<number[]>([]);

    useEffect(() => {
        setOrders([
            { id: 1, product: "Product 1", status: "Delivered" },
            { id: 2, product: "Product 2", status: "Pending" },
            { id: 3, product: "Product 3", status: "Delivered" },
        ]);
        setFollowers(250); 
        setFollowerData([200, 210, 220, 250, 260, 280, 300]);
    }, []);

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Followers Growth",
                data: followerData,
                borderColor: "#8e44ad", 
                backgroundColor: "rgba(142, 68, 173, 0.2)", 
                tension: 0.4, 
                fill: true, 
            },
        ],
    };

    // Chart.js options with correct typing
    const chartOptions: any = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Followers Growth Over Time",
                color: "#2c3e50", 
            },
            tooltip: {
                mode: "index",
                intersect: false,
                backgroundColor: "#2c3e50", 
                titleColor: "#fff", 
                bodyColor: "#ecf0f1", 
            },
        },
    };

    return (
        <div className="p-6 bg-white text-gray-800 animate__animated animate__fadeInDown">
            <h1 className="text-3xl font-semibold text-violet-600 mb-6 animate__animated animate__fadeInDown">Welcome to Your Dashboard</h1>

            {/* Customer Orders Section */}
            <section className="mb-8 animate__animated animate__fadeInDown">
                <h2 className="text-2xl font-semibold text-violet-500 mb-4">Your Orders</h2>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead>
                        <tr className="bg-gray-100 text-violet-600 animate__animated animate__fadeInDown" >
                            <th className="p-3 border">Order ID</th>
                            <th className="p-3 border">Product</th>
                            <th className="p-3 border">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50 animate__animated animate__fadeInDown">
                                <td className="p-3 border">{order.id}</td>
                                <td className="p-3 border">{order.product}</td>
                                <td className="p-3 border">{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            {/* Followers Section with Graph */}
            <section className="animate__animated animate__fadeInDown">
                <h2 className="text-2xl font-semibold text-violet-500 mb-4">Your Followers</h2>
                <div className="w-full h-96 bg-white border border-gray-300 rounded-md p-4 shadow-lg">
                    <Line data={chartData} options={chartOptions} />
                </div>
                <div className="mt-4 text-center text-gray-700">Current Followers: {followers}</div>
            </section>
        </div>
    );
};

export default CustomerDashboard;
