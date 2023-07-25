import { AxiosError } from 'axios';
import { HttpClient } from './utils/HttpClient';
import handleEmitError from '../global/utils/handleEmitError';
import { toast } from 'react-toastify';
import { SubprocessDTO } from '../global/types/mainTypes';

class SubprocessService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('/subprocesses');
  }

  async create(subprocessDTO: SubprocessDTO, token: string) {
    const response = await this.httpClient.post('', subprocessDTO, token);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    return;
  }

  async update(id: string, subprocessDTO: SubprocessDTO, token: string) {
    const response = await this.httpClient.put(id, subprocessDTO, token);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    return;
  }

  async delete(id: string, token: string) {
    const response = await this.httpClient.delete(id, token);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    toast('Subprocesso deletado com sucesso.');

    return;
  }
}

export default new SubprocessService();
