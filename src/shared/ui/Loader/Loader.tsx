import s from './Loader.module.scss';
import { memo } from 'react';

export const Loader = memo(() => {
    return <div className={s.loader}></div>;
});

Loader.displayName = 'Loader';
