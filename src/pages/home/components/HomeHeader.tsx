import { useContext } from 'react';
import { HomeHeaderContainer } from '../styles';
import { TeamContext } from '../../../contexts/TeamContext';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';

export default function HomeHeader() {
  const { selectedTeam } = useContext(TeamContext);
  const { selectedWorkspace, workspaces, selectWorkspace } = useContext(WorkspaceContext);

  return (
    <HomeHeaderContainer>
      <div className="heading">
        <h1>{selectedTeam.name} Workspaces</h1>
      </div>
      <div className="workspaces-list">
        {
          workspaces?.map((workspace) => (
            <button
              className={`contrast-button button-pattern-measures ${selectedWorkspace.id === workspace.id ? 'selected' : ''}`}
              type="button"
              key={workspace.id}
              onClick={() => selectWorkspace(workspace.id)}
            >{workspace.name}</button>
          ))
        }
      </div>
    </HomeHeaderContainer>
  );
}
