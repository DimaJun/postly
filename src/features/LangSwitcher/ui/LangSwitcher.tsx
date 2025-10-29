import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './LangSwitcher.module.scss';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(s.LangSwitcher, {}, [className])}
            onClick={toggle}
            theme='clearInverted'
        >
            {short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};
