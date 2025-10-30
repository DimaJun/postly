import { memo, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './AuthModal.module.scss';
import { Text } from '@/shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';
import { AuthForm } from '../AuthForm/AuthForm';

interface AuthModalProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const AuthModal = memo((props: AuthModalProps) => {
    const { className, isOpen, onClose } = props;
    const [isLogin, setIsLogin] = useState(false);
    const { t } = useTranslation('authform');

    const toggleLogin = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <Modal
            className={classNames(s.AuthModal, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
        >
            <div className={s.top}>
                <Text title={isLogin ? t('Логин') : t('Регистрация')} />
                <Button
                    onClick={toggleLogin}
                    theme='clear'
                >
                    {isLogin ? t('Не зарегистрированы?') : t('Есть аккаунт?')}
                </Button>
            </div>
            <AuthForm isLogin={isLogin} />
        </Modal>
    );
});

AuthModal.displayName = 'AuthModal';
