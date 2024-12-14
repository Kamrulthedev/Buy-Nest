import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Notification from "./Notification";
import Wishlist from "./Wishlist";
import NavberCart from "./NavberCart";
import NavberSearchBar from "./NavberSearchBar";
import NavberBrandLink from "./NavberBrandLink";
import NavigationLinks from "./NavigationLinks";
import MobaileNaber from "./MobaileNaber";
import { FaRegUser } from "react-icons/fa";
import { useAppSelector } from "@/Redux/hooks";

function Navbar() {
  const user = useAppSelector((state) => state.auth.user);

console.log(user)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${isScrolled ? "fixed top-0 left-0 right-0 shadow-lg bg-white animate__animated animate__fadeInDown" : ""
        } z-50 transition-all duration-300 font-serif`}
    >
      <div className="flex justify-between items-center px-4 py-3">
        {/* Brand Section */}
        <NavberBrandLink></NavberBrandLink>
        {/* Search Bar */}
        <NavberSearchBar></NavberSearchBar>
        {/* Navigation Links */}
        <NavigationLinks></NavigationLinks>

        {/* Right Side Section */}
        <div className="flex items-center gap-3 lg:gap-6">
          {/* Wishlist */}
          <Wishlist></Wishlist>
          {/* Notifications Dropdown */}
          <Notification></Notification>
          {/* Cart */}
          <NavberCart></NavberCart>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <img
                src={user?.profilePhoto || "https://i.ibb.co/44vhj8G/image.png"}
                alt="Profile"
                className="lg:h-12 lg:w-12 w-10 h-10 rounded-full cursor-pointer border object-cover"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-slate-100 shadow-lg rounded-md z-10 p-4 text-lg animate__animated animate__zoomIn">
                  <ul>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white rounded-lg"
                        onClick={() =>
                          (window.location.href = "/Profile/myProfile")
                        }
                      >
                        My Profile
                      </button>
                    </li>
                    {user?.role === "ADMIN" && (
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white rounded-lg"
                          onClick={() =>
                            (window.location.href = "/admin/adminDashboard")
                          }
                        >
                          Admin Dashboard
                        </button>
                      </li>
                    )}
                    {user?.role === "VENDOR" && (
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white rounded-lg"
                          onClick={() =>
                            (window.location.href = "/vendor/vendorDashboard")
                          }
                        >
                          Vendor Dashboard
                        </button>
                      </li>
                    )}
                    {user?.role === "CUSTOMER" && (
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white rounded-lg"
                          onClick={() =>
                            (window.location.href = "/customer/customerDashboard")
                          }
                        >
                          My Dashboard
                        </button>
                      </li>
                    )}
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 text-red-700 hover:bg-gray-600 hover:text-red-500 rounded-lg"
                        onClick={() => console.log("Logged out")}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-gray-600 hover:text-violet-500 flex gap-1 items-center lg:mr-3">
              <FaRegUser className="text-[20px]" />
                <span className="text-base mt-[2px]"> Login</span>
            </Link>
          )}

          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobaileNaber></MobaileNaber>
      )}
    </nav>
  );
}

export default Navbar;
