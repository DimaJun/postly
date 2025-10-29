import { classNames } from '@/shared/helpers/classNames/classNames';
import s from './ThemeSwitcher.module.scss';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(s.ThemeSwitcher, {}, [])}
            onClick={toggleTheme}
            theme='clear'
        >
            <Icon
                Svg={ThemeIcon}
                width={45}
                height={45}
                inverted
            />
        </Button>
    );
};
