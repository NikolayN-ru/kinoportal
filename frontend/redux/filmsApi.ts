"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allFilms = createApi({
  reducerPath: "allFilms",
  // baseQuery: fetchBaseQuery({ baseUrl: `${process.env.DB_HOST}/Movie` }),
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/Movie` }),
  endpoints: (builder) => ({
    allFilms: builder.query<any, string>({
      query: (arg) => `${arg}`,
    }),
    filmItem: builder.query<any, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useAllFilmsQuery, useFilmItemQuery } = allFilms;
