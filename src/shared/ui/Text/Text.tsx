import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './Text.module.scss';

type TextTheme = 'primary' | 'inverted' | 'error';
type TextAlign = 'left' | 'center' | 'right';
type TextSize = 's' | 'm' | 'l';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    l: 'h1',
    m: 'h2',
    s: 'h3',
};

export const Text = memo((props: TextProps) => {
    const { size = 'm', align = 'left', title, theme = 'primary', className, text } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div className={classNames(s.Text, {}, [s[align], s[theme], s[size], className])}>
            {title && <HeaderTag className={s.title}>{title}</HeaderTag>}
            {text && <p className={s.text}>{text}</p>}
        </div>
    );
});

Text.displayName = 'Text';
