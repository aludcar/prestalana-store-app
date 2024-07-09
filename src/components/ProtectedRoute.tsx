
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthUser } from '../types/auth';
import { ProtectedRouteProps } from '../types/routes';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useSelector((state: {
        authReducer: AuthUser
    }) => state.authReducer)


    if (!isAuthenticated) {
        return (<Navigate to="/login" replace />)
    }
    return (
        <>{children}</>
    )
}

export default ProtectedRoute