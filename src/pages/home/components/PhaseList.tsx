import { useContext } from 'react';
import { PhaseListContainer } from '../styles';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import PhaseColumn from './PhaseColumn';

export default function PhaseList() {
  const { selectedWorkspace } = useContext(WorkspaceContext);

  console.log(selectedWorkspace.phases);

  return (
    <PhaseListContainer>
      {
        selectedWorkspace?.phases?.map((phase) => (
          <PhaseColumn key={phase.id} phase={phase} />
        ))
      }
    </PhaseListContainer>
  );
}
