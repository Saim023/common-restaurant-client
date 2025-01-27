import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "./../pages/Home/Home/Home";
import Menu from "./../pages/Menu/Menu/Menu";
import Order from "./../pages/Order/Order/Order";
import Items from "./../pages/Items/Items";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/Home/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/Shared/Secret/Secret";
import Cart from "../pages/Dashboard/Cart/Cart";
import Dashboard from "../Layouts/Dashboard";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../pages/Dashboard/AddItems/AddItems";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/items",
        element: <Items></Items>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },

      // Admin section
      {
        path: "add-items",
        element: (
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
