import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const data = useSelector ((state) => state.counter);
    console.log(data);
    
    return (
        <div>
            <h1 className='text-2xl flex justify-center text-red-800'>This is home page</h1>
        </div>
    );
};

export default Home;