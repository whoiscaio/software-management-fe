import { AxiosResponse } from 'axios';
import AuthDTO from './dtos/AuthDTO';
import { HttpClient } from './utils/HttpClient';
import { ITokenResponse } from '../types/accountTypes';

class AuthService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('/auth');
  }

  async login(authDTO: AuthDTO) {
    const response = await this.httpClient.post('/login', authDTO) as AxiosResponse<ITokenResponse>;

    return response;
  }

  async signup(authDTO: AuthDTO) {
    const response = await this.httpClient.post('/signup', authDTO);

    return response;
  }
}

export default new AuthService();
