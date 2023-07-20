import { styled } from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.main};

  text-align: center;

  padding: 1.5rem;

  font-size: 1.2rem;

  a {
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default FooterContainer;
