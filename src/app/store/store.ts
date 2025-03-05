import { configureStore } from "@reduxjs/toolkit";
import { lastFmApi } from "../../shared/api/baseLastFm";



export const store = configureStore({
    reducer: {
        [lastFmApi.reducerPath]: lastFmApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(lastFmApi.middleware)
})