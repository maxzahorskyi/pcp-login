import { LoginData } from '../../components/LoginForm/login.types';
import { globalApi } from './global.api';

export const authApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginData, LoginData>({
      query: ({ email, password }) => ({
        url: 'login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
