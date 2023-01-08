import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const feedFiltersSlice = createSlice({
  initialState: { searchQuery: "" },
  name: "feedFilterSlice",
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setFilter } = feedFiltersSlice.actions;
export const getFeedFilters = (state: RootState) => state.feedFiltersSlice;
