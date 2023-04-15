import { configureStore } from "@reduxjs/toolkit";
import userApi from "./userApi";
import { allFilms } from "./filmsApi";

export const store = configureStore({
  reducer: {
    userApi: userApi,
    [allFilms.reducerPath]: allFilms.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(allFilms.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
