import { ReactNode, createContext, useState } from 'react';
import { IAccount } from '../types/accountTypes';

interface AuthContextData {
  jwt: string;
  account: IAccount;
}

export const AuthContext = createContext<AuthContextData>({
  jwt: '',
  account: {} as IAccount
});

export default function AuthContextProvider({ children }: { children: ReactNode; }) {
  const [account, setAccount] = useState<IAccount>({} as IAccount);
  const [jwt, setJwt] = useState<string>('');

  const contextValue: AuthContextData = {
    jwt,
    account
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
