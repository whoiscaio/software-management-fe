import { styled } from 'styled-components';

const RootContainer = styled.div`
  background: ${({ theme }) => theme.colors.main};

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default RootContainer;
