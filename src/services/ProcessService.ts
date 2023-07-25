import { AxiosError } from 'axios';
import { HttpClient } from './utils/HttpClient';
import handleEmitError from '../global/utils/handleEmitError';
import { toast } from 'react-toastify';
import { ProcessDTO } from '../global/types/mainTypes';

class ProcessService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('/processes');
  }

  async create(processDTO: ProcessDTO, token: string) {
    const response = await this.httpClient.post('', processDTO, token);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    return;
  }

  async update(id: string, processDTO: ProcessDTO, token: string) {
    const response = await this.httpClient.put(id, processDTO, token);

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

    toast('Processo deletado com sucesso.');

    return;
  }
}

export default new ProcessService();
