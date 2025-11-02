import { rtkApi } from '@/shared/api/rtkApi';

export const profileApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getMyProfile: build.query({
            query: () => ({
                url: '/api/profile/me',
                method: 'GET',
            }),
        }),
    }),
});

export const useGetMyProfileQuery = profileApi.useGetMyProfileQuery;
