import { AppRoutesProps } from '@/shared/types/router';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from '@/app/providers/router/config/router';

export function AppRouter() {
    const renderWithWrapper = (route: AppRoutesProps) => {
        const element = <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
}
