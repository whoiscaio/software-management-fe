import { Edit, Trash } from 'lucide-react';
import { ISubprocess } from '../../../types/mainTypes';
import { useState } from 'react';
import Dialog from '../../../global/components/Dialog';

type SubprocessProps = {
  subprocess: ISubprocess;
};

export default function Subprocess({ subprocess }: SubprocessProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  function handleEditSubprocess() {
    console.log('HANDLE EDIT SUBPROCESS')
  }

  function handleDeleteSubprocess() {
    console.log('HANDLE DELETE SUBPROCESS')

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
            <button type="button" onClick={handleEditSubprocess}><Edit color="#0000BB" size={25} /></button>
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
    </>
  );
}
