import Footer from "@/components/Footer/Footer";
import usePageRefreshWarning from "@/components/usePageRefreshWarning/UsePageRefreshWarning";
import { Outlet } from "react-router-dom";
import AdminNavber from "./AdminNavber";

const Admin = () => {
    usePageRefreshWarning();
    return (
      <div className="font-serif">
        <AdminNavber></AdminNavber>
        <Outlet />
        <Footer></Footer>
      </div>
    );
  };

export default Admin;