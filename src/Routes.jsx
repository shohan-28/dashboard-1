import { createBrowserRouter } from "react-router";
import App from "./App";


import Member from "./components/Member";
import Home from "./components/Home";
import Search from './components/Search';
import Root from './Root';
import Routine from './components/Routine';


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
                path:"/Routine",
                element: <Routine></Routine>
            },
            {
                path:"/Member",
                element: <Member></Member>
            }
            

           
        ]
    }
])

export default router;