"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allFilms = createApi({
  reducerPath: "allFilms",
  // baseQuery: fetchBaseQuery({ baseUrl: `${process.env.DB_HOST}/movie` }),
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/movie` }),
  endpoints: (builder) => ({
    allFilms: builder.query<any, string>({
      query: () => `/all`,
    }),
    filteredFilms: builder.query<any, string>({
      query: (query) => `/filters?${query}`,
    }),
    filmItem: builder.query<any, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useAllFilmsQuery, useFilteredFilmsQuery, useFilmItemQuery } = allFilms;
