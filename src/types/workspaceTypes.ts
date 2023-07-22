import { ISimpleTeam } from './teamTypes';

export interface ISimpleWorkspace {
  id: string;
  name: string;
  description: string;
}

export interface IWorkspace extends ISimpleWorkspace {
  team: ISimpleTeam;
}
