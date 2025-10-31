import { configureStore } from '@reduxjs/toolkit';
import { rtkApi } from '@/shared/api/rtkApi';
import { authReducer } from '@/features/AuthForm';

export const store = configureStore({
    reducer: {
        [rtkApi.reducerPath]: rtkApi.reducer,
        auth: authReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
