import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './ProfilePage.module.scss';
import { Page } from '@/shared/ui/Page';
import { profileActions, ProfileCard, ProfileCardHeader } from '@/entities/Profile';
import { useGetMyProfileQuery } from '@/entities/Profile/api/profile';
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';

const { setUserData } = profileActions;

const ProfilePage = () => {
    const { data } = useGetMyProfileQuery();
    const dispatch = useAppDispatch();
    const { formData, readonly } = useAppSelector((state) => state.profile);

    useEffect(() => {
        if (data) {
            dispatch(setUserData(data));
        }
    }, [data, dispatch]);

    return (
        <Page className={classNames(s.ProfilePage, {}, [])}>
            {formData && (
                <>
                    <ProfileCardHeader isReadonly={readonly} />
                    <ProfileCard
                        profile={formData}
                        readonly={readonly}
                    />
                </>
            )}
        </Page>
    );
};

export default ProfilePage;
