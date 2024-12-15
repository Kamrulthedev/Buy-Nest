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
import VendorLayout from "@/pages/Vendor/VendorLayout";
import VendorDashborad from "@/pages/Vendor/VendorDashborad/VendorDashborad";
import CustomerLayout from "@/pages/Customer/CustomerLayout";
import CustomerDashboard from "@/pages/Customer/Dashboard/CustomerDashboard";
import ProtectedRoute from "@/components/MainLayout/ProtectedRoute";

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
        element: (
          <ProtectedRoute allowedRoles={["CUSTOMER", "VENDOR", "ADMIN"]}>
            <WishlistPage></WishlistPage>
          </ProtectedRoute>
        ),
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
    element: (
      <ProtectedRoute allowedRoles={["ADMIN"]}>
        <AdminLayout></AdminLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'adminDashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
  {
    path: "/vendor",
    element: (
      <ProtectedRoute allowedRoles={["VENDOR"]}>
        <VendorLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'vendorDashboard',
        element: <VendorDashborad></VendorDashborad>
      }
    ]
  },
  {
    path: "/customer",
    element: (
      <ProtectedRoute allowedRoles={["CUSTOMER"]}>
        <CustomerLayout></CustomerLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "customerDashboard",
        element: <CustomerDashboard></CustomerDashboard>
      }
    ]
  },
  {
    path: "/Profile",
    element: (
      <ProtectedRoute allowedRoles={["CUSTOMER", "VENDOR", "ADMIN"]}>
        <Profile />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>
      }
    ]
  }
]);


