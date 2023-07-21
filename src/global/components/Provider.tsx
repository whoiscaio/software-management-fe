import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import mainTheme from '../styles/theme/mainTheme';
import GlobalStyles from '../styles/GlobalStyles';
import AuthContextProvider from '../../contexts/AuthContext';
import ErrorContextProvider from '../../contexts/ErrorContext';

type ProviderProps = {
  children: ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <ErrorContextProvider>
        <AuthContextProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </AuthContextProvider>
      </ErrorContextProvider>
    </ThemeProvider>
  );
}
