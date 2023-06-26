import { IUser } from '../../types/user.types';
import { globalApi } from './globalApi';

export const userApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<IUser[], void>({
      query: () => ({
        url: `users`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
