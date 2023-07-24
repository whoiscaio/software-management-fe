import { Edit, Trash } from 'lucide-react';
import { IProcess } from '../../../types/mainTypes';
import Subprocess from './Subprocess';
import { MouseEvent, useMemo, useState } from 'react';
import { ProcessContainer } from '../styles';
import Dialog from '../../../global/components/Dialog';

type ProcessProps = {
  process: IProcess;
};

export default function Process({ process }: ProcessProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
  const [isSubprocessListOpen, setIsSubprocessListOpen] = useState<boolean>(false);

  function handleOpenDeleteDialog(e: MouseEvent) {
    e.stopPropagation();
    setIsDeleteDialogOpen(true);
  }

  function handleEditProcess() {
    console.log('HANDLE EDIT PROCESS');
  }

  function handleDeleteProcess() {
    console.log('HANDLE DELETE PROCESS');

    setIsDeleteDialogOpen(false);
  }

  const openSize = useMemo(() => (
    61 * process.subprocesses.length + 71
  ), [process.subprocesses.length]);

  return (
    <>
      <ProcessContainer className={`process-button ${isSubprocessListOpen ? 'open' : ''}`} openSize={openSize}>
        <div className="main-process process-item" onClick={() => setIsSubprocessListOpen((prevState) => !prevState)}>
          <div className="tag button-pattern-measures contrast-button">Em andamento</div>
          <p>{process.name}</p>
          <div className="actions">
            <button type="button" onClick={handleOpenDeleteDialog}><Trash color="#DD0000" size={25} /></button>
            <button type="button" onClick={handleEditProcess}><Edit color="#0000BB" size={25} /></button>
          </div>
        </div>
        {
          process.subprocesses && process.subprocesses.length > 0 && (
            <div className="subprocess-list">
              {
                process.subprocesses.map((subprocess) => (
                  <Subprocess subprocess={subprocess} />
                ))
              }
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
    </>
  );
}
