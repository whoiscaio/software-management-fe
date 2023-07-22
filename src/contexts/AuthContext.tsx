/* eslint-disable @typescript-eslint/no-empty-function */

import { ReactNode, createContext, useEffect, useState } from 'react';

import { IAccount } from '../types/accountTypes';

interface AuthContextData {
  token: string;
  account: IAccount;
  isAuthenticated: boolean;
  authenticate: (user: IAccount, token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  token: '',
  account: {} as IAccount,
  isAuthenticated: false,
  authenticate: () => { },
  logout: () => { },
});

export default function AuthContextProvider({ children }: { children: ReactNode; }) {
  const [account, setAccount] = useState<IAccount>({} as IAccount);
  const [token, setToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    console.log(token);
  }, [token]);

  function authenticate(user: IAccount, token: string) {
    setAccount(user);
    setToken(token);
    setIsAuthenticated(true);
  }

  function logout() {
    setAccount({} as IAccount);
    setToken('');
    setIsAuthenticated(false);
  }

  const contextValue: AuthContextData = {
    token,
    account,
    isAuthenticated,
    authenticate,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
