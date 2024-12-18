import { useEffect, useRef, useState } from "react";
import {
    FaBars,
    FaTimes,
    FaHome,
    FaClipboardList,
    FaTag,
    FaHistory,
    FaUserCircle,
    FaBell,
    FaStar,
    FaChartLine,
} from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
import SearchBar from "@/components/AdminDashboard/SearchBar";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { logout } from "@/Redux/features/auth/authSlice";


const CustomerLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string>("Dashboard");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const user = useAppSelector((state) => state.auth.user);
    const dispacth = useAppDispatch();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMenuItemClick = (item: string) => {
        setSelectedItem(item);
        setIsSidebarOpen(false);
    };

    const handleLogOut = () => {
        dispacth(logout());
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

    // State for showing the button
    const [showButton, setShowButton] = useState(false);

    // Handle scroll event
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll-to-top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
                { name: "Dashboard", icon: <FaChartLine />, path: "/customer/customer-dashboard" },
                { name: "Orders", icon: <FaClipboardList />, path: "/orders" },
                { name: "Product Comparison", icon: <FaTag />, path: "/compare" },
                   { name: "Recent Products", icon: <FaHistory />, path: "/recent" },
                { name: "Account Settings", icon: <FaUserCircle />, path: "/settings" },
                { name: "Notifications", icon: <FaBell />, path: "/notifications" },
                { name: "Reviews & Ratings", icon: <FaStar />, path: "/reviews" },
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
                        className={`flex items-center text-red-500 hover:text-red-700 transition hover:bg-violet-600 rounded-lg p-2 
                ${selectedItem === "Logout" ? "bg-violet-600 text-white" : ""}`}
                        onClick={() => handleMenuItemClick("Logout")}
                    >
                        <CiLogout className="mr-3" />
                        <button onClick={handleLogOut}>Log Out</button>
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
                <h1 className="text-base md:text-xl lg:text-2xl font-bold lg:-ml-4">Dashboard</h1>
                <div>
                    <SearchBar />
                </div>
                {/* Profile Section */}
                <div className="relative" ref={dropdownRef}>
                    <img
                        src={user?.profilePhoto || "https://i.ibb.co/44vhj8G/image.png"}
                        alt="Profile"
                        className="lg:h-12 lg:w-12 w-10 h-10 rounded-full border border-gray-300 object-cover cursor-pointer"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-gray-100 shadow-lg rounded-md z-10 p-4 animate__animated animate__zoomIn">
                            <ul>
                                <li>
                                    <button
                                        className="w-full text-left px-4 py-2 text-black hover:bg-violet-400 hover:rounded-lg"
                                        onClick={() => (window.location.href = "/Profile/myProfile")}
                                    >
                                        My Profile
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="w-full text-left px-4 py-2 text-red-500 hover:text-red-700 hover:bg-violet-400 hover:rounded-lg"
                                        onClick={handleLogOut}
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
            <main className="flex-1 mt-[80px] sticky top-20 z-20 h-screen overflow-y-auto p-5" style={{position: "sticky"}}>
                <Outlet />
            </main>

            <div>
                {/* Scroll to Top Button */}
                {showButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-5 right-5 w-12 h-12 bg-violet-800 animate__animated animate__zoomIn text-white rounded-full text-xl flex items-center justify-center hover:bg-violet-500 transition"
                    >
                        ↑
                    </button>
                )}
            </div>
        </div>

    );
};
export default CustomerLayout;

