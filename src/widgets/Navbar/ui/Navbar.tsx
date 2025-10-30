import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './Navbar.module.scss';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { AuthModal } from '@/features/AuthForm';
interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <AuthModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <Button
                className={s.loginBtn}
                theme='clearInverted'
                onClick={() => setIsOpen(true)}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
