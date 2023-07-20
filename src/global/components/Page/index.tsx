import { ReactNode } from 'react';
import PageContainer from './styles';

type PageProps = {
  children: ReactNode;
};

export default function Page({ children }: PageProps) {
  return (
    <PageContainer>
      <div className="app-context">
        {children}
      </div>
    </PageContainer>
  );
}
