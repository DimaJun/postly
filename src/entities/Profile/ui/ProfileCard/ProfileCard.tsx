import { memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Profile } from '@/entities/Profile';
import s from './ProfileCard.module.scss';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';

interface ProfileCard {
    profile?: Partial<Profile>;
}

export const ProfileCard = memo((props: ProfileCard) => {
    const { t } = useTranslation('profile');
    const { city, country, currency, lastname, age, avatar, firstname } = props.profile;

    if (!props.profile) return null;

    return (
        <Card padding='16'>
            <Avatar
                className={s.avatar}
                source={avatar}
                size={150}
                border='50%'
            />
            <Input
                className={s.input}
                placeholder={t('Имя')}
                value={firstname}
                readonly
            />
            <Input
                className={s.input}
                placeholder={t('Фамилия')}
                value={lastname}
                readonly
            />
            <Input
                className={s.input}
                placeholder={t('Возраст')}
                value={age}
                type='number'
                readonly
            />
            <Input
                className={s.input}
                placeholder={t('Город')}
                value={city}
                readonly
            />
            <Input
                className={s.input}
                placeholder={t('Аватар')}
                value={avatar}
                readonly
            />
            <CurrencySelect
                className={s.input}
                value={currency}
                readonly
            />
            <CountrySelect
                className={s.input}
                value={country}
                readonly
            />
        </Card>
    );
});

ProfileCard.displayName = 'ProfileCard';
