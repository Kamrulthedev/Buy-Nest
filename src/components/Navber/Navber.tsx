import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const user = { role: "ADMIN" , profileImg : "https://i.ibb.co.com/1zF6LNG/PXL-20241028-1123399178-PORTRAIT.jpg"};
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLanguage(e.target.value);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-blue-100 text-black font-serif">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Brand Section */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-full bg-green-400 h-10 w-10 flex items-center justify-center text-2xl">
            <span role="img" aria-label="logo" className="text-2xl font-bold">B</span>
          </div>
          <h1 className="font-bold text-2xl">Buy Nest</h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex lg:gap-5">
          <Link to="/" className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg">Home</Link>
          <Link to="/" className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg">Shop Now</Link>
          <Link to="/" className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg">About Us</Link>
          <Link to="/" className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg">Contact Us</Link>
        </div>

        {/* Right Side Section */}
        <div className="flex items-center gap-4">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-white text-black px-3 py-2 rounded hidden md:block"
          >
            <option value="EN">English</option>
            <option value="FR">Bangla</option>
            <option value="ES">Español</option>
          </select>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <img 
                src={user?.profileImg || "https://i.ibb.co/44vhj8G/image.png"}
                alt="Profile"
                className="h-12 w-12 rounded-full cursor-pointer border object-cover"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 -mr-4 mt-2 w-60 bg-blue-100 shadow-lg rounded-b-md z-10 p-4 h-64 text-lg">
                  <ul>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-purple-400 rounded-lg"
                        onClick={() => (window.location.href = '/myProfile/myPosts')}
                      >
                        My Profile
                      </button>
                    </li>
                    {user.role === 'ADMIN' && (
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-purple-400 rounded-lg"
                          onClick={() => (window.location.href = '/admin/adminDeshborad')}
                        >
                          Admin Dashboard
                        </button>
                      </li>
                    )}
                    {user.role === 'USER' && (
                      <li>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-purple-400 rounded-lg"
                          onClick={() => (window.location.href = '/user/adminDeshborad')}
                        >
                          Dashboard
                        </button>
                      </li>
                    )}
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 text-red-700 hover:bg-purple-400 rounded-lg"
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
          <Link to="/" className="block text-xl py-2 hover:bg-slate-100 rounded-lg">Home</Link>
          <Link to="/" className="block text-xl py-2 hover:bg-slate-100 rounded-lg">Shop Now</Link>
          <Link to="/" className="block text-xl py-2 hover:bg-slate-100 rounded-lg">About Us</Link>
          <Link to="/" className="block text-xl py-2 hover:bg-slate-100 rounded-lg">Contact Us</Link>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-white text-black px-3 py-2 rounded w-full mt-2"
          >
            <option value="EN">English</option>
            <option value="FR">Bangla</option>
            <option value="ES">Español</option>
          </select>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
