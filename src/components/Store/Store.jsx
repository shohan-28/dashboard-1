import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import counterReducer from "../Features/counterSlice/counterSlice";

const Store = configureStore ({
    reducer: {
        counter: counterReducer
        
        
    }
})

export default Store;