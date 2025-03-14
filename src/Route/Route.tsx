import MainLayout from "@/components/MainLayout/MainLayout";
import AboutUs from "@/pages/About/AboutUs";
import Success from "@/pages/Checkout/Success";
import ContactUs from "@/pages/Contact/ContactUs";
import NotFound from "@/pages/Error/NotFound";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Products from "@/pages/Product/Products";
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
import AllUsers from "@/pages/Admin/users/AllUsers";
import ShopManagement from "@/pages/Admin/ShopManagement/ShopManagement";
import VendorsManagement from "@/pages/Admin/VendorsManagement/VendorsManagement";
import CreateVendor from "@/pages/Admin/VendorsManagement/CreateVendor";
import VendorDetails from "@/pages/Admin/VendorsManagement/VendorDetails";
import ShopDetails from "@/pages/Admin/ShopManagement/ShopDetails";
import ProductsManagement from "@/pages/Admin/ProductsManagement/ProductsManagement";
import CustomerManagement from "@/pages/Admin/CustomerManagement/CustomerManagement";
import CreateProduct from "@/pages/Admin/ProductsManagement/CreateProduct";
import ProductsDetails from "@/pages/Admin/ProductsManagement/ProductsDetails";
import CustomerDetails from "@/pages/Admin/CustomerManagement/CustomerDetails";
import TransactionHistory from "@/pages/Admin/TransactionHistory/TransactionHistory";
import Details from "@/pages/Product/Details";
import Cards from "@/pages/Cards/Cards";
import CustomerOders from "@/pages/Customer/CustomerOrders/CustomerOders";
import CustomerRecent from "@/pages/Customer/CustomerRecent/CustomerRecent";
import ShopManagementWithVendor from "@/pages/Vendor/ShopManagementWithVendor/ShopManagementWithVendor";
import ProductManagementWithVendor from "@/pages/Vendor/ProductManagementWithVendor/ProductManagementWithVendor";
import CreateProductWithVendor from "@/pages/Vendor/ProductManagementWithVendor/CreateProductWithVendor";
import ProductDetailsWithVendor from "@/pages/Vendor/ProductManagementWithVendor/ProductDetailsWithVendor";
import ProductUpdateWithVendor from "@/pages/Vendor/ProductManagementWithVendor/ProductUpdateWithVendor";
import OrderHistoryWithVendor from "@/pages/Vendor/OrderHistoryWithVendor/OrderHistoryWithVendor";
import Checkout from "@/pages/Checkout/Checkout";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Details></Details>
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
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: "/cards/:id",
        element: <Cards></Cards>
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
      },
      {
        path: 'users-management',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'vendors-management',
        element: <VendorsManagement></VendorsManagement>
      },
      {
        path: "create-vendor",
        element: <CreateVendor></CreateVendor>
      },
      {
        path: `vendor-details/:id`,
        element: <VendorDetails></VendorDetails>
      },
      {
        path: 'shops-management',
        element: <ShopManagement></ShopManagement>
      },
      {
        path: 'shop-details/:id',
        element: <ShopDetails></ShopDetails>
      },
      {
        path: 'products-management',
        element: <ProductsManagement></ProductsManagement>
      },
      {
        path: 'product-details/:id',
        element: <ProductsDetails></ProductsDetails>
      },
      {
        path: "customers-management",
        element: <CustomerManagement></CustomerManagement>
      },
      {
        path: "customer-details/:id",
        element: <CustomerDetails></CustomerDetails>
      },
      {
        path: "create-product",
        element: <CreateProduct></CreateProduct>
      },
      {
        path: "transaction-history",
        element: <TransactionHistory></TransactionHistory>
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
      },
      {
        path: "shop-management",
        element: <ShopManagementWithVendor></ShopManagementWithVendor>
      },
      {
        path: "products-management",
        element: <ProductManagementWithVendor></ProductManagementWithVendor>
      },
      {
        path: "create-product-with-vendor",
        element: <CreateProductWithVendor></CreateProductWithVendor>
      },
      {
        path: "product-details/:id",
        element: <ProductDetailsWithVendor></ProductDetailsWithVendor>
      },
      {
        path: "product-update/:id",
        element: <ProductUpdateWithVendor></ProductUpdateWithVendor>
      },
      {
        path: "order-history-with-vendor",
        element: <OrderHistoryWithVendor></OrderHistoryWithVendor>
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
        path: "customer-dashboard",
        element: <CustomerDashboard></CustomerDashboard>
      },
      {
        path: "customer-orders",
        element: <CustomerOders></CustomerOders>
      },
      {
        path: 'customer-recent',
        element: <CustomerRecent></CustomerRecent>
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


