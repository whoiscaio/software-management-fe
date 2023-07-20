import { ReactNode, createContext, useState } from 'react';
import { IAccount } from '../types/accountTypes';

interface AuthContextData {
  jwt: string;
  account: IAccount;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextData>({
  jwt: '',
  account: {} as IAccount,
  isAuthenticated: false
});

export default function AuthContextProvider({ children }: { children: ReactNode; }) {
  const [account] = useState<IAccount>({} as IAccount);
  const [jwt] = useState<string>('');
  const [isAuthenticated] = useState<boolean>(false);

  const contextValue: AuthContextData = {
    jwt,
    account,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
