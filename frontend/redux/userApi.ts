'use client'

import { createSlice } from "@reduxjs/toolkit";

export interface userApi {
  id: number;
  name: string;
}

const initialState: any = [];

export const userApi = createSlice({
  name: "userAPi",
  initialState,
  reducers: {
    userItemAdd: (state, { payload }) => {
      state.push(payload);
    },
    clearUser: (state) => {
      return initialState;
    },
  },
});

export const { userItemAdd, clearUser } = userApi.actions;

export default userApi.reducer;
