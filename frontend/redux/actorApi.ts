"use client";

import { Actor } from "@components/types/actor";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allActors = createApi({
  reducerPath: "allActors",
  // baseQuery: fetchBaseQuery({ baseUrl: `${process.env.DB_HOST}/actor` }),
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:4000/actor` }),
  endpoints: (builder) => ({
    allActors: builder.query<any, string>({
      query: () => `all`,
    }),
    actorItem: builder.query<any, string>({
      query: (id) => `/${id}`,
    }),
    actorByName: builder.query<Actor[], string>({
      query: (name: string) => `/filtr?fio=${name}`,
    }),
  }),
});

export const { useAllActorsQuery, useActorItemQuery, useActorByNameQuery } =
  allActors;
