import { styled } from 'styled-components';

type PageContainerProps = {
  $verticalAlign?: 'center';
};

const PageContainer = styled.main<PageContainerProps>`
  flex: 1;

  display: flex;

  align-items: ${({ $verticalAlign }) => $verticalAlign || 'initial'};
`;

export default PageContainer;
