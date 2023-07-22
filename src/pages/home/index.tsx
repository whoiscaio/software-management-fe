import Page from '../../global/components/Page';
import HomePageContainer from './styles';
import Sidebar from './components/Sidebar';
import HomeHeader from './components/HomeHeader';
import { useContext, useEffect } from 'react';
import { TeamContext } from '../../contexts/TeamContext';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';

export default function Home() {
  const { selectedTeam } = useContext(TeamContext);
  const { handleSetWorkspaces } = useContext(WorkspaceContext);

  useEffect(() => {
    if (!selectedTeam) return;

    console.log(selectedTeam);

    handleSetWorkspaces(selectedTeam.workspaces);
  }, [selectedTeam, handleSetWorkspaces]);

  return (
    <Page>
      <HomePageContainer>
        <Sidebar />
        <div className="main-content">
          {
            selectedTeam ? (
              <>
                <HomeHeader />
                <div className="phase-listing">Phase list</div>
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
