import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Cars from "../Pages/Cars/Cars";
import Truck from "../Pages/Truck/Truck";
import Collectors from "../Pages/Collectors/Collectors";
import Blogs from "../Pages/Blogs/Blogs";
import AllVehicles from "../Pages/AllVehicles/AllVehicles";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {

            path:'/',
            element:<Home></Home>

        },
        {

            path:'/blogs',
            element:<Blogs></Blogs>

        },
        {
            path:'/login',
            element:<Login></Login>

        },
        {
            path:'/signup',
            element:<SignUp></SignUp>

        },
        {
            path:'/cars',
            element:<Cars></Cars>,
            loader: ()=>fetch('http://localhost:5000/cars')

        },
        {
            path:'/trucks',
            element:<Truck></Truck>,
            loader: ()=>fetch('http://localhost:5000/truck')

        },
        {
            path:'/collectors',
            element:<Collectors></Collectors>,
            loader: ()=>fetch('http://localhost:5000/collectors')

        },
        {
            path:'/allvehicles',
            element:<AllVehicles></AllVehicles>,
            loader: ()=>fetch('http://localhost:5000/allvehicles')

        },
        {
            path:'/allvehicles/:id',
            element:<ViewDetails></ViewDetails>,
            loader:({params})=>fetch(`http://localhost:5000/allvehicles/${params.id}`)
           


        }
    ]
    },
  ]);
  export default router;