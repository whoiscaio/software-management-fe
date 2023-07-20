import { Route, Routes } from 'react-router-dom';
import Auth from '../../pages/auth';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Auth as="login" />} />
      <Route path="/signup" element={<Auth as="signup" />} />
    </Routes>
  );
}
