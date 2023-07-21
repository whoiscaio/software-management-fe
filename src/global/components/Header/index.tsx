import { Link } from 'react-router-dom';
import HeaderContainer from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

export default function Header() {
  const { account, isAuthenticated } = useContext(AuthContext);

  return (
    <HeaderContainer>
      <div className="app-context">
        <Link to="/">
          <h2>SW Management</h2>
        </Link>
        {
          isAuthenticated && account && account.username && (
            <>
              <div className="profile-icon" />
              <p>Olá, {account.username}</p>
            </>
          )
        }
      </div>
    </HeaderContainer>
  );
}
