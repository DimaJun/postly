import { memo } from 'react';
import { classNames } from '@/shared/helpers/classNames/classNames';

interface AvatarProps {
    className?: string;
    border?: string;
    source?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
    const { border, className, source, size } = props;

    return (
        <img
            className={classNames('', {}, [className])}
            style={{ borderRadius: border, width: `${size}px`, height: `${size}px` }}
            src={source}
        />
    );
});

Avatar.displayName = 'Avatar';
