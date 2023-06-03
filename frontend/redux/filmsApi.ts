"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allFilms = createApi({
  reducerPath: "allFilms",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/movie` }),
  endpoints: (builder) => ({
    allFilms: builder.query<any, string>({
      query: () => `/all`,
    }),
    filmItem: builder.query<any, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

// ${process.env.DB_HOST}/movie

export const { useAllFilmsQuery, useFilmItemQuery } = allFilms;
