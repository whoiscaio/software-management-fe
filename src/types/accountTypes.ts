import { ITeam } from './teamTypes';

export interface IAccount {
  id: string,
  username: string,
  teams: ITeam[];
}

export interface ITokenResponse {
  token: string;
}
