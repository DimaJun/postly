import { memo, useEffect, useState } from 'react';
import s from './AuthForm.module.scss';
import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

interface AuthFormProps {
    className?: string;
    isLogin?: boolean;
}

export const AuthForm = memo((props: AuthFormProps) => {
    const { className, isLogin } = props;
    const { t } = useTranslation('authform');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [disable, setDisable] = useState(true);

    useEffect(() => {
        if (!username || !password) {
            setDisable(true);
        } else {
            setDisable(false);
        }
    }, [email, password, username]);

    return (
        <form className={classNames(s.AuthForm, {}, [className])}>
            <Input
                value={username}
                onChange={setUsername}
                placeholder={t('Никнейм')}
                autofocus
            />
            <Input
                value={password}
                onChange={setPassword}
                placeholder={t('Пароль')}
                type='password'
            />
            {!isLogin && (
                <Input
                    value={email}
                    onChange={setEmail}
                    placeholder={t('Почта')}
                    type='email'
                />
            )}
            <Button
                className={s.confirmBtn}
                disabled={disable}
                type='button'
            >
                {isLogin ? t('Логин') : t('Регистрация')}
            </Button>
        </form>
    );
});

AuthForm.displayName = 'AuthForm';
