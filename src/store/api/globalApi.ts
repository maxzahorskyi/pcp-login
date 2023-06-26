import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const globalApi = createApi({
  reducerPath: 'globalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_JSON_SERVER_API_URL,
  }),
  endpoints: () => ({}),
});
