import { Edit, Trash } from 'lucide-react';
import { ISubprocess } from '../../../types/mainTypes';
import { useState } from 'react';
import Dialog from '../../../global/components/dialogs/Dialog';
import FormModal from '../../../global/components/dialogs/FormModal';

type SubprocessProps = {
  subprocess: ISubprocess;
};

export default function Subprocess({ subprocess }: SubprocessProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);

  async function handleEditSubprocess(name: string, description?: string) {
    console.log('HANDLE EDIT SUBPROCESS');

    console.log(name, description);

    setIsEditFormOpen(false);
  }

  function handleDeleteSubprocess() {
    console.log('HANDLE DELETE SUBPROCESS');

    setIsDeleteDialogOpen(false);
  }

  return (
    <>
      <div className="subprocess-button">
        <div className="main-process process-item">
          <div className="tag button-pattern-measures contrast-button">Em andamento</div>
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
