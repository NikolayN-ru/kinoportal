"use client";

import { FilterCountry, FilterGenre } from "@components/types/filters";
import { createSlice } from "@reduxjs/toolkit";

export interface GenreData {
  isLoading: boolean;
  items: FilterGenre[];
}

export interface CountryData {
  isLoading: boolean;
  items: FilterCountry[];
}

export interface FiltersDataApi {
  genreData: GenreData;
  countryData: CountryData;
}

const initialState: FiltersDataApi = {
  genreData: {
    isLoading: false,
    items: [],
  },
  countryData: {
    isLoading: false,
    items: [],
  },
};

export const filtersDataApi = createSlice({
  name: "filtersDataApi",
  initialState,
  reducers: {
    setGenreData: (state, { payload }: { payload: GenreData }) => {
      state.genreData = payload;
    },

    setCountryData: (state, { payload }: { payload: CountryData }) => {
      state.countryData = payload;
    },
  },
});

export const { setGenreData, setCountryData } = filtersDataApi.actions;

export default filtersDataApi.reducer;
