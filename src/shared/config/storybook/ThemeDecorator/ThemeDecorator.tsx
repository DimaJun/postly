import { Theme } from '@/shared/lib/context/ThemeContext';
import { classNames } from '@/shared/helpers/classNames/classNames';
import { ThemeProvider } from '@/app/providers/ThemeProvider/ThemeProvider';
import '@/app/styles/main.scss';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (Story: never) => {
    return (
        <div className={classNames('app', {}, [theme])}>
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        </div>
    );
};
