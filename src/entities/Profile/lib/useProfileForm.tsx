import { profileActions } from '@/entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

const { updateProfile } = profileActions;

export const useProfileForm = () => {
    const dispatch = useAppDispatch();

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ firstname: value || '' }));
        },
        [dispatch]
    );

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ lastname: value || '' }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: number) => {
            dispatch(updateProfile({ age: Number(value || 0) }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ avatar: value || '' }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(updateProfile({ currency }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(updateProfile({ country }));
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(updateProfile({ city: value || '' }));
        },
        [dispatch]
    );

    return {
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
        onChangeLastName,
        onChangeFirstName,
    };
};
