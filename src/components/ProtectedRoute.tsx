import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthUser } from '../types/auth';

type ProtectedRouteProps = {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, username, token } = useSelector((state: {
        authReducer: AuthUser
    }) => state.authReducer)

    console.log({ protected: { isAuthenticated, username, token } })

    if (!isAuthenticated) {
        return (<Navigate to="/login" replace />)
    }
    return (
        <>{children}</>
    )
}

export default ProtectedRoute