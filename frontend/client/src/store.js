import { configureStore } from "@reduxjs/toolkit"
import userReducer from "features/user";
import uiReducer from "features/ui";
import jikanAnimeReducer from "features/jikan_anime";

export const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uiReducer,
        jikanAnime: jikanAnimeReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

