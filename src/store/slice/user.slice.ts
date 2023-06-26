import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/user.types';

const initialState: IUser = {
  userId: 0,
  email: '',
  password: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
