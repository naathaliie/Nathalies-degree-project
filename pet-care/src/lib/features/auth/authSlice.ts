import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../../../../types/types";

const initialState: AuthState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = {
        _id: action.payload._id,
        email: action.payload.email,
        password: action.payload.password,
        name: action.payload.name,
        surname: action.payload.surname,
        street: action.payload.street,
        city: action.payload.city,
        postalCode: action.payload.postalCode,
        phone: action.payload.phone,
        pets: action.payload.pets,
        messages: action.payload.messages,
        isLoggedIn: true,
      };
    },
    logout: (state) => {
      //logout: Återställer currentUser till null.
      state.currentUser = null;
    },
  },
});

export const { setCurrentUser, logout } = authSlice.actions;

export default authSlice.reducer;
