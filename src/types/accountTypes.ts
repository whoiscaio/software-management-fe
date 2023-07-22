import { ISimpleTeam } from './teamTypes';

export interface IAccount {
  id: string;
  username: string;
  teams: ISimpleTeam[];
}

export interface ITokenResponse {
  token: string;
}
