import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Register from "../pages/Login or Register/Register";
import Login from "../pages/Login or Register/Login";
import Secret from "../pages/shared/Secret";
import PrivateRoute from "./PrivateRoute";

// -----------------------------------------
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: 'menu',
            element: <Menu></Menu>,
        },
        {
            path: '/order/:category',
            element: <Order></Order>,
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
      ]
    },
    // -------------------------------------dashboard-------------------------------------//
    {
      path: '/dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>,
        },


        // admin
        {
          path: '/dashboard/users',
          element: <AllUsers></AllUsers>
        }
      ]
    }
  ]);