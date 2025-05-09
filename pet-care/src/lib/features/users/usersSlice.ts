import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UsersState } from "../../../../types/types";
import { getUsers, postNewUser } from "../../../api/users";

const initialState: UsersState = {
  users: [],
  draftUser: null,
  loading: {
    getUsers: false,
    postNewUser: false,
  },
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    /* Det som behöver sparas lokalt */
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    getTestUsers: (state) => {
      state.users;
    },
    setDraftUser: (state, action: PayloadAction<User>) => {
      state.draftUser = action.payload;
    },
    getDraftUser: (state) => {
      state.draftUser;
    },
    deleteDraftUser: (state) => {
      state.draftUser = null;
    },
    addNewUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setMessageMarkAsRead:
      /* Samma funktion är även på currentUser, ska du ändra här? Ändra där också */ (
        state,
        action: PayloadAction<{ userID: string; messageIndex: number }>
      ) => {
        //vi behöver skicka in användarID och vilket meddelande
        const thisUser = state.users.find((user) => {
          return user._id === action.payload.userID;
        });
        if (!thisUser) return;

        const thisMessage = thisUser?.messages[action.payload.messageIndex];

        if (!thisMessage) return;

        thisMessage.isUnread = false;
      },
  },
  //ExtraReducers för hantering mot DB
  extraReducers: (builder) => {
    builder
      //GET users
      .addCase(getUsers.pending, (state) => {
        state.loading.getUsers = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading.getUsers = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading.getUsers = false;
        state.error =
          action.error.message || "Ett fel uppstod vid hämtning av användare";
      })
      //POST newUser
      .addCase(postNewUser.pending, (state) => {
        state.loading.postNewUser = true;
      })
      .addCase(postNewUser.fulfilled, (state, action) => {
        setTimeout(() => {
          state.loading.postNewUser = false;
          state.users.push(action.payload);
        }, 2500);
      })
      .addCase(postNewUser.rejected, (state, action) => {
        state.loading.postNewUser = false;
        state.error =
          action.error.message || "Ett fel uppstod vid nyskapande av användare";
      });
  },
});

export const {
  setUsers,
  getTestUsers,
  addNewUser,
  setDraftUser,
  getDraftUser,
  deleteDraftUser,
  setMessageMarkAsRead,
} = usersSlice.actions;

export default usersSlice.reducer;
