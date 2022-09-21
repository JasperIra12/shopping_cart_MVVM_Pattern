import { configureStore } from "@reduxjs/toolkit";

import ProductCartReducer from './ProductSlice'
export const store = configureStore(
    {
        reducer:{
            all_cart : ProductCartReducer,
        }
    }
)