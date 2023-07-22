import { SidebarContainer } from '../styles';
import { useContext } from 'react';
import { TeamContext } from '../../../contexts/TeamContext';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';

export default function Sidebar() {
  const { teams, selectedTeam, selectTeam } = useContext(TeamContext);
  const { reset: workspaceReset } = useContext(WorkspaceContext);

  function handleSelectTeam(teamId: string) {
    workspaceReset();
    selectTeam(teamId);
  }

  return (
    <SidebarContainer>
      <div className="heading">
        <h3>Seus times</h3>
      </div>
      <div className="team-list">
        {
          teams.map((team) => (
            <button
              key={team.id}
              type="button"
              className={`contrast-button button-pattern-measures ${team.id === selectedTeam.id ? 'selected' : ''}`}
              onClick={() => handleSelectTeam(team.id)}
            >
              {team.name}
            </button>
          ))
        }
      </div>
    </SidebarContainer>
  );
}
