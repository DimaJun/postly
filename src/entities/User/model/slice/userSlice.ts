import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<User>) => {
            state.userData = action.payload;
            state._inited = true;
        },
        logout: (state) => {
            state.userData = undefined;
            state._inited = false;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
