import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './ErrorPage.module.scss';
import { Page } from '@/shared/ui/Page';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button';

export const ErrorPage = () => {
    const { t } = useTranslation();
    const reload = () => {
        window.location.reload();
    };

    return (
        <Page className={classNames(s.ErrorPage, {}, [])}>
            <p>{t('Произошла ошибка. Перезагрузите страницу пожалуйста!')}</p>
            <Button
                onClick={reload}
                theme='outlineRed'
            >
                {t('Перезагрузить страницу')}
            </Button>
        </Page>
    );
};
