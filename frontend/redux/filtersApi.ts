"use client";

import { createSlice } from "@reduxjs/toolkit";

export enum SortingNames {
  POP = "votes",
  RATING = "rating",
  YEAR = "year",
  NAME = "title",
}

export interface Filters {
  genre: string[];
  country: string[];
  year: number[];
  rating: number;
  votes: number;
  director: string;
  actor: string;
}

export interface FiltersApi {
  sorting: SortingNames;
  filters: Filters;
}

export const SORTING_DEFAULT = SortingNames.POP;

const initialState: FiltersApi = {
  sorting: SORTING_DEFAULT,
  filters: {
    genre: [],
    country: [],
    year: [],
    rating: 0,
    votes: 0,
    director: "",
    actor: "",
  },
};

export const filtersApi = createSlice({
  name: "filtersApi",
  initialState,
  reducers: {
    setSorting: (state, { payload }: { payload: SortingNames }) => {
      state.sorting = payload;
    },

    setGenre: (state, { payload }: { payload: string[] }) => {
      state.filters.genre = payload;
    },

    setCountry: (state, { payload }: { payload: string[] }) => {
      state.filters.country = payload;
    },

    setYear: (state, { payload }: { payload: number[] }) => {
      state.filters.year = payload;
    },

    setRating: (state, { payload }: { payload: number }) => {
      state.filters.rating = payload;
    },

    setMark: (state, { payload }: { payload: number }) => {
      state.filters.votes = payload;
    },

    setDirector: (state, { payload }: { payload: string }) => {
      state.filters.director = payload;
    },

    setActor: (state, { payload }: { payload: string }) => {
      state.filters.actor = payload;
    },

    resetFilters: (state) => initialState,
  },
});

export const {
  setSorting,
  setGenre,
  setCountry,
  setYear,
  setRating,
  setMark,
  setDirector,
  setActor,
  resetFilters,
} = filtersApi.actions;

export default filtersApi.reducer;
