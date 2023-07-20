import { ReactNode } from 'react';
import RootContainer from './styles';

type RootProps = {
  children: ReactNode;
};

export default function Root({ children }: RootProps) {
  return (
    <RootContainer>
      {children}
    </RootContainer>
  );
}
