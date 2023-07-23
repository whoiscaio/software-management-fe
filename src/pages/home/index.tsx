import Page from '../../global/components/Page';
import HomePageContainer from './styles';
import { useContext } from 'react';
import { TeamContext } from '../../contexts/TeamContext';
import { WorkspaceContext } from '../../contexts/WorkspaceContext';
import PhaseList from './components/PhaseList';
import { Plus } from 'lucide-react';

export default function Home() {
  const { selectedTeam } = useContext(TeamContext);
  const { selectedWorkspace } = useContext(WorkspaceContext);

  function handleCreatePhase() {
    console.log('CREATE NEW PHASE');
  }

  return (
    <Page>
      <HomePageContainer>
        {
          selectedTeam && selectedTeam.name && selectedWorkspace && selectedWorkspace.name ? (
            <>
              <header>
                <div className="headings">
                  <h1>Gerenciamento de processos</h1>
                  <h2>{selectedTeam.name}</h2>
                </div>
                <div className="action">
                  <button
                    type="button"
                    onClick={handleCreatePhase}
                    className="contrast-button button-pattern-measures scale-down-hover-effect"
                  ><Plus /> Nova Fase</button>
                </div>
              </header>
              <PhaseList />
            </>
          ) : (
            <p>Nenhum workspace foi selecionado</p>
          )
        }
      </HomePageContainer>
    </Page>
  );
}
