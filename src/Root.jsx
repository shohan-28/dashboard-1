import React from 'react';
import Navbar from './components/Navbar/Navbar';

import { Outlet } from 'react-router';
import App from './App';


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            {/* <Outlet></Outlet> */}
            <App></App>
        </div>
    );
};

export default Root;