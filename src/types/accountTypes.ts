import { ITeam } from './teamTypes';

export interface IAccount {
  id: string,
  username: string,
  teams: ITeam[];
}
