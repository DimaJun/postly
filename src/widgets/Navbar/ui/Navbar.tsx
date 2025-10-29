import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './Navbar.module.scss';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');

    return (
        <div className={classNames(s.Navbar, {}, [className])}>
            <Button
                className={s.loginBtn}
                theme='clearInverted'
            >
                {t('Войти')}
            </Button>
        </div>
    );
};
