import { AxiosError, AxiosResponse } from 'axios';
import handleEmitError from '../global/utils/handleEmitError';
import { HttpClient } from './utils/HttpClient';
import { ITeam } from '../types/teamTypes';

class TeamService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('/teams');
  }

  async getTeamInfo(teamId: string, token: string) {
    if (!token) return;

    const response = await this.httpClient.get(`/${teamId}`, token);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    return response as AxiosResponse<ITeam>;
  }
}

export default new TeamService();
