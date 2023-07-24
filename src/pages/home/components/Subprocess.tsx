import { Edit, Trash } from 'lucide-react';
import { ISubprocess } from '../../../types/mainTypes';

type SubprocessProps = {
  subprocess: ISubprocess;
};

export default function Subprocess({ subprocess }: SubprocessProps) {
  function handleEditSubprocess(subprocessId: string) {
    console.log('HANDLE EDIT SUBPROCESS')
  }

  function handleDeleteSubprocess(subprocessId: string) {
    console.log('HANDLE DELETE SUBPROCESS')
  }

  return (
    <div className="subprocess-button">
      <div className="main-process process-item">
        <div className="tag button-pattern-measures contrast-button">Em andamento</div>
        <p>{subprocess.name}</p>
        <div className="actions">
          <button type="button" onClick={() => handleDeleteSubprocess(subprocess.id)}><Trash color="#DD0000" size={25} /></button>
          <button type="button" onClick={() => handleEditSubprocess(subprocess.id)}><Edit color="#0000BB" size={25} /></button>
        </div>
      </div>
    </div>
  );
}
