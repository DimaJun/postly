import { classNames } from '@/shared/helpers/classNames/classNames';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router/ui/AppRouter';

export function App() {
    const { theme } = useTheme();

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
