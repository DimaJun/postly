import { memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Profile } from '@/entities/Profile';
import s from './ProfileCard.module.scss';
import { Input } from '@/shared/ui/Input';
import { useTranslation } from 'react-i18next';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { useProfileForm } from '@/entities/Profile/lib/useProfileForm';

interface ProfileCard {
    profile?: Partial<Profile>;
    readonly?: boolean;
}

export const ProfileCard = memo((props: ProfileCard) => {
    const { t } = useTranslation('profile');
    const readonly = props.readonly;
    const { city, country, currency, lastname, age, avatar, firstname } = props.profile;
    const {
        onChangeCity,
        onChangeLastName,
        onChangeFirstName,
        onChangeCurrency,
        onChangeCountry,
        onChangeAvatar,
        onChangeAge,
    } = useProfileForm();

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
                readonly={readonly}
                onChange={onChangeFirstName}
            />
            <Input
                className={s.input}
                placeholder={t('Фамилия')}
                value={lastname}
                readonly={readonly}
                onChange={onChangeLastName}
            />
            <Input
                className={s.input}
                placeholder={t('Возраст')}
                value={age}
                type='number'
                readonly={readonly}
                onChange={onChangeAge}
            />
            <Input
                className={s.input}
                placeholder={t('Город')}
                value={city}
                readonly={readonly}
                onChange={onChangeCity}
            />
            <Input
                className={s.input}
                placeholder={t('Аватар')}
                value={avatar}
                readonly={readonly}
                onChange={onChangeAvatar}
            />
            <CurrencySelect
                className={s.input}
                value={currency}
                readonly={readonly}
                onChange={onChangeCurrency}
            />
            <CountrySelect
                className={s.input}
                value={country}
                readonly={readonly}
                onChange={onChangeCountry}
            />
        </Card>
    );
});

ProfileCard.displayName = 'ProfileCard';
