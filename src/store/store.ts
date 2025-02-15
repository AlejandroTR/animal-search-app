import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./search/searchSlice";
import animalReducer from "./animal/animalSlice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    animals: animalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
