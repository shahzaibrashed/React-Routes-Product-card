import AllProduct from "../Screens/AllProduct";
import ErrorRoutes from "../Screens/ErrorRoutes";
import Home from "../Screens/Home";
import ProductDetail from "../Screens/ProductDetail";
import Thanks from "../Screens/Thanks";

export const RouterList = [

    {
    path:"/",
    element:<Home/>
    },
    {
        path:"/allproduct",
        element:<AllProduct/>
    },
    {
        path:"/product-detail/:id",
        element:<ProductDetail/>
    },
    {
        path:"/thanks",
        element:<Thanks/>
    },
    {
        path:"*",
        element:<ErrorRoutes/>
    }
]