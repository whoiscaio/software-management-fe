import { Route, Routes } from 'react-router-dom';
import Auth from '../../pages/auth';
import AuthGuard from './AuthGuard';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Auth as="login" />} />
      <Route path="/signup" element={<Auth as="signup" />} />
      
      <Route element={<AuthGuard />}>
        <Route path="/" element={<h1>Home</h1>} />
      </Route>
    </Routes>
  );
}
