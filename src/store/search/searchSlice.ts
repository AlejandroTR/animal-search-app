import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    clearQuery: (state) => {
      state.query = "";
    },
  },
});

export const { setQuery, clearQuery } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.search.query;

export default searchSlice.reducer;
