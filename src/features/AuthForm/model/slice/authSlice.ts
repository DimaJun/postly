import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/types';

const initialState: AuthSchema = {
    username: '',
    password: '',
    email: '',
};

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        clearAuthForm: (state) => {
            state.username = '';
            state.email = '';
            state.password = '';
        },
    },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
