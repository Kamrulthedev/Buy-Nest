/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DashboardGraph = ({ stats }: any) => {
    const chartData = {
        labels: ['Users', 'Products', 'Orders', 'Transactions'],
        datasets: [
            {
                label: 'Statistics',
                data: [
                    0,
                    0,
                    0,
                    0,
                ],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#f44336'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Platform Statistics',
            },
        },
    };
    return (
        <div className="min-h-screen sticky">
            <div className="max-w-7xl mx-auto p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
                <p className="text-gray-500 mb-6">Latest statistics overview of your platform.</p>

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10 p-3">
                    {/* Total Users */}
                    <div className="bg-violet-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats?.totalUsers.toLocaleString()}</p>
                    </div>
                    {/* Total Vendors */}
                    <div className="bg-violet-100  p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Vendors</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats?.totalLikes.toLocaleString()}</p>
                    </div>
                    {/* Total Customers */}
                    <div className="bg-violet-100  p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Customers</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats?.totalComments.toLocaleString()}</p>
                    </div>
                    {/* Total Products */}
                    <div className="bg-violet-100  p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">Total Products</h2>
                        <p className="text-4xl font-bold text-gray-800 my-4">{stats?.totalPosts.toLocaleString()}</p>
                    </div>


                </div>

                {/* Bar Graph */}
                <div className="bg-violet-100  p-6 rounded-lg shadow-md mb-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Platform Statistics Overview</h2>
                    <div>
                        <Bar data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardGraph;