import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allActors = createApi({
  reducerPath: "allActors",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.DB_HOST}/actor` }),
  endpoints: (builder) => ({
    allActors: builder.query<any, string>({
      query: () => ``,
    }),
    actorItem: builder.query<any, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useAllActorsQuery, useActorItemQuery } = allActors;
