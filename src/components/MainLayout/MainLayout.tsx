import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import usePageRefreshWarning from "../usePageRefreshWarning/UsePageRefreshWarning";
import { useEffect, useState } from "react";

const MainLayout = () => {
  usePageRefreshWarning();

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
    <div className="font-serif">
      <Navber />
      <Outlet />
      <Footer />

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
  );
};

export default MainLayout;