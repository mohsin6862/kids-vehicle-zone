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
import AddVehicles from "../Pages/AddVehicles/AddVehicles";
import MyVehicles from "../Pages/MyVehicles/MyVehicles";
import UpdateVehicle from "../Pages/UpdateVehicle/UpdateVehicle";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllToys from "../Pages/AllToys/AllToys";
import View from "../Pages/ViewAllToysDetails/View";
import CarDetails from "../Pages/Cars/CarDetails";
import CollectorDetails from "../Pages/Collectors/CollectorDetails";
import TruckDetails from "../Pages/Truck/TruckDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFoundPage></NotFoundPage>,
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
            path:'/addvehicles',
            element:<AddVehicles></AddVehicles>

        },
        {
            path:'/myvehicles',
            element:<MyVehicles></MyVehicles>
        },
        {
            path:'/updatevehicle/:id',
            element:<UpdateVehicle></UpdateVehicle>,
            loader: ({params})=>fetch(`https://toy-shop-server-umber.vercel.app/addvehicle/${params.id}`)

        },
        {
            path:'/alltoys',
            element:<AllToys></AllToys>,
            loader: ()=>fetch('https://toy-shop-server-umber.vercel.app/addvehicle')

        },
        {
            path:'/view/:id',
            element:<PrivateRoute><View></View></PrivateRoute>,
            loader: ({params})=>fetch(`https://toy-shop-server-umber.vercel.app/addvehicle/${params.id}`)

        },
        {
            path:'/cars',
            element:<Cars></Cars>,
            loader: ()=>fetch('https://toy-shop-server-umber.vercel.app/cars')

        },
        {
            path:'/cardetails/:id',
            element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://toy-shop-server-umber.vercel.app/cars/${params.id}`)

        },
        {
            path:'/trucks',
            element:<Truck></Truck>,
            loader: ()=>fetch('https://toy-shop-server-umber.vercel.app/truck')

        },
        {
            path:'/truckdetails/:id',
            element:<PrivateRoute><TruckDetails></TruckDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://toy-shop-server-umber.vercel.app/truck/${params.id}`)

        },
        {
            path:'/collectors',
            element:<Collectors></Collectors>,
            loader: ()=>fetch('https://toy-shop-server-umber.vercel.app/collectors')

        },
        {
            path:'/collectordetails/:id',
            element:<PrivateRoute><CollectorDetails></CollectorDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://toy-shop-server-umber.vercel.app/collectors/${params.id}`)

        },
        {
            path:'/allvehicles',
            element:<AllVehicles></AllVehicles>,
            loader: ()=>fetch('https://toy-shop-server-umber.vercel.app/allvehicles')

        },
        {
            path:'/allvehicles/:id',
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
            loader:({params})=>fetch(`https://toy-shop-server-umber.vercel.app/allvehicles/${params.id}`)

        }
    ]
    },
  ]);
  export default router;