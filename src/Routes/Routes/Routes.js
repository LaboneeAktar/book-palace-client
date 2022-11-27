import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import BooksByCategory from "../../Pages/BooksByCategory/BooksByCategory";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Welcome from "../../Pages/Dashboard/Welcome/Welcome";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/categories/:category",
        element: (
          <PrivateRoute>
            <BooksByCategory></BooksByCategory>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_API_URL}/categories/${params.category}`
          ),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <Welcome></Welcome>,
      },

      //Admin Routes
      {
        path: "/dashboard/allseller",
        element: <AllSeller></AllSeller>,
      },
      {
        path: "/dashboard/allbuyer",
        element: <AllBuyers></AllBuyers>,
      },

      // Seller Routes
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProducts></MyProducts>,
      },

      //Buyer Routes
      {
        path: "/dashboard/myorders",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);

export default routes;
