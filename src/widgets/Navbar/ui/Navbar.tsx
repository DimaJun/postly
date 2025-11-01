import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './Navbar.module.scss';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AuthModal } from '@/features/AuthForm';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { useLogoutMutation } from '@/entities/User/api/user';
import { userActions } from '@/entities/User';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

interface NavbarProps {
    className?: string;
}

const { logout: userLogout } = userActions;

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [isOpen, setIsOpen] = useState(false);
    const { userData } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();

    const onLogout = async () => {
        try {
            await logout().unwrap();
            navigate('/');
            dispatch(userLogout());
        } catch (e) {
            console.error('Ошибка при выходе:', e);
        }
    };

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <AuthModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <div className={s.actions}>
                {userData ? (
                    <>
                        <p className={s.greeting}>
                            {t('Привет')}, {userData.username}
                        </p>
                        <Button
                            className={s.logout}
                            theme='outlineRed'
                            onClick={onLogout}
                        >
                            {t('Выйти')}
                        </Button>
                    </>
                ) : (
                    <Button
                        className={s.loginBtn}
                        theme='clearInverted'
                        onClick={() => setIsOpen(true)}
                    >
                        {t('Войти')}
                    </Button>
                )}
            </div>
        </div>
    );
};
