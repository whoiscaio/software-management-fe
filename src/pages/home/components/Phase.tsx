import { IPhase } from '../../../types/mainTypes';

type PhaseProps = {
  phase: IPhase;
};

export default function Phase({ phase }: PhaseProps) {
  return (
    <div className="phase" key={phase.id}>
      <header>
        <h3>{phase.name}</h3>
      </header>
      <div className="process-list">
        {
          phase.processes?.map((process) => (
            <button className="process-button">
              <div className="tag button-pattern-measures contrast-button">Em andamento</div>
              <p>{process.name}</p>
            </button>
          ))
        }
      </div>
    </div>
  );
}
