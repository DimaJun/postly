import { memo } from 'react';
import s from '../Sidebar.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { AppLink } from '@/shared/ui/AppLink';
import { SidebarItemType } from '../../model/types/sidebar';
import { useTranslation } from 'react-i18next';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation('sidebar');

    return (
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
            {!collapsed && <p>{t(item.text)}</p>}
        </AppLink>
    );
});

SidebarItem.displayName = 'SidebarItem';
