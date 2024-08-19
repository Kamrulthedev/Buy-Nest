import MainLayout from "@/components/MainLayout/MainLayout";
import AddProducts from "@/Dashboard/AddProducts/AddProducts";
import Dashboard from "@/Dashboard/Dashboard";
import AboutUs from "@/pages/About/AboutUs";
import Cards from "@/pages/Cards/Cards";
import Checkout from "@/pages/Checkout/Checkout";
import Success from "@/pages/Checkout/Success";
import ContactUs from "@/pages/Contact/ContactUs";
import Home from "@/pages/Home/Home";
import Products from "@/pages/Product/Products";
import ProductsDetails from "@/pages/Product/ProductsDetails";
import { createBrowserRouter } from "react-router-dom";

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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/product/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/products/",
        element: <Products />,
      },
      {
        path: "/addproducts/",
        element: <AddProducts />,
      },

      {
        path: "/contact",
        element: <ContactUs />,
      },

      {
        path: "/dashboard",
        element: <Dashboard />,
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
    ],
  },
]);
