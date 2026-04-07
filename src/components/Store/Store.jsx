import { configureStore } from '@reduxjs/toolkit';
import React from 'react';

const Store = configureStore ({
    reducer: {
        counters: counterReducer,
        post: postSlice,
        
    }
})

export default Store;