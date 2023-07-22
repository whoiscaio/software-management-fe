import { AxiosError, AxiosResponse } from 'axios';
import handleEmitError from '../global/utils/handleEmitError';
import { HttpClient } from './utils/HttpClient';
import { IWorkspace } from '../types/workspaceTypes';

class WorkspaceService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('/workspaces');
  }

  async getWorkspace(workspaceId: string, token: string) {
    if (!token) return;

    const response = await this.httpClient.get(`/${workspaceId}`, token);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    return response as AxiosResponse<IWorkspace>;
  }
}

export default new WorkspaceService();
