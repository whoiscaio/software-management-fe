import { Edit, Plus, X } from 'lucide-react';
import { IPhase } from '../../../types/mainTypes';
import Process from './Process';
import { useState } from 'react';
import { PhaseContainer } from '../styles';
import Dialog from '../../../global/components/Dialog';

type PhaseProps = {
  phase: IPhase;
};

export default function Phase({ phase }: PhaseProps) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);

  function handleEditPhase() {
    console.log('HANDLE EDIT PHASE');
  }

  function handleDeletePhase() {
    console.log('HANDLE DELETE PHASE');

    setIsDeleteDialogOpen(false);
  }

  function handleCreateProcess() {
    console.log('CREATE NEW PROCESS');
  }

  return (
    <>
      <PhaseContainer>
        <header>
          <h3>{phase.name}</h3>
          <button
            type="button"
            className="scale-down-hover-effect"
            onClick={() => setIsDeleteDialogOpen(true)}
          ><X color="#000000" size={30} /></button>
        </header>
        <div className="process-list">
          {
            phase.processes && phase.processes.length > 0 ? phase.processes?.map((process) => <Process key={process.id} process={process} />) : (
              <p>Essa fase não possui nenhum processo.</p>
            )
          }
        </div>
        <div className="action">
          <button
            type="button"
            onClick={handleEditPhase}
            className="contrast-button button-pattern-measures scale-down-hover-effect"
          ><Edit size={25} />Editar Fase</button>
          <button
            type="button"
            onClick={handleCreateProcess}
            className="contrast-button button-pattern-measures scale-down-hover-effect"
          ><Plus size={30} /> Novo processo</button>
        </div>
      </PhaseContainer>
      {
        isDeleteDialogOpen && (
          <Dialog
            title="Você tem certeza?"
            description="Deletar essa fase não influenciará as demais, mas deletará todos os processos e subprocessos associados à ela."
            confirmButtonText="Sim, deletar fase"
            close={() => setIsDeleteDialogOpen(false)}
            confirm={handleDeletePhase}
          />
        )
      }
    </>
  );
}
