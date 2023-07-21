import { Link } from 'react-router-dom';
import HeaderContainer from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { LogOut, UserCircle2 } from 'lucide-react';

export default function Header() {
  const { account, isAuthenticated, logout } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <div className="app-context">
        <Link to="/">
          <h2>SW Management</h2>
        </Link>
        <div className="user">
          {
            isAuthenticated && account && account.username && (
              <div className="actions">
                <div className="profile">
                  <UserCircle2 color="#ffffff" size={40} />
                  <p>Olá, {account.username}</p>
                </div>
                <button type="button" onClick={logout}>
                  <LogOut />
                </button>
              </div>
            )
          }
        </div>
      </div>
    </HeaderContainer>
  );
}
