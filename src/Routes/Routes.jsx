import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import InstructorsSchool from "../pages/InstructorsSchool/InstructorsSchool";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../pages/MyClass/MyClass";
import MyEnrollClass from "../pages/dashboard/MyEnrollClass/MyEnrollClass";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'instructors',
        element: <InstructorsSchool></InstructorsSchool>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'myClass',
        element: <MyClass></MyClass>
      },
      {
        path: 'enrolled',
        element: <MyEnrollClass></MyEnrollClass>
      }
    ]
  }
]);