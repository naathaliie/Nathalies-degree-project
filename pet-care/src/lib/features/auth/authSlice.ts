import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../../../../types/types";

const initialState: AuthState = {
    currentUser: {
        id: '',
        username: '',
        email: '',
        isLoggedIn: false,
        pets: [],
    }
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setCurrentUser: (state, action: PayloadAction<User>) => {
        state.currentUser = {
            id: action.payload.id,
            username: action.payload.username,
            email: action.payload.email,
            isLoggedIn: true,
            pets: action.payload.pets,
        };
      },
      logout: (state) => { //logout: Återställer currentUser till null.
        state.currentUser = {
            id: '',
            username: '',
            email: '',
            isLoggedIn: false,
            pets: [],
        };
      },
    },
  });

export const { setCurrentUser, logout } = authSlice.actions;

export default authSlice.reducer;
