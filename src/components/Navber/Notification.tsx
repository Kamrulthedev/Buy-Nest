import { Link } from "react-router-dom";
import { FiBell } from "react-icons/fi";


const Notification = () => {
    return (
        <div className="relative group mt-2">
        <button className="relative text-black hover:text-violet-500">
          <FiBell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
        </button>
        <div className="absolute top-full right-0 hidden group-hover:block bg-white shadow-lg rounded-lg w-64 mt-2 z-10 animate__animated animate__fadeInDown">
          <ul className="p-4">
            <li>
              <Link
                className="block px-4 py-2 hover:bg-slate-100 rounded-lg text-gray-700"
                to="/notifications/1"
              >
                Notification 1
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-slate-100 rounded-lg text-gray-700"
                to="/notifications/2"
              >
                Notification 2
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-slate-100 rounded-lg text-gray-700"
                to="/notifications/3"
              >
                Notification 3
              </Link>
            </li>
            <li>
              <Link
                className="block px-4 py-2 hover:bg-slate-100 rounded-lg text-gray-700"
                to="/notifications/all"
              >
                View All
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Notification;