import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthGuard() {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="login" />;
}
