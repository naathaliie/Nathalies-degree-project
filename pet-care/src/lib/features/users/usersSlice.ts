import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UsersState } from "../../../../types/types";

const initialState: UsersState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addNewUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.users = state.users.map((user) => {
        if (user._id === action.payload._id) {
          return action.payload;
        }
        return user;
      });
    },
    setMessageMarkAsRead: (
      state,
      action: PayloadAction<{ userID: string; messageIndex: number }>
    ) => {
      const thisUser = state.users.find((user) => {
        return user._id === action.payload.userID;
      });
      if (!thisUser) return;

      const thisMessage = thisUser?.messages[action.payload.messageIndex];

      if (!thisMessage) return;

      thisMessage.isUnread = false;
    },
  },
});

export const { setUsers, addNewUser, updateUser, setMessageMarkAsRead } =
  usersSlice.actions;

export default usersSlice.reducer;
