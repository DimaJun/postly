import { classNames } from '@/shared/helpers/classNames/classNames';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router/ui/AppRouter';
import { useEffect } from 'react';
import { userActions, useReAuthQuery } from '@/entities/User';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';

const { setUserData } = userActions;

export function App() {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const { data } = useReAuthQuery();

    useEffect(() => {
        if (data) {
            dispatch(setUserData(data.safeUser));
        }
    }, [data, dispatch]);

    return (
        <div
            id='app'
            className={classNames('app', {}, [theme])}
        >
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
}
