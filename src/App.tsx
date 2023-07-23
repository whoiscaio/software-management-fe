import Root from './global/components/Root';
import Router from './global/components/Router';
import Notifier from './global/components/Notifier';
import MainSidebar from './global/components/MainSidebar';

function App() {
  return (
    <>
      <Root>
        <MainSidebar />
        <div className="content-wrapper">
          <Router />
        </div>
      </Root>
      <Notifier />
    </>
  );
}

export default App;
