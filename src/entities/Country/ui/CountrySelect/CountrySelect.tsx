import { memo } from 'react';
import { ListBox } from '@/shared/ui/ListBox';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/types';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: 'Ukraine', content: 'Ukraine' },
    { value: 'Poland', content: 'Poland' },
    { value: 'Ireland', content: 'Ireland' },
    { value: 'Kazakhstan', content: 'Kazakhstan' },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation();
    const { onChange, readonly, className, value } = props;

    return (
        <ListBox
            className={className}
            value={value}
            onChange={onChange}
            defaultValue={t('Укажите страну')}
            items={options}
            readonly={readonly}
            direction='topRight'
            label={t('Страна')}
        />
    );
});

CountrySelect.displayName = 'CountrySelect';
