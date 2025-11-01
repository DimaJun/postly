import { JSX } from 'react';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { Navigate, useLocation } from 'react-router';
import { getRouteMain } from '@/shared/config/router';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const userData = useAppSelector((state) => state.user.userData);
    const location = useLocation();

    if (!userData) {
        return (
            <Navigate
                to={getRouteMain()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}
