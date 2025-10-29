import { useContext } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === 'app_light_theme' ? 'app_dark_theme' : 'app_light_theme';
        setTheme?.(newTheme);
    };

    return { theme, toggleTheme };
}
