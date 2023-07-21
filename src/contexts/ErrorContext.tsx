/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useState } from 'react';

interface ErrorContextData {
  error: string;
  handleSetError: (error: string) => void;
}

export const ErrorContext = createContext<ErrorContextData>({
  error: '',
  handleSetError: () => { }
});

export default function ErrorContextProvider({ children }: { children: ReactNode; }) {
  const [error, setError] = useState<string>('');

  function handleSetError(error: string) {
    setError(error);
  }

  const contextValue: ErrorContextData = {
    error,
    handleSetError
  };

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  );
}
