import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './ProfilePage.module.scss';
import { Page } from '@/shared/ui/Page';

const ProfilePage = () => {
    return <Page className={classNames(s.ProfilePage, {}, [])}>ProfilePage component</Page>;
};

export default ProfilePage;
