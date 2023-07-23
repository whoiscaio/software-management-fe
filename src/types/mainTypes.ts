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
