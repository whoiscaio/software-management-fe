import { useContext } from 'react';
import { PhaseListContainer } from '../styles';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';

export default function PhaseList() {
  const { selectedWorkspace } = useContext(WorkspaceContext);

  console.log(selectedWorkspace.phases);

  return (
    <PhaseListContainer>
      {
        selectedWorkspace?.phases?.map((phase) => (
          <div className="phase-column" key={phase.id}>
            <header>
              <h3>{phase.name}</h3>
            </header>
          </div>
        ))
      }
    </PhaseListContainer>
  );
}
