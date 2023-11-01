import { configureStore } from "@reduxjs/toolkit"
import userReducer from "features/user";
import uiReducer from "features/ui";

export const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uiReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

