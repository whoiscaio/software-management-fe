import { useContext } from 'react';
import { PhaseListContainer } from '../styles';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import Phase from './Phase';

export default function PhaseList() {
  const { selectedWorkspace } = useContext(WorkspaceContext);

  return (
    <PhaseListContainer>
      {
        selectedWorkspace?.phases?.sort((a, b) => {
          if (a.name === 'Concluídos') return 1;
          if (b.name === 'Concluídos') return -1;
          return a.order - b.order;
        }).map((phase) => (
          <Phase key={phase.id} phase={phase} phases={selectedWorkspace.phases} />
        ))
      }
    </PhaseListContainer>
  );
}
