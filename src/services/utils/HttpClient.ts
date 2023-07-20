export class HttpClient {
  private baseURL: string;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_URL;
  }

  async get(uri: string) {
    if (!uri) return;

    const response = await fetch(`${this.baseURL}${uri}`);

    return response.json();
  }
}
