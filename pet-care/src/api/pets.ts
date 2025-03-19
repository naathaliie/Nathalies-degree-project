import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Hämta alla pets
export const getPets = createAsyncThunk("pets/getPets", async () => {
  try {
    const response = await axios.get(`http://localhost:3003/pets`);
    console.log("Testing från getPets: ", response.data)
    return response.data; // Data som returnerades ifrån API
  } catch (error) {
    console.error("Något gick fel när du skulle hämta alla husdjur:", error);
    throw new Error('Det gick inte att hämta husdjur'); // Vi kastar ett fel så att rejected-case triggas i extraReducers
  }
});
