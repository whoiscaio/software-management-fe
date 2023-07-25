import { Edit, Trash } from 'lucide-react';
import { IProcess, ProcessDTO } from '../../../types/mainTypes';
import Subprocess from './Subprocess';
import { MouseEvent, useContext, useMemo, useState } from 'react';
import { ProcessContainer } from '../styles';
import Dialog from '../../../global/components/dialogs/Dialog';
import FormModal from '../../../global/components/dialogs/FormModal';
import ProcessService from '../../../services/ProcessService';
import { AuthContext } from '../../../contexts/AuthContext';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';

type ProcessProps = {
  process: IProcess;
  phaseId: string;
};

export default function Process({ process, phaseId }: ProcessProps) {
  const { token } = useContext(AuthContext);
  const { update } = useContext(WorkspaceContext);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isSubprocessListOpen, setIsSubprocessListOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);

  function handleToggleSubprocessList() {
    if (!process.subprocesses || process.subprocesses.length < 1) return;

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

  async function handleDeleteProcess() {
    await ProcessService.delete(process.id, token);

    update();
  }

  async function handleEditProcess(name: string, description?: string) {
    const body: ProcessDTO = {
      name,
      description: description || '',
      phase_id: phaseId
    };

    await ProcessService.update(process.id, body, token);

    setIsEditFormOpen(false);
    update();
  }

  const openSize = useMemo(() => (
    61 * process.subprocesses.length + 90
  ), [process.subprocesses.length]);

  return (
    <>
      <ProcessContainer className={`process-button ${isSubprocessListOpen ? 'open' : ''}`} openSize={openSize}>
        <div className="main-process process-item" onClick={handleToggleSubprocessList}>
          <div className="tag button-pattern-measures contrast-button">Em andamento</div>
          <p>{process.name}</p>
          <div className="actions">
            <button type="button" onClick={handleOpenDeleteDialog}><Trash color="#DD0000" size={25} /></button>
            <button type="button" onClick={handleOpenEditForm}><Edit color="#0000BB" size={25} /></button>
          </div>
        </div>
        {
          process.subprocesses && process.subprocesses.length > 0 && (
            <div className="subprocesses-wrapper">
              <div className="subprocess-list">
                {
                  process.subprocesses.map((subprocess) => (
                    <Subprocess subprocess={subprocess} />
                  ))
                }
              </div>
            </div>
          )
        }
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
          />
        )
      }
    </>
  );
}
