import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/user.types';

const initialState: IUser = {
  userId: 0,
  email: '',
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.userId = action.payload.user.id;
      state.email = action.payload.user.email;
      state.token = action.payload.accessToken;
    },
    logoutUser(state) {
      state = initialState;
    },
  },
});
export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
