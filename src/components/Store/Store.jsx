import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import counterReducer from "../Features/counterSlice/counterSlice";
import routineReducer from '../Features/RoutineSlice/RoutineSlice';


const Store = configureStore ({
    reducer: {
        counter: counterReducer,
        routine: routineReducer,
        
        
    }
})

export default Store;