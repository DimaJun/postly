import { ReactNode, useEffect, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '@/shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage';

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || 'app_light_theme';
    });

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
}
