import { configureStore } from "@reduxjs/toolkit";

import { getAnimeApi } from "../api/getAnimeApi";

import pageReducer from "../features/pages/page";

const store = configureStore({
    reducer: {
        page: pageReducer,

        [getAnimeApi.reducerPath]: getAnimeApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getAnimeApi.middleware),
})

export default store