import s from './Sidebar.module.scss';
import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { getRouteAbout, getRouteMain } from '@/shared/config/router';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button } from '@/shared/ui/Button';
import { useState } from 'react';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation('sidebar');

    const toggle = () => {
        setCollapsed((prev) => !prev);
    };

    const links = [
        {
            path: getRouteMain(),
            text: t('Главная'),
            icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: t('О нас'),
            icon: AboutIcon,
        },
    ];

    const mods: Mods = {
        [s.collapsed]: collapsed,
    };

    return (
        <aside className={classNames(s.Sidebar, mods, [className])}>
            <Button
                className={s.collapseBtn}
                onClick={toggle}
                theme='backgroundInverted'
                size='size_l'
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={s.links}>
                {links.map((item) => (
                    <AppLink
                        className={s.link}
                        key={item.path}
                        to={item.path}
                        theme='secondary'
                    >
                        <Icon
                            Svg={item.icon}
                            inverted
                            width={20}
                            height={20}
                        />
                        {!collapsed && <p>{item.text}</p>}
                    </AppLink>
                ))}
            </div>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
};
