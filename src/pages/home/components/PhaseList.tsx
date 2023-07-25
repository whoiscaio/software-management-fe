import { useContext } from 'react';
import { PhaseListContainer } from '../styles';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import Phase from './Phase';

export default function PhaseList() {
  const { selectedWorkspace } = useContext(WorkspaceContext);

  return (
    <PhaseListContainer>
      {
        selectedWorkspace?.phases?.sort((a, b) => a.order - b.order).map((phase) => (
          <Phase key={phase.id} phase={phase} phases={selectedWorkspace.phases} />
        ))
      }
    </PhaseListContainer>
  );
}
