import { AxiosError } from 'axios';
import AuthDTO from './dtos/AuthDTO';
import { HttpClient } from './utils/HttpClient';
import handleEmitError from '../global/utils/handleEmitError';

class AuthService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('/auth');
  }

  async login(authDTO: AuthDTO) {
    const response = await this.httpClient.post('/login', authDTO);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    return response;
  }

  async signup(authDTO: AuthDTO) {
    const response = await this.httpClient.post('/signup', authDTO);

    if (response instanceof AxiosError) {
      handleEmitError(response.response?.data.message);
      return;
    }

    return response;
  }
}

export default new AuthService();
