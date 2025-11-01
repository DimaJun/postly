import { AppRoutesProps } from '@/shared/types/router';
import { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router';
import { routeConfig } from '@/app/providers/router/config/router';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

export function AppRouter() {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <Suspense fallback={<div>Loading...</div>}>{route.element}</Suspense>;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
}
