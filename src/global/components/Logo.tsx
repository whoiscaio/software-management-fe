import { styled } from 'styled-components';

const LogoContainer = styled.div`
  text-align: center;

  h1 span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <h1>manage<span>app</span></h1>
    </LogoContainer>
  );
}
