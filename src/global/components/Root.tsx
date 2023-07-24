import { ReactNode } from 'react';
import { styled } from 'styled-components';

type RootProps = {
  children: ReactNode;
};

const RootContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};

  width: 100vw;
  height: 100vh;

  display: flex;

  overflow: hidden;
`;

export default function Root({ children }: RootProps) {
  return (
    <RootContainer>
      {children}
    </RootContainer>
  );
}
