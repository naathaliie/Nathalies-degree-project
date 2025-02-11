import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet, PetsState } from "../../../../types/types";
import { v4 as uuidv4 } from "uuid"; // Importera v4-metoden från uuid för att generera unika id:n


const initialState: PetsState = {
    pets: [],
  };

  const authSlice = createSlice({
    name: "pets",
    initialState,
    reducers: {
     addPet: (state, action: PayloadAction<Omit<Pet, 'id'>>) => {
           const newPet: Pet = {
             id: uuidv4(), // Enkel id-generering
             name: action.payload.name,
             breed: action.payload.breed,
             age: action.payload.age,
             ownerId: action.payload.ownerId
           }
           state.pets.push(newPet)
         },
         /* updatePet: (state, action: PayloadAction<{ id: string}>) => {
           const pet = state.pets.find(pet => pet.id === action.payload.id)
           if (pet) {
           }
         }, */
        removePet: (state, action: PayloadAction<{id: string}>) => {
           state.pets = state.pets.filter(pet => pet.id !== action.payload.id)
         },
    },
  });

export const { addPet} = authSlice.actions;

export default authSlice.reducer;
