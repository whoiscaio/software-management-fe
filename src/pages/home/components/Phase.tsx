import { Edit, Plus, X } from 'lucide-react';
import { IPhase, PhaseDTO, ProcessDTO } from '../../../global/types/mainTypes';
import Process from './Process';
import { useContext, useState } from 'react';
import { PhaseContainer } from '../styles';
import Dialog from '../../../global/components/dialogs/Dialog';
import FormModal from '../../../global/components/dialogs/FormModal';
import PhaseService from '../../../services/PhaseService';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import { AuthContext } from '../../../contexts/AuthContext';
import ProcessService from '../../../services/ProcessService';

type PhaseProps = {
  phase: IPhase;
  phases: IPhase[];
};

export default function Phase({ phase, phases }: PhaseProps) {
  const { token } = useContext(AuthContext);
  const { selectedWorkspace, update } = useContext(WorkspaceContext);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isEditPhaseFormOpen, setIsEditPhaseFormOpen] = useState<boolean>(false);
  const [isCreateProcessFormOpen, setIsCreateProcessFormOpen] = useState<boolean>(false);

  async function handleEditPhase(name: string, description?: string) {
    const body: PhaseDTO = {
      name,
      description: description || '',
      workspace_id: selectedWorkspace.id
    };

    await PhaseService.update(phase.id, body, token);

    setIsEditPhaseFormOpen(false);
    update();
  }

  async function handleDeletePhase() {
    await PhaseService.delete(phase.id, token);

    update();
  }

  async function handleCreateProcess(name: string, description?: string) {
    const body: ProcessDTO = {
      name,
      description: description || '',
      phase_id: phase.id,
      concluded: false
    };

    await ProcessService.create(body, token);

    setIsCreateProcessFormOpen(false);
    update();
  }

  return (
    <>
      <PhaseContainer>
        <header>
          <h3>{phase.name}</h3>
          <button
            type="button"
            className="scale-down-hover-effect"
            onClick={() => setIsDeleteDialogOpen(true)}
          ><X color="#000000" size={30} /></button>
        </header>
        <div className="process-list">
          {
            phase.processes &&
              phase.processes.length > 0
              ? phase.processes?.sort((a, b) => a.order - b.order).map((process) => (
                <Process key={process.id} phaseId={phase.id} phases={phases} process={process} />
              ))
              : (
                <p>Essa fase não possui nenhum processo.</p>
              )
          }
        </div>
        <div className="action">
          <button
            type="button"
            onClick={() => setIsEditPhaseFormOpen(true)}
            className="contrast-button button-pattern-measures scale-down-hover-effect"
          ><Edit size={25} />Editar Fase</button>
          <button
            type="button"
            onClick={() => setIsCreateProcessFormOpen(true)}
            className="contrast-button button-pattern-measures scale-down-hover-effect"
          ><Plus size={30} /> Novo processo</button>
        </div>
      </PhaseContainer>
      {
        isDeleteDialogOpen && (
          <Dialog
            title="Você tem certeza?"
            description="Deletar essa fase não influenciará as demais, mas deletará todos os processos e subprocessos associados à ela."
            confirmButtonText="Sim, deletar fase"
            close={() => setIsDeleteDialogOpen(false)}
            confirm={handleDeletePhase}
          />
        )
      }
      {
        isEditPhaseFormOpen && (
          <FormModal
            action={handleEditPhase}
            close={() => setIsEditPhaseFormOpen(false)}
            title="Editar Fase"
            confirmButtonText="Editar Fase"
            text1={phase.name}
            text2={phase.description}
          />
        )
      }
      {
        isCreateProcessFormOpen && (
          <FormModal
            action={handleCreateProcess}
            close={() => setIsCreateProcessFormOpen(false)}
            title="Criar processo"
            confirmButtonText="Criar processo"
          />
        )
      }
    </>
  );
}
