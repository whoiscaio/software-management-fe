import axios, { AxiosError } from 'axios';
import { IApiError } from '../../types/apiError';

export class HttpClient {
  private baseURL: string;

  constructor(prefix: string) {
    this.baseURL = `${import.meta.env.VITE_API_URL}${prefix}`;
  }

  async get(uri: string) {
    try {
      const response = await axios(`${this.baseURL}${uri}`);

      return response;
    } catch (error) {
      return error as AxiosError<IApiError>;
    }
  }

  async post(uri: string, body: any) {
    try {
      const response = await axios.post(`${this.baseURL}${uri}`, body);

      return response;
    } catch (error) {
      return error as AxiosError<IApiError>;
    }
  }
}
