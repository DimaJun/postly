import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/StoreProvider';
import { SidebarItemType } from '../types/sidebar';
import { getRouteAbout, getRouteMain, getRouteProfile } from '@/shared/config/router';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';

export const getSidebarItems = createSelector([(state: RootState) => state.user.userData], (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: 'О нас',
            icon: AboutIcon,
        },
    ];

    if (userData) {
        sidebarItemsList.push({
            path: getRouteProfile(),
            text: 'Профиль',
            icon: ProfileIcon,
            authOnly: true,
        });
    }

    return sidebarItemsList;
});
