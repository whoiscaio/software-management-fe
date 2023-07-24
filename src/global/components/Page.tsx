import { ReactNode } from 'react';
import { styled } from 'styled-components';

type PageProps = {
  children: ReactNode;
  verticalAlign?: 'center'
};

type PageContainerProps = {
  $verticalAlign?: 'center';
};

const PageContainer = styled.main<PageContainerProps>`
  flex: 1;

  display: flex;

  align-items: ${({ $verticalAlign }) => $verticalAlign || 'initial'};
`;

export default function Page({ children, verticalAlign }: PageProps) {
  return (
    <PageContainer $verticalAlign={verticalAlign}>
      {children}
    </PageContainer>
  );
}
