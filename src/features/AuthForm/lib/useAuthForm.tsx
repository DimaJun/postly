import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { useLoginUserMutation, userActions, useRegisterUserMutation } from '@/entities/User';
import { authActions } from '../model/slice/authSlice';
import { useCallback, useMemo } from 'react';

interface useAuthFormProps {
    isLogin?: boolean;
    onSuccess?: () => void;
}

const { setUsername, setPassword, setEmail, clearAuthForm } = authActions;
const { setUserData } = userActions;

export const useAuthForm = ({ isLogin, onSuccess }: useAuthFormProps) => {
    const dispatch = useAppDispatch();
    const { username, password, email } = useAppSelector((state) => state.auth);
    const [registerUser, { isLoading: isRegistering }] = useRegisterUserMutation();
    const [loginUser, { isLoading: isLoggingIn }] = useLoginUserMutation();

    const isFormValid = useMemo(() => {
        if (!username || !password) return false;
        if (!isLogin && !email) return false;
        return true;
    }, [email, isLogin, password, username]);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(setUsername(value));
        },
        [dispatch]
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(setPassword(value));
        },
        [dispatch]
    );

    const onChangeEmail = useCallback(
        (value: string) => {
            dispatch(setEmail(value));
        },
        [dispatch]
    );

    const onSubmit = useCallback(async () => {
        if (!isFormValid) return;

        try {
            if (isLogin) {
                const response = await loginUser({ username, password }).unwrap();

                dispatch(setUserData(response.user));
                dispatch(clearAuthForm());
                onSuccess?.();
            } else {
                await registerUser({ username, password, email }).unwrap();
                dispatch(clearAuthForm());
            }
        } catch (e) {
            console.error('Auth error:', e);
        }
    }, [dispatch, email, isFormValid, isLogin, loginUser, onSuccess, password, registerUser, username]);

    return {
        // State
        username,
        password,
        email,
        isRegistering,
        isLoggingIn,
        isFormValid,

        // Handlers
        onChangeUsername,
        onChangePassword,
        onChangeEmail,
        onSubmit,
    };
};
