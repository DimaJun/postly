import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './ProfilePage.module.scss';
import { Page } from '@/shared/ui/Page';
import { ProfileCard, ProfileCardHeader } from '@/entities/Profile';

const ProfilePage = () => {
    return (
        <Page className={classNames(s.ProfilePage, {}, [])}>
            <ProfileCardHeader isReadonly={false} />
            <ProfileCard
                profile={{
                    firstname: 'Dimas',
                    lastname: 'Rui',
                    city: 'Kyiv',
                    country: 'Ukraine',
                    currency: 'UAH',
                    age: 20,
                    avatar: 'https://toppng.com/uploads/preview/happy-black-person-11531493747ib42obkabb.png',
                }}
            />
        </Page>
    );
};

export default ProfilePage;
