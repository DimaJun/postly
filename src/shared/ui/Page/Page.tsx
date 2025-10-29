import s from './Page.module.scss';
import { ReactNode } from 'react';
import { classNames } from '@/shared/helpers/classNames/classNames';

interface PageProps {
    children: ReactNode;
    className?: string;
}

export function Page({ children, className }: PageProps) {
    return <div className={classNames(s.Page, {}, [className])}>{children}</div>;
}
