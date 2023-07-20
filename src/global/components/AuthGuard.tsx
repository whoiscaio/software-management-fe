import { useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import { Navigate, Outlet } from 'react-router-dom';

export default function AuthGuard() {
  const { account } = useContext(AuthContext);

  function isAuthenticated() {
    if (!account.id || !account.username) {
      return false;
    }

    return true;
  }

  return isAuthenticated() ? <Outlet /> : <Navigate to="login" />;
}
