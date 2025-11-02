import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './ProfileCardHeader.module.scss';

interface ProfileCardHeaderProps {
    className?: string;
    isReadonly?: boolean;
}

export const ProfileCardHeader = memo((props: ProfileCardHeaderProps) => {
    const { className, isReadonly } = props;
    const { t } = useTranslation('profile');
    return (
        <div className={classNames(s.ProfileCardHeader, {}, [className])}>
            {isReadonly && <Button className={s.editBtns}>{t('Редактировать')}</Button>}
            {!isReadonly && (
                <div className={s.editBtns}>
                    <Button theme='outlineRed'>{t('Отменить')}</Button>
                    <Button>{t('Сохранить')}</Button>
                </div>
            )}
        </div>
    );
});

ProfileCardHeader.displayName = 'ProfileCardHeader';
