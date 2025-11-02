import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './Card.module.scss';

type CardTheme = 'normal' | 'outlined';
type CardPaddings = '0' | '8' | '16' | '32' | '64';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    padding?: CardPaddings;
    max?: boolean;
}

const mapPaddingsToClasses: Record<CardPaddings, string> = {
    '0': s.p0,
    '8': s.p8,
    '16': s.p16,
    '32': s.p32,
    '64': s.p64,
};

export const Card = memo((props: CardProps) => {
    const { className, children, theme = 'normal', max, padding = '0', ...otherProps } = props;

    const paddingClass = mapPaddingsToClasses[padding];

    return (
        <div
            className={classNames(s.Card, { [s.max]: max }, [className, s[theme], paddingClass])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';
