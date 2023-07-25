import { IAccount } from './accountTypes';
import { IWorkspace } from './workspaceTypes';

export interface TeamDTO {
  name: string;
  description: string;
}

export interface ISimpleTeam {
  id: string;
  name: string;
}

export interface ITeam extends ISimpleTeam {
  users: IAccount[];
  workspaces: IWorkspace[];
}
