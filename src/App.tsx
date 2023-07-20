import Header from './global/components/Header';
import Root from './global/components/Root';
import Router from './global/components/Router';

function App() {
  return (
    <Root>
      <Header />
      <div className="content-wrapper">
        <Router />
      </div>
      <div className="footer" /* to be implemented */ />
    </Root>
  );
}

export default App;
