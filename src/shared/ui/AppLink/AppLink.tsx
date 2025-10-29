import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router';
import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './AppLink.module.scss';

type AppLinkTheme = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    children: ReactNode;
}

export const AppLink = memo(({ className, children, theme = 'primary', to, ...otherProps }: AppLinkProps) => {
    return (
        <Link
            className={classNames(s.AppLink, {}, [className, s[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

AppLink.displayName = 'AppLink';
