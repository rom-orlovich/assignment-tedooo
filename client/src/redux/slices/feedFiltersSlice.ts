import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const feedFiltersSlice = createSlice({
  initialState: { searchQuery: "", page: 0 },
  name: "feedFilterSlice",
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.page = 0;
    },
    setPageQuery: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setSearchQuery, setPageQuery } = feedFiltersSlice.actions;
export const getFeedFilters = (state: RootState) => state.feedFiltersSlice;
