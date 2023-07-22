import { SidebarContainer } from '../styles';
import { useContext } from 'react';
import { TeamContext } from '../../../contexts/TeamContext';

export default function Sidebar() {
  const { teams, selectedTeam, selectTeam } = useContext(TeamContext);

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
              className={`contrast-button ${team.id === selectedTeam.id ? 'selected' : ''}`}
              onClick={() => selectTeam(team.id)}
            >
              {team.name}
            </button>
          ))
        }
      </div>
    </SidebarContainer>
  );
}
