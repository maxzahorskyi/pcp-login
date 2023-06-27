import { createSelector, createSlice } from '@reduxjs/toolkit';
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
      localStorage.setItem('token', action.payload.accessToken);
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    logoutUser(state) {
      state = initialState;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  },
});
export const { setUser, logoutUser } = userSlice.actions;

const selectSelf = (state: { user: IUser }) => state.user;
export const getUser = createSelector(selectSelf, (state) => state);

export default userSlice.reducer;
