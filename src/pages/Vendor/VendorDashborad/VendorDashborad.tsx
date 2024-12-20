/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useGetByIdWithVendorShopsQuery } from "@/Redux/features/shops/shopsApi";
import { useAppSelector } from "@/Redux/hooks";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const VendorDashboard = () => {
    const user = useAppSelector((state) => state.auth.user);
    const id = user?.userId;

    const { data } = useGetByIdWithVendorShopsQuery(id as string);
    const ShopData = data?.data;


    const [chartData] = useState({
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Weekly Sales",
                data: [50, 75, 150, 100, 200, 175, 300],
                borderColor: "rgba(106, 90, 205, 1)",
                backgroundColor: "rgba(106, 90, 205, 0.2)",
                tension: 0.3,
                borderWidth: 2,
                pointBackgroundColor: "rgba(106, 90, 205, 1)",
            },
        ],
    });

    const [chartOptions]: any = useState({
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: "Sales Data (Past Week)",
                color: "rgba(75, 85, 99, 1)",
                font: { size: 18 },
            },
            legend: {
                display: true,
                position: "top",
                labels: {
                    color: "rgba(75, 85, 99, 1)",
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "rgba(75, 85, 99, 1)",
                },
                grid: {
                    color: "rgba(229, 231, 235, 1)",
                },
            },
            y: {
                ticks: {
                    color: "rgba(75, 85, 99, 1)",
                },
                grid: {
                    color: "rgba(229, 231, 235, 1)",
                },
            },
        },
    });



    return (
        <div className="p-6 bg-white text-gray-800 animate__animated animate__fadeInDown">
            <h1 className="text-3xl font-semibold text-violet-600 mb-6 animate__animated animate__fadeInDown">
                Welcome to {ShopData?.name}'s Dashboard
            </h1>

            {/* Dashboard Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate__animated animate__fadeInDown">
                {/* Total Products */}
                <div className="bg-gray-100 text-center p-6 rounded-lg shadow-md animate__animated animate__fadeInDown">
                    <h2 className="text-xl font-semibold text-violet-500">Total Products</h2>
                    <p className="text-4xl font-bold text-gray-800">{ShopData?.products?.length}</p>
                </div>

                {/* Total Orders */}
                <div className="bg-gray-100 text-center p-6 rounded-lg shadow-md animate__animated animate__fadeInDown">
                    <h2 className="text-xl font-semibold text-violet-500">Total Orders</h2>
                    <p className="text-4xl font-bold text-gray-800">{ShopData?.orders?.length}</p>
                </div>

                {/* Total Followers */}
                <div className="bg-gray-100 text-center p-6 rounded-lg shadow-md animate__animated animate__fadeInDown">
                    <h2 className="text-xl font-semibold text-violet-500">Total Followers</h2>
                    <p className="text-4xl font-bold text-gray-800">{ShopData?.followers?.length}</p>
                </div>

                {/* Average Rating */}
                <div className="bg-gray-100 text-center p-6 rounded-lg shadow-md animate__animated animate__fadeInDown">
                    <h2 className="text-xl font-semibold text-violet-500">Average Rating</h2>
                    <p className="text-4xl font-bold text-gray-800">{ShopData?.products?.length}.5</p>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md animate__animated animate__fadeInDown">
                <h2 className="text-2xl font-semibold text-violet-500 mb-4">Sales Overview</h2>
                <Line data={chartData} options={chartOptions} />
            </div>
        </div>
    );
};

export default VendorDashboard;
