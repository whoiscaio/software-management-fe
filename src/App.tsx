import Page from './global/components/Page';
import Root from './global/components/Root';
import Router from './global/components/Router';

function App() {
  return (
    <Root>
      <Page>
        <Router />
      </Page>
    </Root>
  );
}

export default App;
