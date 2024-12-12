import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navber/Navber";
import { Outlet } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Profile;