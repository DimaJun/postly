import { rtkApi } from '@/shared/api/rtkApi';

export const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (userData) => ({
                url: '/api/users/register',
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const useRegisterUserMutation = userApi.useRegisterUserMutation;
