import { IAccount } from './accountTypes';
import { IWorkspace } from './workspaceTypes';

export interface IUserTeam {
  id: string;
  name: string;
}

export interface ITeam extends IUserTeam {
  users: IAccount[];
  workspaces: IWorkspace[];
}
