import { INotification } from '../../types/notification.types';
import { globalApi } from './global.api';

export const notificationApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getNotification: build.query<INotification, { id: number }>({
      query: ({ id }) => {
        const token = localStorage.getItem('token');
        return {
          url: `notifications/${id}`,
          method: 'GET',
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
  }),
});

export const { useGetNotificationQuery } = notificationApi;
