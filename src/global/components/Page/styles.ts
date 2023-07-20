import { styled } from 'styled-components';

type PageContainerProps = {
  $verticalAlign?: 'center';
};

const PageContainer = styled.main<PageContainerProps>`
  height: 100%;

  display: flex;
  justify-content: center;

  align-items: ${({ $verticalAlign }) => $verticalAlign || 'initial'};
`;

export default PageContainer;
