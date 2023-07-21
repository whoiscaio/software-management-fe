import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './global/components/Footer';
import Header from './global/components/Header';
import Root from './global/components/Root';
import Router from './global/components/Router';
import { ErrorContext } from './contexts/ErrorContext';

function App() {
  const { error } = useContext(ErrorContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <Root>
        <Header />
        <div className="content-wrapper">
          <Router />
        </div>
        <Footer />
      </Root>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
