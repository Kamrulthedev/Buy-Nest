import { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaChartLine,
    FaUser,
    FaCalendarAlt,
    FaHome,
    FaMoneyCheckAlt,
    FaCog,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>("Dashboard");

    const user = {
        role: "ADMIN",
        profileImg: "https://i.ibb.co/1zF6LNG/PXL-20241028-1123399178-PORTRAIT.jpg",
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuItemClick = (item: string) => {
        setSelectedItem(item);
        setIsSidebarOpen(false); // Close sidebar on mobile
    };

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            window.location.href = "/login";
        }
    };

    return (
        <div className="relative font-serif min-h-screen flex w-full text-black bg-gray-50">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-gray-200  mt-20  p-6 z-40 transform 
                ${isSidebarOpen ? "translate-x-0 animate__animated animate__fadeInDown" : "-translate-x-full "} 
                md:relative md:translate-x-0 transition-transform duration-300 ease-in-out `}
            >
                <h2 className="text-lg font-semibold mb-4">Menu</h2>
                <ul className="space-y-2 ">
                    {[
                        { name: "Home", icon: <FaHome />, path: "/" },
                        { name: "Dashboard", icon: <FaChartLine />, path: "/admin/adminDashboard" },
                        { name: "Manage Users", icon: <FaUser />, path: "/admin/users" },
                        { name: "Manage Posts", icon: <FaCalendarAlt />, path: "/admin/posts" },
                        { name: "Verified Users", icon: <MdVerified />, path: "/admin/verifiedUsers" },
                        { name: "Payments", icon: <FaMoneyCheckAlt />, path: "/admin/payments" },
                        { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
                    ].map((menu) => (
                        <Link to={menu.path} key={menu.name}>
                            <li
                                className={`flex items-center text-gray-600 hover:text-black transition hover:bg-violet-600 rounded-lg p-2 
                                ${selectedItem === menu.name ? "bg-violet-600 text-white" : ""}`}
                                onClick={() => handleMenuItemClick(menu.name)}
                            >
                                {menu.icon}
                                <span className="ml-3">{menu.name}</span>
                            </li>
                        </Link>
                    ))}

                    {/* Logout */}
                    <li
                        className={`flex items-center text-gray-600 hover:text-black transition hover:bg-violet-600 rounded-lg p-2 
                        ${selectedItem === "Logout" ? "bg-violet-600 text-white" : ""}`}
                        onClick={() => handleMenuItemClick("Logout")}
                    >
                        <CiLogout className="mr-3" />
                        <button onClick={handleLogout}>Log Out</button>
                    </li>
                </ul>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}
            {/* Top Navber */}
            <nav
                className={`w-full  px-4 md:px-10 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-gray-200 transition-transform duration-300 ${isSidebarOpen ? "translate-y-0 animate__animated animate__fadeInDown" : "translate-y-0 "
                    }`}
            >
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleSidebar}
                    aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                >
                    {isSidebarOpen ? <FaTimes /> : <FaBars />}
                </button>

                <h1 className="text-xl font-bold">Admin Panel</h1>

                <div className="flex items-center space-x-4">
                    {/* Profile Image */}
                    <img
                        src={user?.profileImg || "https://i.ibb.co.com/44vhj8G/image.png"}
                        alt="Profile"
                        className="h-12 w-12 rounded-full border border-gray-300 object-cover cursor-pointer"
                    />
                </div>
            </nav>


            {/* Main Content Area */}
            <main className="flex-1 mt-24 p-6 ">
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AdminLayout;
