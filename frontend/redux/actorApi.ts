"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allActors = createApi({
  reducerPath: "allActors",
  // baseQuery: fetchBaseQuery({ baseUrl: `${process.env.DB_HOST}/actor` }),
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/actor` }),
  endpoints: (builder) => ({
    allActors: builder.query<any, string>({
      query: (all = "all") => `/${all}`,
    }),
    actorItem: builder.query<any, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useAllActorsQuery, useActorItemQuery } = allActors;
