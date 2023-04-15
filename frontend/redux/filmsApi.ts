import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allFilms = createApi({
  reducerPath: "allFilms",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:4200/films" }),
  endpoints: (builder) => ({
    allFilms: builder.query<any, string>({
      query: () => ``,
    }),
    filmItem: builder.query<any, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useAllFilmsQuery, useFilmItemQuery } = allFilms;
