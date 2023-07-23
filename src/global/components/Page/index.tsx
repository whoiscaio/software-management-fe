import { ReactNode } from 'react';
import PageContainer from './styles';

type PageProps = {
  children: ReactNode;
  verticalAlign?: 'center'
};

export default function Page({ children, verticalAlign }: PageProps) {
  return (
    <PageContainer $verticalAlign={verticalAlign}>
      {children}
    </PageContainer>
  );
}
