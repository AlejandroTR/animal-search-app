import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";
import { Animal, fetchAnimals } from "../../utils/generateAnimals.ts";

interface AnimalsState {
  animals: Animal[];
  loading: boolean;
}

const initialState: AnimalsState = {
  animals: [],
  loading: false,
};

const animalSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAnimals: (state, action: PayloadAction<Animal[]>) => {
      state.animals = action.payload;
      state.loading = false;
    },
  },
});

export const getAnimals = createAsyncThunk<Animal[], string>(
  "animals/getAnimals",
  async (query: string, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    try {
      const animals = await fetchAnimals(query, 100);
      dispatch(setAnimals(animals));
      return animals;
    } catch (error) {
      return rejectWithValue("Error al cargar los animales");
    }
  },
);

export const { setLoading, setAnimals } = animalSlice.actions;

export const selectLoading = (state: RootState) => state.animals.loading;
export const selectAnimals = (state: RootState) => state.animals.animals;

export default animalSlice.reducer;
