import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking";
import Home from "../components/Home";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Signup from "../components/Signup";
import Main from "../Layout/Main";
import Privatrout from "./Privatrout/Privatrout";

export const router =createBrowserRouter([
    {path:'/', element: <Main></Main> , children:[
        {path:'/', element: <Home></Home>},
        {path:'/home', element: <Home></Home>},
        {path:'book', element: <Privatrout><Booking></Booking></Privatrout>},
        {path:'/profile', element: <Privatrout><Profile></Profile></Privatrout>},
        {path:'/login', element: <Login></Login>},
        {path:'/signup', element: <Signup></Signup>},
    ]}
])