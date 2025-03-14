import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "../../../../types/types";

const initialState: AuthState = {
    currentUser: {
        _id: '',
        password: '',
        dateOfRegistration: '',
        name: '',
        surname: '',
        street: '',
        city: '',
        postalCode: '',
        phone: '',
        pets: [],
        orders: [],
        favorites: [],
        messages: [],
        isLoggedIn: false

    }
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setCurrentUser: (state, action: PayloadAction<User>) => {
        state.currentUser = {
            _id: action.payload._id,
            password: action.payload.password,
            dateOfRegistration: new Date(action.payload.dateOfRegistration).toISOString(), // Konvertera till ISO-sträng innan lagring
            name: action.payload.name,
            surname: action.payload.surname,
            street: action.payload.street,
            city: action.payload.city,
            postalCode: action.payload.postalCode,
            phone: action.payload.phone,
            pets: action.payload.pets,
            orders: action.payload.orders,
            favorites: action.payload.favorites,
            messages: action.payload.messages,
            isLoggedIn: true
        };
      },
      logout: (state) => { //logout: Återställer currentUser till null.
        state.currentUser = {
            _id: '',
            password: '',
            dateOfRegistration: '',
            name: '',
            surname: '',
            street: '',
            city: '',
            postalCode: '',
            phone: '',
            pets: [],
            orders: [],
            favorites: [],
            messages: [],
            isLoggedIn: false
        };
      },
    },
  });

export const { setCurrentUser, logout } = authSlice.actions;

export default authSlice.reducer;
