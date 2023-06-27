import { globalApi } from '../store/api/global.api';
import userReducer from '../store/slice/user.slice';

const rootReducer = {
  user: userReducer,
  [globalApi.reducerPath]: globalApi.reducer,
};

export default rootReducer;
