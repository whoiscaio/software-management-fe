import { IPhase } from '../../../types/mainTypes';

type PhaseColumnProps = {
  phase: IPhase;
};

export default function PhaseColumn({ phase }: PhaseColumnProps) {
  console.log(phase.processes);

  return (
    <div className="phase-column" key={phase.id}>
      <header>
        <h3>{phase.name}</h3>
      </header>
      <div className="process-list">
        {
          phase.processes?.map((process) => (
            <button className="contrast-button scale-down-hover-effect button-pattern-measures">
              {process.name}
            </button>
          ))
        }
      </div>
    </div>
  );
}
