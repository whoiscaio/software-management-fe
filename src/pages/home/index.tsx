import Page from '../../global/components/Page';
import HomePageContainer from './styles';
import Sidebar from './components/Sidebar';
import HomeHeader from './components/HomeHeader';
import { useContext, useEffect } from 'react';
import { TeamContext } from '../../contexts/TeamContext';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';
import PhaseList from './components/PhaseList';

export default function Home() {
  const { selectedTeam } = useContext(TeamContext);
  const { selectedWorkspace, selectWorkspace, handleSetWorkspaces } = useContext(WorkspaceContext);

  function handleSelectWorkspace(workspaceId: string) {
    selectWorkspace(workspaceId);

    // gather processes
  }

  useEffect(() => {
    if (!selectedTeam) return;

    handleSetWorkspaces(selectedTeam.workspaces);
  }, [selectedTeam, handleSetWorkspaces]);

  return (
    <Page>
      <HomePageContainer>
        <Sidebar />
        <div className="main-content">
          {
            selectedTeam?.name ? (
              <>
                <HomeHeader selectWorkspace={handleSelectWorkspace} />
                {
                  selectedWorkspace?.name ? (
                    <PhaseList />
                  ) : <div>Nenhum workspace foi selecionado</div>
                }
              </>
            ) : (
              <div>Nenhum time foi selecionado</div>
            )
          }
        </div>
      </HomePageContainer>
    </Page>
  );
}
