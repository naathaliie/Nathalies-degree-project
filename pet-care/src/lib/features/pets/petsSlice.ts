import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet, PetsState } from "../../../../types/types";
import { v4 as uuidv4 } from "uuid"; // Importera v4-metoden från uuid för att generera unika id:n
import { getPets } from "@/api/pets";


const initialState: PetsState = {
    pets: [],
    loading: false,
    error: null

  };

  const petsSlice = createSlice({
    name: "pets",
    initialState,
    reducers: { /* Det som behöver sparas lokalt */
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
            state.error = action.error.message || 'Ett fel uppstod vid hämtning av husdjur';
          })

      },
  });

export const { addPet} = petsSlice.actions;

export default petsSlice.reducer;
