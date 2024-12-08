import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";

function Navbar() {
  const user = {
    role: "ADMIN",
    profileImg:
      "https://i.ibb.co/1zF6LNG/PXL-20241028-1123399178-PORTRAIT.jpg",
  };
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
      className={`${isScrolled ? "fixed top-0 left-0 right-0 shadow-lg bg-white" : ""
        } z-50 transition-all duration-300 font-serif`}
    >
      <div className="flex justify-between items-center px-4 py-3">
        {/* Brand Section */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-full bg-violet-500 text-white h-10 w-10 flex items-center justify-center text-2xl">
            <span className="text-2xl font-bold animate__animated animate__zoomIn">B</span>
          </div>
          <h1 className="font-bold text-2xl animate__animated animate__zoomIn">Buy Nest</h1>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center w-1/3 mx-4 bg-white relative">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none bg-white"
          />
          <button className="relative -ml-16 px-4 rounded-r-lg text-blue text-gray-500">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex lg:gap-5 font-serif">
          <Link className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg" to='/'>Home</Link>
          <Link className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg" to='/shop'>Shop</Link>
          <Link className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg" to='/shop'>About</Link>
          <Link className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg" to='/shop'>Contact</Link>
        </div>

        {/* Right Side Section */}
        <div className="flex items-center gap-6">
          <Link
            to="/cart"
            className="text-black hover:text-violet-500 flex items-center gap-1"
          >
            <FiShoppingCart size={24} />
            <span className="hidden md:inline">Cart</span>
          </Link>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <img
                src={user?.profileImg || "https://i.ibb.co/44vhj8G/image.png"}
                alt="Profile"
                className="h-12 w-12 rounded-full cursor-pointer border object-cover"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-slate-100 shadow-lg rounded-md z-10 p-4 text-lg animate__animated animate__zoomIn">
                  <ul>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white rounded-lg"
                        onClick={() =>
                          (window.location.href = "/myProfile/myPosts")
                        }
                      >
                        My Profile
                      </button>
                    </li>
                    {user.role === "ADMIN" && (
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-600 hover:text-white  rounded-lg"
                          onClick={() =>
                            (window.location.href = "/admin/adminDashboard")
                          }
                        >
                          Admin Dashboard
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
              className="bg-white text-black shadow-sm text-[16px] border px-4 py-2 rounded"
            >
              Sign In
            </Link>
          )}

          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <div className="flex items-center mb-4 relative">
            <input
              type="text"
              placeholder="Search products"
              className="w-full px-4 py-2 border bg-white rounded-l-lg focus:outline-none"
            />
            <button className="relative -ml-14  px-4 rounded-r-lg text-green-500">
              <FiSearch size={20} />
            </button>
          </div>
          <Link className="block text-xl py-2 hover:bg-slate-100 rounded-lg" to='/'>Home</Link>
          <Link className="block text-xl py-2 hover:bg-slate-100 rounded-lg" to='/shop'>Shop</Link>
          <Link className="block text-xl py-2 hover:bg-slate-100 rounded-lg" to='/shop'>About</Link>
          <Link className="block text-xl py-2 hover:bg-slate-100 rounded-lg" to='/shop'>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
