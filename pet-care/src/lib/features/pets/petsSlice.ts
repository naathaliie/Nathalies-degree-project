import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChoosablePets, Pet, PetsState } from "../../../../types/types";
import { getPets } from "@/api/pets";

const initialState: PetsState = {
  pets: [],
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
    removePet: (state, action: PayloadAction<{ id: string }>) => {
      state.pets = state.pets.filter((pet) => pet.id !== action.payload.id);
    },
  },
  //ExtraReducers för hantering mot DB
  extraReducers: (builder) => {
    builder
      .addCase(getPets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPets.fulfilled, (state, action) => {
        state.loading = false;
        state.pets = action.payload;
      })
      .addCase(getPets.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || "Ett fel uppstod vid hämtning av husdjur";
      });
  },
});

export const { addNewPet, setSelectedPet, setPets } = petsSlice.actions;

export default petsSlice.reducer;
