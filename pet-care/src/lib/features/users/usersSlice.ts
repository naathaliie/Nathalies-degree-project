import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UsersState } from '../../../../types/types'
import { getUsers } from '../../../api/users'

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {/* Det som behöver sparas lokalt */},
  //ExtraReducers för hantering mot DB
  extraReducers: (builder) => {
    builder
    .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ett fel uppstod vid hämtning av användare';
      })

  },
})

export const {  } = usersSlice.actions

export default usersSlice.reducer
