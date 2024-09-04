import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";

import Movie from "../Pages/Movie/Movie";
import SearchPage from "../Pages/SearchPage/SearchPage";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App></App>,
        children:[
            {
                path:"",
                element: <Home></Home>
            },
            
            {
                path:"search",
                element: <SearchPage></SearchPage>
            },
            {
                path:":id",
                element: <Movie></Movie>
            }
        ]
    }
])