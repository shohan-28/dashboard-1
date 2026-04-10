import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './Features/counterSlice/counterSlice';

const Home = () => {
    const {value} = useSelector ((state) => state.counter);
    console.log(value);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1 className='text-2xl flex justify-center text-red-800'>This is home page</h1>
            <br></br>
            <h1>Count: {value}</h1>
        <br></br>
            <div className='flex flex-col justify-start space-y-2'>
                <button onClick={()=> dispatch(increment())} className='bg-amber-200 rounded-xl p-1 cursor-pointer'>increase</button>
                <button onClick={()=> dispatch(decrement())} className='bg-amber-200 rounded-xl p-1 cursor-pointer'>Decrease</button>
                <button onClick={()=> dispatch(incrementByAmount(5))} className='bg-amber-200 rounded-xl p-1 cursor-pointer'>increase 5</button>
            </div>
        </div>
    );
};

export default Home;