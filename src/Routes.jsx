import { createBrowserRouter } from "react-router";
import App from "./App";

import Edit from "./components/Edit";
import Member from "./components/Member";
import Home from "./components/Home";
import Search from './components/Search';
import Root from './Root';


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path:"/Home",
                element: <Home></Home>
            },
            {
                path:"/Search",
                element: <Search></Search>
            },
            {
                path:"/Edit",
                element: <Edit></Edit>
            },
            {
                path:"/Member",
                element: <Member></Member>
            }
            

           
        ]
    }
])

export default router;