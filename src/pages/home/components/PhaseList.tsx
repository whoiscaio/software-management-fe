import { useContext } from 'react';
import { PhaseListContainer } from '../styles';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import Phase from './Phase';

export default function PhaseList() {
  const { selectedWorkspace } = useContext(WorkspaceContext);

  console.log(selectedWorkspace.phases);

  return (
    <PhaseListContainer>
      {
        selectedWorkspace?.phases?.map((phase) => (
          <Phase key={phase.id} phase={phase} />
        ))
      }
    </PhaseListContainer>
  );
}
