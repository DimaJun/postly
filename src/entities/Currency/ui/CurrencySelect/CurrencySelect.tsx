import { memo } from 'react';
import { ListBox } from '@/shared/ui/ListBox';
import { Currency } from '../../model/types/types';
import { useTranslation } from 'react-i18next';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: 'UAH', content: 'UAH' },
    { value: 'USD', content: 'USD' },
    { value: 'EUR', content: 'EUR' },
    { value: 'SOS', content: 'SOS' },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();
    const { onChange, readonly, className, value } = props;

    return (
        <ListBox
            className={className}
            value={value}
            onChange={onChange}
            defaultValue={t('Укажите валюту')}
            items={options}
            readonly={readonly}
            direction='topRight'
            label={t('Валюта')}
        />
    );
});

CurrencySelect.displayName = 'CurrencySelect';
