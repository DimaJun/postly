import s from './Sidebar.module.scss';
import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppLink } from '@/shared/ui/AppLink';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { Button } from '@/shared/ui/Button';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../model/selectors/getSidebarItems';
import { SidebarItem } from '@/widgets/Sidebar/ui/SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);

    const toggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList]
    );

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
            <div className={s.links}>{itemsList}</div>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </aside>
    );
};
