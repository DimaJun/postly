import { memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './ProfileCardHeader.module.scss';
import { profileActions } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useUpdateMyProfileMutation } from '@/entities/Profile/api/profile';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';

interface ProfileCardHeaderProps {
    className?: string;
    isReadonly?: boolean;
}

const { setReadonly, cancelEdit, setUserData } = profileActions;

export const ProfileCardHeader = memo((props: ProfileCardHeaderProps) => {
    const { className, isReadonly } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const [updateProfile] = useUpdateMyProfileMutation();
    const formData = useAppSelector((state) => state.profile.formData);

    const onEdit = () => {
        dispatch(setReadonly(false));
    };

    const onCancel = () => {
        dispatch(cancelEdit());
    };

    const onUpdate = async () => {
        if (!formData) return;
        const { _id, userId, ...rest } = formData;

        try {
            const data = await updateProfile(rest).unwrap();
            dispatch(setUserData(data.profile));
            dispatch(setReadonly(true));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className={classNames(s.ProfileCardHeader, {}, [className])}>
            {isReadonly && (
                <Button
                    className={s.editBtns}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            )}
            {!isReadonly && (
                <div className={s.editBtns}>
                    <Button
                        theme='outlineRed'
                        onClick={onCancel}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button onClick={onUpdate}>{t('Сохранить')}</Button>
                </div>
            )}
        </div>
    );
});

ProfileCardHeader.displayName = 'ProfileCardHeader';
