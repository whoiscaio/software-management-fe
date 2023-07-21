import Footer from './global/components/Footer';
import Header from './global/components/Header';
import Root from './global/components/Root';
import Router from './global/components/Router';
import Notifier from './global/components/Notifier';

function App() {
  return (
    <>
      <Root>
        <Header />
        <div className="content-wrapper">
          <Router />
        </div>
        <Footer />
      </Root>
      <Notifier />
    </>
  );
}

export default App;
