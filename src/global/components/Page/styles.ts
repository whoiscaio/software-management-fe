import { styled } from 'styled-components';

const PageContainer = styled.main`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 2rem;

  width: 90%;
  height: 100%;
  max-width: 1400px;
  max-height: 700px;

  padding: 1.4rem;

  box-shadow: 0 5px 10px 0px rgba(0,0,0,0.06);
  -webkit-box-shadow: 0 5px 10px 0px rgba(0,0,0,0.06);
  -moz-box-shadow: 0 5px 10px 0px rgba(0,0,0,0.06);
`;

export default PageContainer;
