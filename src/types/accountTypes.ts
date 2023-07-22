import { IUserTeam } from './teamTypes';

export interface IAccount {
  id: string;
  username: string;
  teams: IUserTeam[];
}

export interface ITokenResponse {
  token: string;
}
