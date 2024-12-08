/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import { FiMenu, FiX } from 'react-icons/fi'; 

function Navbar() {
  const user = useState('')
  const handleLogout = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLanguageChange = (e: any) => setLanguage(e.target.value);

  return (
    <nav className="bg-slate-50 text-black font-serif">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Brand Section */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="rounded-full bg-green-400 h-10 w-10 flex items-center justify-center text-2xl">
            <span role="img" aria-label="logo" className='text-2xl font-bold'>B</span>
          </div>
          <h1 className="font-bold text-2xl">Buy Nest</h1>
        </Link>

        {/* Main Navigation */}
        <div className="hidden md:flex lg:gap-5">
          {['Discover', 'News Feed', 'About Us', 'Contact Us'].map((item) => (
            <Link
              key={item}
              to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
              className="lg:text-lg hover:bg-slate-100 p-2 hover:rounded-lg"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Side Section */}
        <div className="flex items-center gap-4">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-white text-black px-3 py-2 rounded hidden md:block"
          >
            <option value="EN">English</option>
            <option value="FR">Français</option>
            <option value="ES">Español</option>
          </select>

          {user ? (
            <div className="relative" ref={dropdownRef}>
              <img
                src={user.profileImg || "https://i.ibb.co/44vhj8G/image.png"}
                alt="Profile"
                className="h-12 w-12 rounded-full cursor-pointer border object-cover"
                onClick={toggleDropdown}
              />
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-purple-300 shadow-lg rounded-md z-10 p-4">
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
                          onClick={() => (window.location.href = '/user/dashborad')}
                        >
                          Dashboard
                        </button>
                      </li>
                    )}
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 text-red-700 hover:bg-purple-400 rounded-lg"
                        onClick={handleLogout}
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

      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          {['Discover', 'News Feed', 'About Us', 'Contact Us'].map((item) => (
            <Link
              key={item}
              to={`/${item.replace(/\s+/g, '').toLowerCase()}`}
              className="block text-xl py-2 hover:bg-slate-100 rounded-lg"
            >
              {item}
            </Link>
          ))}
          <select
            value={language}
            onChange={handleLanguageChange}
            className="bg-white text-black px-3 py-2 rounded w-full mt-2"
          >
            <option value="EN">English</option>
            <option value="FR">Français</option>
            <option value="ES">Español</option>
          </select>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
