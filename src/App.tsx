import Root from './global/components/Root';
import Router from './global/components/Router';
import Notifier from './global/components/Notifier';
import MainSidebar from './global/components/MainSidebar';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Root>
        {
          isAuthenticated && <MainSidebar />
        }
        <Router />
      </Root>
      <Notifier />
    </>
  );
}

export default App;
