import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import s from './Button.module.scss';

type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

type ButtonTheme = 'clear' | 'clearInverted' | 'outline' | 'outlineRed' | 'background' | 'backgroundInverted';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    size?: ButtonSize;
    square?: boolean;
    theme?: ButtonTheme;
    disabled?: boolean;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        size = 'size_m',
        square,
        theme = 'outline',
        disabled = false,
        fullWidth = false,
        ...otherProps
    } = props;

    const mods: Mods = {
        [s.square]: square,
        [s[size]]: true,
        [s.disabled]: disabled,
        [s.fullwidth]: fullWidth,
    };

    return (
        <button
            className={classNames(s.Button, mods, [className, s[theme]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
