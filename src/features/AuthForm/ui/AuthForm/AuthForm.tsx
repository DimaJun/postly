import { memo } from 'react';
import s from './AuthForm.module.scss';
import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';
import { useAuthForm } from '../../lib/useAuthForm';

interface AuthFormProps {
    className?: string;
    isLogin?: boolean;
    onSuccess?: () => void;
}

export const AuthForm = memo((props: AuthFormProps) => {
    const { className, isLogin, onSuccess } = props;
    const { t } = useTranslation('authform');

    const {
        email,
        username,
        password,
        isFormValid,
        isLoading,
        onChangeEmail,
        onChangePassword,
        onChangeUsername,
        onRegister,
    } = useAuthForm({ isLogin, onSuccess });

    return (
        <form className={classNames(s.AuthForm, {}, [className])}>
            <Input
                value={username}
                onChange={onChangeUsername}
                placeholder={t('Никнейм')}
                autofocus
            />
            <Input
                value={password}
                onChange={onChangePassword}
                placeholder={t('Пароль')}
                type='password'
            />
            {!isLogin && (
                <Input
                    value={email}
                    onChange={onChangeEmail}
                    placeholder={t('Почта')}
                    type='email'
                />
            )}
            <Button
                className={s.confirmBtn}
                disabled={!isFormValid || isLoading}
                type='button'
                onClick={onRegister}
            >
                {isLoading ? <Loader /> : isLogin ? t('Логин') : t('Регистрация')}
            </Button>
        </form>
    );
});

AuthForm.displayName = 'AuthForm';
