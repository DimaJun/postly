import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { useRegisterUserMutation } from '@/entities/User';
import { authActions } from '@/features/AuthForm';
import { useCallback, useMemo } from 'react';

interface useAuthFormProps {
    isLogin?: boolean;
    onSuccess?: () => void;
}

const { setUsername, setPassword, setEmail, clearAuthForm } = authActions;

export const useAuthForm = ({ isLogin, onSuccess }: useAuthFormProps) => {
    const dispatch = useAppDispatch();
    const { username, password, email } = useAppSelector((state) => state.auth);
    const [registerUser, { isLoading }] = useRegisterUserMutation();

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

    const onRegister = useCallback(async () => {
        if (!isFormValid) return;

        const userData = { username, password, email };

        try {
            await registerUser(userData).unwrap();
            dispatch(clearAuthForm());
            onSuccess?.();
        } catch (e) {
            console.log(e);
        }
    }, [dispatch, email, isFormValid, onSuccess, password, registerUser, username]);

    return {
        // State
        username,
        password,
        email,
        isLoading,
        isFormValid,

        // Handlers
        onChangeUsername,
        onChangePassword,
        onChangeEmail,
        onRegister,
    };
};
