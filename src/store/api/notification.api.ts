import { INotification } from '../../types/notification.types';
import { globalApi } from './globalApi';

export const notificationApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<INotification[], void>({
      query: () => ({
        url: `notifications`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
