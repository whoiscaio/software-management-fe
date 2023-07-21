import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import mainTheme from '../styles/theme/mainTheme';
import GlobalStyles from '../styles/GlobalStyles';
import AuthContextProvider from '../../contexts/AuthContext';
import TeamContextProvider from '../../contexts/TeamContext';

type ProviderProps = {
  children: ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <AuthContextProvider>
        <TeamContextProvider>
          <BrowserRouter>
            {children}
          </BrowserRouter>
        </TeamContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
