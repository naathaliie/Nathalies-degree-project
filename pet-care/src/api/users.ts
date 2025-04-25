import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../types/types";

//Hämta alla users
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(`http://localhost:3003/users`);
    console.log("Hämtar alla användare från users.ts");
    return response.data; // Data som returnerades ifrån API
  } catch (error) {
    console.error("Något gick fel när du skulle hämta alla användare:", error);
    throw new Error("Det gick inte att hämta användare"); // Vi kastar ett fel så att rejected-case triggas i extraReducers
  }
});

//Skapa ny användare

export const postNewUser = createAsyncThunk(
  "users/new",
  //Här kommer datan du skickar in. Omit<User, "_id"> betyder: ta hela User, men ta bort _id eftersom det skapas automatiskt i databasen och inte ska skickas in
  async (newUser: Omit<User, "_id">, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3003/users/new",
        newUser
      );
      console.log("Postar en ny user till db från users.ts");
      return response.data;
    } catch (error: any) {
      console.log("Något gick fel när du skulle posta ny user till db", error);
      return thunkAPI.rejectWithValue(error.response || "Något gick fel");
    }
  }
);
