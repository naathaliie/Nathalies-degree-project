import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChoosablePets, Pet, PetsState } from "../../../../types/types";

const initialState: PetsState = {
  pets: [],
  draftPet: null,
  selectedPet: null,
  loading: false,
  error: null,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    /* Det som behöver sparas lokalt */
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.pets = action.payload;
    },
    getTestPets: (state) => {
      state.pets;
    },
    addNewPet: (state, action: PayloadAction<Pet>) => {
      state.pets.push(action.payload);
    },
    setSelectedPet: (state, action: PayloadAction<ChoosablePets>) => {
      state.selectedPet = action.payload;
    },
    removeSelectedPet: (state) => {
      state.selectedPet = null;
    },
    deletePet: (state, action: PayloadAction<{ id: string }>) => {
      state.pets = state.pets.filter((pet) => pet._id !== action.payload.id);
      console.log("radera husdjur via slice");
    },
  },
});

export const {
  addNewPet,
  setSelectedPet,
  setPets,
  removeSelectedPet,
  deletePet,
} = petsSlice.actions;

export default petsSlice.reducer;
