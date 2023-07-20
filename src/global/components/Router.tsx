import { Route, Routes, useNavigate } from 'react-router-dom';
import Auth from '../../pages/auth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/authContext';

export default function Router() {
  const { jwt } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      navigate('/login');
    }
  }, [jwt, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<Auth as="login" />} />
      <Route path="/signup" element={<Auth as="signup" />} />
    </Routes>
  );
}
