"use client";

import { configureStore } from "@reduxjs/toolkit";
import userApi from "./userApi";
import { allFilms } from "./filmsApi";
import { allActors } from "./actorApi";
import filtersApi from "./filtersApi";

export const store = configureStore({
  reducer: {
    userApi,
    filtersApi,
    [allFilms.reducerPath]: allFilms.reducer,
    [allActors.reducerPath]: allActors.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allFilms.middleware, allActors.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
