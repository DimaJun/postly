import { rtkApi } from '@/shared/api/rtkApi';
import { Profile } from '../model/types/profile';

export const profileApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getMyProfile: build.query<Profile, void>({
            query: () => ({
                url: '/api/profile/me',
                method: 'GET',
            }),
        }),
        updateMyProfile: build.mutation<{ profile: Profile }, Partial<Profile>>({
            query: (profileUpdates) => ({
                url: '/api/profile/me',
                method: 'PATCH',
                body: profileUpdates,
            }),
        }),
    }),
});

export const useGetMyProfileQuery = profileApi.useGetMyProfileQuery;
export const useUpdateMyProfileMutation = profileApi.useUpdateMyProfileMutation;
