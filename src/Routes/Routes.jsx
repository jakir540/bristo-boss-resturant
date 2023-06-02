import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Sicrate from "../pages/shared/Sicrate/SIcrate";
import PrivateRotes from "./PrivateRotes";
import DashBord from "../layout/DashBord";
import MyCart from "../pages/DashBord/MyCart/MyCart";
import AddFood from "../pages/DashBord/AddFood/AddFood";
import AllUsers from "../pages/DashBord/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";

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
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sicrate",
        element: (
          <PrivateRotes>
            <Sicrate></Sicrate>
          </PrivateRotes>
        ),
      },
    ],
  },
  {
    path: "dashBord",
    element: (
      <PrivateRotes>
        <DashBord></DashBord>
      </PrivateRotes>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "addFood",
        element: (
          <AdminRoute>
            <AddFood></AddFood>
          </AdminRoute>
        ),
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
