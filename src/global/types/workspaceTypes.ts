import { IPhase } from './mainTypes';
import { ISimpleTeam } from './teamTypes';

export interface WorkspaceDTO {
  name: string;
  description: string;
  team_id: string;
}

export interface ISimpleWorkspace {
  id: string;
  name: string;
  description: string;
}

export interface IWorkspace extends ISimpleWorkspace {
  team: ISimpleTeam;
  phases: IPhase[];
}
