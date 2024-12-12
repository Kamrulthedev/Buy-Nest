import MainLayout from "@/components/MainLayout/MainLayout";
import AboutUs from "@/pages/About/AboutUs";
import Cards from "@/pages/Cards/Cards";
import Checkout from "@/pages/Checkout/Checkout";
import Success from "@/pages/Checkout/Success";
import ContactUs from "@/pages/Contact/ContactUs";
import NotFound from "@/pages/Error/NotFound";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Products from "@/pages/Product/Products";
import ProductsDetails from "@/pages/Product/ProductsDetails";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "@/pages/Admin/AdminNavber";
import Dashboard from "@/pages/Admin/Dashboard/Dashboard";
import Profile from "@/pages/Profile/Profile";
import MyProfile from "@/pages/Profile/MyProfile";
import WishlistPage from "@/pages/Wishlist/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/cards",
        element: <Cards />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage></WishlistPage>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>
  },
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children : [
      {
        path: 'adminDashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  },
  {
    path: "/Profile",
    element: <Profile></Profile>,
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>
      }
    ]
  }
]);
