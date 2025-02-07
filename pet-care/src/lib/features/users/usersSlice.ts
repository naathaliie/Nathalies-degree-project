import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UsersState } from '../../../../types/types'

export const initialState: UsersState = {
    users: [], // Initialt tomt, kan sättas av StoreProvider senare
  }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
        state.users = action.payload
      },
    addUser: (state, action: PayloadAction<Omit<User, 'id'>>) => {
      const newUser: User = {
        id: String(state.users.length + 1), // Enkel id-generering
        ...action.payload
      }
      state.users.push(newUser)
    },
    updateUserStatus: (state, action: PayloadAction<{ id: string, isLoggedIn: boolean }>) => {
      const user = state.users.find(user => user.id === action.payload.id)
      if (user) {
        user.isLoggedIn = action.payload.isLoggedIn
      }
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
  },
})

export const { setUsers, addUser, updateUserStatus, removeUser } = usersSlice.actions

export default usersSlice.reducer
