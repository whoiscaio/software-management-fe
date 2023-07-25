import axios, { AxiosError } from 'axios';
import { IApiError } from '../../types/apiError';

export class HttpClient {
  private baseURL: string;

  constructor(prefix: string) {
    this.baseURL = `${import.meta.env.VITE_API_URL}${prefix}`;
  }

  async get(uri: string, token: string) {
    try {
      const response = await axios(`${this.baseURL}${uri}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response;
    } catch (error) {
      return error as AxiosError<IApiError>;
    }
  }

  async post(uri: string, body: any, token?: string) {
    try {
      const response = await axios.post(`${this.baseURL}${uri}`, body, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        }
      });

      return response;
    } catch (error) {
      return error as AxiosError<IApiError>;
    }
  }

  async put(id: string, body: any, token?: string) {
    try {
      const response = await axios.put(`${this.baseURL}/${id}`, body, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        }
      });

      return response;
    } catch (error) {
      return error as AxiosError<IApiError>;
    }
  }

  async delete(id: string, token?: string) {
    try {
      await axios.delete(`${this.baseURL}/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined
        }
      });
    } catch (error) {
      return error as AxiosError<IApiError>;
    }
  }
}
