import Page from '../../global/components/Page';
import HomePageContainer from './styles';
import Sidebar from './components/Sidebar';
import HomeHeader from './components/HomeHeader';
import { useContext, useEffect } from 'react';
import { TeamContext } from '../../contexts/TeamContext';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

export default function Home() {
  const { selectedTeam } = useContext(TeamContext);
  const { selectedWorkspace } = useContext(WorkspaceContext);

  return (
    <Page>
      <HomePageContainer>
        {
          selectedTeam && selectedTeam.name && selectedWorkspace && selectedWorkspace.name ? (
            <>
              <header>
                <h1>Gerenciamento de processos</h1>
                <h2>{selectedTeam.name}</h2>
              </header>
            </>
          ) : (
            <p>Nenhum workspace foi selecionado</p>
          )
        }
      </HomePageContainer>
    </Page>
  );
}
