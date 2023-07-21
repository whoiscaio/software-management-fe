import axios from 'axios';

export class HttpClient {
  private baseURL: string;

  constructor(prefix: string) {
    this.baseURL = `${import.meta.env.VITE_API_URL}${prefix}`;
  }

  async get(uri: string) {
    if (!uri) return;

    const response = await axios(`${this.baseURL}${uri}`);

    return response;
  }

  async post(uri: string, body: any) {
    if (!uri) return;

    const response = await axios.post(`${this.baseURL}${uri}`, body);

    return response;
  }
}
