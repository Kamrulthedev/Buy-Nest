import { Outlet } from "react-router-dom";
import Navber from "../Navber/Navber";
import Footer from "../Footer/Footer";
import usePageRefreshWarning from "../usePageRefreshWarning/UsePageRefreshWarning";

const MainLayout = () => {
  usePageRefreshWarning();
  return (
    <div>
      <Navber></Navber>

      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
