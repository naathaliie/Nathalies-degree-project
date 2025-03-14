import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Hämta alla users
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(`http://localhost:3003/users`);
    console.log("Testing från getUsers: ", response.data)
    return response.data; // Data som returnerades ifrån API
  } catch (error) {
    console.error("Något gick fel när du skulle hämta alla användare:", error);
    throw new Error('Det gick inte att hämta användare'); // Vi kastar ett fel så att rejected-case triggas i extraReducers
  }
});
