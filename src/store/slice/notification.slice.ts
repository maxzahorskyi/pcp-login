import { createSlice } from '@reduxjs/toolkit';
import { INotification } from '../../types/notification.types';

const initialState: INotification = {
  id: 0,
  title: '',
  description: '',
  created: new Date(),
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
});

export default notificationSlice.reducer;
