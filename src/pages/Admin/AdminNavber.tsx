import { useEffect, useRef, useState } from "react";
import {
    FaBars,
    FaTimes,
    FaChartLine,
    FaHome,
    FaProductHunt,
    FaClipboardList,
    FaUsers,
    FaMoneyBillWave,
    FaCogs,
    FaStore,
    FaListAlt,
    FaChartPie,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "@/components/AdminDashboard/SearchBar";

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>("Dashboard");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const user = {
        role: "ADMIN",
        profileImg: "https://i.ibb.co/1zF6LNG/PXL-20241028-1123399178-PORTRAIT.jpg",
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuItemClick = (item: string) => {
        setSelectedItem(item);
        setIsSidebarOpen(false);
    };

    const handleLogout = () => {
        if (window.confirm("Are you sure you want to log out?")) {
            window.location.href = "/login";
        }
    };

    // Profile Dropdown Toggle
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsDropdownOpen(false);
        }
    };

    return (
<div className="relative font-serif min-h-screen flex w-full text-black bg-gray-50 animate__animated animate__fadeInDown">
    {/* Sidebar */}
    <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-200 mt-20 p-6 z-40 transform 
        ${isSidebarOpen ? "translate-x-0 animate__animated animate__fadeInDown" : "-translate-x-full "} 
        md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
        <h2 className="text-lg font-semibold mb-4">Menu</h2>
        <ul className="space-y-2">
            {[ 
                { name: "Home", icon: <FaHome />, path: "/" },
                { name: "Dashboard", icon: <FaChartLine />, path: "/admin/adminDashboard" },
                { name: "User Management", icon: <FaUsers />, path: "/admin/customers" },
                { name: "Shop Management", icon: <FaStore />, path: "/admin/shops" },
                { name: "Category Management", icon: <FaListAlt />, path: "/admin/categories" },
                { name: "Product Management", icon: <FaProductHunt />, path: "/admin/products" },
                { name: "Customer Management", icon: <FaUsers />, path: "/admin/customers" },
                { name: "Order Monitoring", icon: <FaClipboardList />, path: "/admin/orders" },
                { name: "Transaction History", icon: <FaMoneyBillWave />, path: "/admin/payments" },
                { name: "Reports & Analytics", icon: <FaChartPie />, path: "/admin/reports" },
                { name: "Settings", icon: <FaCogs />, path: "/admin/settings" },
            ].map((menu) => (
                <Link className="text-sm" to={menu.path} key={menu.name}>
                    <li
                        className={`flex items-center text-gray-600 hover:text-black transition mb-1 hover:bg-violet-600 rounded-lg p-2 
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

    {/* Top Navbar */}
    <nav className="w-full px-4 md:px-10 py-2 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-gray-200 transition-all duration-300">
        <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <h1 className="text-2xl font-bold lg:-ml-4">Admin Panel</h1>
        <div>
            <SearchBar />
        </div>
        {/* Profile Section */}
        <div className="relative" ref={dropdownRef}>
            <img
                src={user?.profileImg || "https://i.ibb.co/44vhj8G/image.png"}
                alt="Profile"
                className="h-12 w-12 rounded-full border border-gray-300 object-cover cursor-pointer"
                onClick={toggleDropdown}
            />
            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-100 shadow-lg rounded-md z-10 p-4 animate__animated animate__zoomIn">
                    <ul>
                        <li>
                            <button
                                className="w-full text-left px-4 py-2 text-black hover:bg-violet-400 hover:rounded-lg"
                                onClick={() => (window.location.href = "/myProfile/myPosts")}
                            >
                                My Profile
                            </button>
                        </li>
                        <li>
                            <button
                                className="w-full text-left px-4 py-2 text-black hover:bg-violet-400 hover:rounded-lg"
                                onClick={handleLogout}
                            >
                                Log Out
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    </nav>

    {/* Main Content Area */}
    <main className="flex-1 mt-24 p-6 sticky top-20 z-20 overflow-y-auto">
        <Outlet />
    </main>
</div>

    );
};

export default AdminLayout;
