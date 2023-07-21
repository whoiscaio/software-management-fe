/* eslint-disable @typescript-eslint/no-empty-function */

import { ReactNode, createContext, useState } from 'react';

import { IAccount } from '../types/accountTypes';

interface AuthContextData {
  token: string;
  account: IAccount;
  isAuthenticated: boolean;
  authenticate: (user: IAccount) => void;
}

export const AuthContext = createContext<AuthContextData>({
  token: '',
  account: {} as IAccount,
  isAuthenticated: false,
  authenticate: () => { },
});

export default function AuthContextProvider({ children }: { children: ReactNode; }) {
  const [account, setAccount] = useState<IAccount>({} as IAccount);
  const [token, setToken] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  function authenticate(user: IAccount) {
    setAccount(user);
    setToken(token);
    setIsAuthenticated(true);
  }

  const contextValue: AuthContextData = {
    token,
    account,
    isAuthenticated,
    authenticate
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
