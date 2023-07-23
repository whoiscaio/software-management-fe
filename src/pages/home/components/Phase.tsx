import { Plus, X } from 'lucide-react';
import { IPhase } from '../../../types/mainTypes';
import Process from './Process';

type PhaseProps = {
  phase: IPhase;
};

export default function Phase({ phase }: PhaseProps) {

  function handleEditPhase() {
    console.log('HANDLE EDIT PHASE');
  }

  function handleDeletePhase() {
    console.log('HANDLE DELETE PHASE');
  }

  function handleCreateProcess() {
    console.log('CREATE NEW PROCESS');
  }

  return (
    <div className="phase" key={phase.id}>
      <header>
        <h3>{phase.name}</h3>
        <button type="button" onClick={handleDeletePhase}><X color="#DD0000" size={30} /></button>
      </header>
      <div className="process-list">
        {
          phase.processes?.map((process) => <Process process={process} />)
        }
      </div>
      <div className="action">
        <button
          type="button"
          onClick={handleEditPhase}
          className="contrast-button button-pattern-measures scale-down-hover-effect"
        ><Plus size={30} />Editar {phase.name}</button>
        <button
          type="button"
          onClick={handleCreateProcess}
          className="contrast-button button-pattern-measures scale-down-hover-effect"
        ><Plus size={30} /> Novo processo</button>
      </div>
    </div>
  );
}
