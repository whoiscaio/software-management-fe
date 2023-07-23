import { Edit, Trash } from 'lucide-react';
import { IProcess } from '../../../types/mainTypes';

type ProcessProps = {
  process: IProcess
}

export default function Process({ process }: ProcessProps) {
  function handleEditProcess(processId: string) {
    console.log('HANDLE EDIT PROCESS');
  }

  function handleDeleteProcess(processId: string) {
    console.log('HANDLE DELETE PROCESS');
  }

  return (
    <button className="process-button">
      <div className="tag button-pattern-measures contrast-button">Em andamento</div>
      <p>{process.name}</p>
      <div className="actions">
        <button type="button" onClick={() => handleDeleteProcess(process.id)}><Trash color="#DD0000" size={25} /></button>
        <button type="button" onClick={() => handleEditProcess(process.id)}><Edit color="#0000BB" size={25} /></button>
      </div>
    </button>
  )
}
