import Footer from "@/components/Footer/Footer";
import usePageRefreshWarning from "@/components/usePageRefreshWarning/UsePageRefreshWarning";
import { Outlet } from "react-router-dom";

const Admin = () => {
    usePageRefreshWarning();
    return (
      <div className="font-serif">
        {/* <Navber></Navber> */}
        <Outlet />
        <Footer></Footer>
      </div>
    );
  };

export default Admin;