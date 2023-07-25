export interface SubprocessDTO {
  name: string;
  description: string;
  process_id: string;
}

export interface ProcessDTO {
  name: string;
  description: string;
  phase_id: string;
}

export interface PhaseDTO {
  name: string;
  description: string;
  workspace_id: string;
}

export interface ISubprocess {
  id: string;
  name: string;
  description: string;
}

export interface IProcess extends ISubprocess {
  subprocesses: ISubprocess[];
}

export interface IPhase {
  id: string;
  name: string;
  description: string;
  processes: IProcess[];
}
