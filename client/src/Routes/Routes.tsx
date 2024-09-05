import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import App from "../App";

import MoviePage from "../Pages/MoviePage/MoviePage";
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
                path:"movie/:id",
                element: <MoviePage></MoviePage>
            }
        ]
    }
])