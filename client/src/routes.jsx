import { lazy } from "react";
import PersonalCatalogPage from "./pages/catalog/PersonalCatalogPage";
import SellerCatalogPage from "./pages/catalog/SellerCatalogPage";
import CreateProductPage from "./pages/product/CreateProductPage";
import EditProductPage from "./pages/product/EditProductPage";
import HelpPage from "./pages/HelpPage";
const Dashboard = lazy(() => import("./pages/layout/Dashboard"));
const CategoryProductsPage = lazy(() =>
  import("./pages/product/CategoryProductsPage")
);
const ProductDetailsPage = lazy(() =>
  import("./pages/product/ProductDetailsPage")
);

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const ConfirmResetPasswordCode = lazy(() =>
  import("./pages/auth/ConfirmResetPasswordCode")
);
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));

export const publicRoutes = [
  {
    path: "/",
    element: <Home />,
    title: "Auctions",
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    title: "Dashboard",
  },
  {
    path: "/catalog",
    element: <PersonalCatalogPage />,
    title: "Your Catalog",
  },
  {
    path: "/help",
    element: <HelpPage />,
    title: "Help",
  },
  {
    path: "/seller/:username",
    element: <SellerCatalogPage />,
    title: "Seller's Catalog",
  },
  {
    path: "/login",
    element: <Login />,
    title: "Login",
  },
  {
    path: "/register",
    element: <Register />,
    title: "User Registration",
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    title: "Forgot password",
  },
  {
    path: "/confirm-reset-password-code",
    element: <ConfirmResetPasswordCode />,
    title: "Confirm reset password code",
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
    title: "Reset password",
  },
  {
    path: "/product/:slug/:id",
    element: <ProductDetailsPage />,
    title: "Product Details",
  },
  {
    path: "/product/create",
    element: <CreateProductPage />,
    title: "Create Product",
  },
  {
    path: "/product/edit/:slug/:id",
    element: <EditProductPage />,
    title: "Edit Product",
  },
  {
    path: "/category/:slug/:id",
    element: <CategoryProductsPage />,
    title: "Category",
  },
];
