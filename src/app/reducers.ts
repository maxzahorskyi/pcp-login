import notificationReducer from '../store/slice/notification.slice';
import userReducer from '../store/slice/user.slice';

const rootReducer = {
  user: userReducer,
  notification: notificationReducer,
};

export default rootReducer;
