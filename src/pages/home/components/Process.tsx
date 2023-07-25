import { Edit, Plus, Trash } from 'lucide-react';
import { IPhase, IProcess, ProcessDTO, SubprocessDTO } from '../../../global/types/mainTypes';
import Subprocess from './Subprocess';
import { MouseEvent, useContext, useMemo, useState } from 'react';
import { ProcessContainer } from '../styles';
import Dialog from '../../../global/components/dialogs/Dialog';
import FormModal from '../../../global/components/dialogs/FormModal';
import ProcessService from '../../../services/ProcessService';
import { AuthContext } from '../../../contexts/AuthContext';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import SubprocessService from '../../../services/SubprocessService';
import Checkbox from '../../../global/components/Checkbox';

type ProcessProps = {
  process: IProcess;
  phaseId: string;
  phases: IPhase[];
};

export default function Process({ process, phaseId, phases }: ProcessProps) {
  const { token } = useContext(AuthContext);
  const { update } = useContext(WorkspaceContext);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isSubprocessListOpen, setIsSubprocessListOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [isCreateSubprocessFormOpen, setIsCreateSubprocessFormOpen] = useState<boolean>(false);

  function handleToggleSubprocessList() {
    setIsSubprocessListOpen((prevState) => !prevState);
  }

  function handleOpenDeleteDialog(e: MouseEvent) {
    e.stopPropagation();
    setIsDeleteDialogOpen(true);
  }

  function handleOpenEditForm(e: MouseEvent) {
    e.stopPropagation();
    setIsEditFormOpen(true);
  }

  async function handleCreateSubprocess(name: string, description?: string) {
    const body: SubprocessDTO = {
      name,
      description: description || '',
      process_id: process.id,
      concluded: false
    };

    await SubprocessService.create(body, token);

    setIsCreateSubprocessFormOpen(false);
    update();
  }

  async function handleDeleteProcess() {
    await ProcessService.delete(process.id, token);

    update();
  }

  function handleToggleProcessState(e: MouseEvent) {
    e.stopPropagation();

    handleEditProcess(
      process.name,
      process.description,
      phaseId,
      true
    );
  }

  async function handleEditProcess(name: string, description?: string, newPhaseId?: string, toggleState?: boolean) {
    const body: ProcessDTO = {
      name,
      description: description || '',
      phase_id: newPhaseId || phaseId,
      concluded: toggleState ? !process.concluded : process.concluded
    };

    await ProcessService.update(process.id, body, token);

    setIsEditFormOpen(false);
    update();
  }

  const openSize = useMemo(() => (
    54 * process.subprocesses.length + 150
  ), [process.subprocesses.length]);

  return (
    <>
      <ProcessContainer className={`process-button ${isSubprocessListOpen ? 'open' : ''}`} openSize={openSize}>
        <div className="main-process process-item" onClick={handleToggleSubprocessList}>
          <Checkbox action={handleToggleProcessState} checked={process.concluded} />
          <p>{process.name}</p>
          <div className="actions">
            <button type="button" onClick={handleOpenDeleteDialog}><Trash color="#DD0000" size={25} /></button>
            <button type="button" onClick={handleOpenEditForm}><Edit color="#0000BB" size={25} /></button>
          </div>
        </div>
        <div className="subprocesses-wrapper">
          <div className="subprocess-list">
            {
              process.subprocesses && process.subprocesses.length > 0 && process.subprocesses.sort((a, b) => a.order - b.order).map((subprocess) => (
                <Subprocess subprocess={subprocess} processId={process.id} />
              ))
            }
          </div>
          <div className="subprocess-action">
            <button
              type="button"
              onClick={() => setIsCreateSubprocessFormOpen(true)}
              className="button-pattern-measures contrast-button scale-down-hover-effect"
            ><Plus /> Novo subprocesso</button>
          </div>
        </div>
      </ProcessContainer>
      {
        isDeleteDialogOpen && (
          <Dialog
            title="Você tem certeza?"
            description="Deletar esse processo não influenciará os demais processos ou fases, mas deletará todos os subprocessos associados a ele."
            confirmButtonText="Sim, deletar processo"
            close={() => setIsDeleteDialogOpen(false)}
            confirm={handleDeleteProcess}
          />
        )
      }
      {
        isEditFormOpen && (
          <FormModal
            action={handleEditProcess}
            close={() => setIsEditFormOpen(false)}
            title="Editar processo"
            confirmButtonText="Editar processo"
            text1={process.name}
            text2={process.description}
            options={phases}
            defaultOption={phases.find((phase) => phase.id === phaseId)}
          />
        )
      }
      {
        isCreateSubprocessFormOpen && (
          <FormModal
            action={handleCreateSubprocess}
            close={() => setIsCreateSubprocessFormOpen(false)}
            title="Criar subprocesso"
            confirmButtonText="Criar subprocesso"
          />
        )
      }
    </>
  );
}
