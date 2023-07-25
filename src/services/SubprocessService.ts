import { AxiosError } from 'axios';
import { HttpClient } from './utils/HttpClient';
import handleEmitError from '../global/utils/handleEmitError';
import { toast } from 'react-toastify';

class SubprocessService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('/subprocesses');
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
