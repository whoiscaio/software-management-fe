import { Edit, Trash } from 'lucide-react';
import { ISubprocess, SubprocessDTO } from '../../../types/mainTypes';
import { MouseEvent, useContext, useState } from 'react';
import Dialog from '../../../global/components/dialogs/Dialog';
import FormModal from '../../../global/components/dialogs/FormModal';
import SubprocessService from '../../../services/SubprocessService';
import { AuthContext } from '../../../contexts/AuthContext';
import { WorkspaceContext } from '../../../contexts/WorkspaceContext';
import Checkbox from '../../../global/components/Checkbox';

type SubprocessProps = {
  subprocess: ISubprocess;
  processId: string;
};

export default function Subprocess({ subprocess, processId }: SubprocessProps) {
  const { token } = useContext(AuthContext);
  const { update } = useContext(WorkspaceContext);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);

  function handleToggleSubprocessState(e: MouseEvent) {
    e.stopPropagation();

    handleEditSubprocess(
      subprocess.name,
      subprocess.description,
      processId,
      true,
    );
  }

  async function handleEditSubprocess(name: string, description?: string, newProcessId?: string, toggleState?: boolean) {
    const body: SubprocessDTO = {
      name,
      description: description || '',
      process_id: newProcessId || processId,
      concluded: toggleState ? !subprocess.concluded : subprocess.concluded,
    };

    await SubprocessService.update(subprocess.id, body, token);

    setIsEditFormOpen(false);
    update();
  }

  async function handleDeleteSubprocess() {
    await SubprocessService.delete(subprocess.id, token);
    setIsDeleteDialogOpen(false);
    update();
  }

  return (
    <>
      <div className="subprocess-button">
        <div className="main-process process-item" onClick={handleToggleSubprocessState}>
          <Checkbox checked={subprocess.concluded} />
          <p>{subprocess.name}</p>
          <div className="actions">
            <button type="button" onClick={() => setIsDeleteDialogOpen(true)}><Trash color="#DD0000" size={25} /></button>
            <button type="button" onClick={() => setIsEditFormOpen(true)}><Edit color="#0000BB" size={25} /></button>
          </div>
        </div>
      </div>
      {
        isDeleteDialogOpen && (
          <Dialog
            title="Você tem certeza?"
            description="Deletar esse subprocesso não influenciará os demais processos."
            confirmButtonText="Sim, deletar subprocesso"
            close={() => setIsDeleteDialogOpen(false)}
            confirm={handleDeleteSubprocess}
          />
        )
      }
      {
        isEditFormOpen && (
          <FormModal
            action={handleEditSubprocess}
            close={() => setIsEditFormOpen(false)}
            title="Editar subprocesso"
            confirmButtonText="Editar subprocesso"
            text1={subprocess.name}
            text2={subprocess.description}
          />
        )
      }
    </>
  );
}
