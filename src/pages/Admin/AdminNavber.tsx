import NavberBrandLink from "@/components/Navber/NavberBrandLink";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const AdminNavber = () => {
    const [isOpen, setIsOpen] = useState(false);
    //   const [user, setUser] = useState<IUser | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);


    const user = {
        role: "ADMIN",
        profileImg:
            "https://i.ibb.co/1zF6LNG/PXL-20241028-1123399178-PORTRAIT.jpg",
    };

    // const user = false


    //   const handleUser = async () => {
    //     const user = await getCurrentUser();
    //     setUser(user);
    //   };

    //   useEffect(() => {
    //     handleUser();
    //   }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isDropdownOpen]);

      // Scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <nav
        className={`${isScrolled ? "fixed top-0 left-0 right-0 shadow-lg bg-white animate__animated animate__fadeInDown" : ""
          } z-50 transition-all duration-300 font-serif shadow`}
      >
            <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-10">
                {/* Logo */}
                <NavberBrandLink></NavberBrandLink>
                {/* Search Bar - hidden on small screens */}
                <div className="hidden md:flex flex-grow justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full md:w-96 lg:w-[500px] bg-white px-4 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                </div>

                {/* Profile Image */}
                <div className="flex items-center space-x-4">
                    <div className="relative" ref={dropdownRef}>
                        {/* Profile Image */}
                        <img
                            src={user?.profileImg || "https://i.ibb.co.com/44vhj8G/image.png"}
                            alt="Profile"
                            className="h-12 w-12 rounded-full cursor-pointer border-1 border-black object-cover animate__animated animate__fadeInDown"
                            onClick={toggleDropdown}
                        />

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-gray-100 shadow-lg rounded-md z-10 p-4 animate__animated animate__fadeInDown">
                                <ul>
                                    <li>
                                        <button
                                            className="w-full text-left px-4 py-2 text-black hover:bg-gray-400 hover:rounded-lg"
                                            onClick={() =>
                                                (window.location.href = "/myProfile/myPosts")
                                            }
                                        >
                                            My Profile
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl focus:outline-none animate__animated animate__fadeInDown"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white text-black px-4 py-2 space-y-4 animate__animated animate__fadeInDown">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border border-gray-300 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            )}
        </nav>
    );
};

export default AdminNavber;


// function getCurrentUser() {
//     throw new Error("Function not implemented.");
// }

