import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '../model/types/user';

interface LoginResponse {
    message: string;
    user: User;
}

interface LoginCredentials {
    username: string;
    password: string;
}

export const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        registerUser: build.mutation({
            query: (userData) => ({
                url: '/api/users/register',
                method: 'POST',
                body: userData,
            }),
        }),
        loginUser: build.mutation<LoginResponse, LoginCredentials>({
            query: (userData) => ({
                url: '/api/users/login',
                method: 'POST',
                body: userData,
            }),
        }),
        reAuth: build.query<{ safeUser: User }, void>({
            query: () => ({
                url: '/api/users/auth',
                method: 'GET',
            }),
        }),
        logout: build.mutation<void, void>({
            query: () => ({
                url: '/api/users/logout',
                method: 'POST',
            }),
        }),
    }),
});

export const useRegisterUserMutation = userApi.useRegisterUserMutation;
export const useLoginUserMutation = userApi.useLoginUserMutation;
export const useReAuthQuery = userApi.useReAuthQuery;
export const useLogoutMutation = userApi.useLogoutMutation;
