import { Edit, Trash } from 'lucide-react';
import { IProcess } from '../../../types/mainTypes';
import Subprocess from './Subprocess';
import { useMemo, useState } from 'react';
import { ProcessContainer } from '../styles';

type ProcessProps = {
  process: IProcess;
};

export default function Process({ process }: ProcessProps) {
  const [isSubprocessListOpen, setIsSubprocessListOpen] = useState<boolean>(false);

  function handleEditProcess(processId: string) {
    console.log('HANDLE EDIT PROCESS');
  }

  function handleDeleteProcess(processId: string) {
    console.log('HANDLE DELETE PROCESS');
  }

  const openSize = useMemo(() => (
    61 * process.subprocesses.length + 71
  ), [process.subprocesses.length]);

  return (
    <ProcessContainer className={`process-button ${isSubprocessListOpen ? 'open' : ''}`} openSize={openSize}>
      <div className="main-process process-item" onClick={() => setIsSubprocessListOpen((prevState) => !prevState)}>
        <div className="tag button-pattern-measures contrast-button">Em andamento</div>
        <p>{process.name}</p>
        <div className="actions">
          <button type="button" onClick={() => handleDeleteProcess(process.id)}><Trash color="#DD0000" size={25} /></button>
          <button type="button" onClick={() => handleEditProcess(process.id)}><Edit color="#0000BB" size={25} /></button>
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
  );
}
