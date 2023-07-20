import { useEffect } from 'react';
import { HttpClient } from './services/utils/HttpClient';

function App() {
  useEffect(() => {
    (async () => {
      const httpClient = new HttpClient();

      await httpClient.get('ping');
    })();
  }, []);

  return (
    <>
      Software development system
    </>
  );
}

export default App;
