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
        messages: action.payload.messages,
      };
    },
    logout: (state) => {
      state.currentUser = null;
    },
    updateCurrentUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    setMarkAsRead: (state, action: PayloadAction<number>) => {
      if (state.currentUser) {
        const index = action.payload;
        if (state.currentUser.messages[index]) {
          state.currentUser = {
            ...state.currentUser,
            messages: state.currentUser.messages.map((msg, i) =>
              i === index ? { ...msg, isUnread: false } : msg
            ),
          };
        }
      }
    },
  },
});

export const { setCurrentUser, logout, setMarkAsRead, updateCurrentUser } =
  authSlice.actions;

export default authSlice.reducer;
