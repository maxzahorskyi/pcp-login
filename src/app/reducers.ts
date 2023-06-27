import { globalApi } from '../store/api/global.api';
import notificationReducer from '../store/slice/notification.slice';
import userReducer from '../store/slice/user.slice';

const rootReducer = {
  user: userReducer,
  notification: notificationReducer,
  [globalApi.reducerPath]: globalApi.reducer,
};

export default rootReducer;
