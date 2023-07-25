import { AxiosError } from 'axios';
import { HttpClient } from './utils/HttpClient';
import handleEmitError from '../global/utils/handleEmitError';
import { toast } from 'react-toastify';

class PhaseService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('/phases');
  }

  async delete(id: string, token: string) {
    const response = await this.httpClient.delete(id, token);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    toast('Fase deletada com sucesso.');

    return;
  }
}

export default new PhaseService;
