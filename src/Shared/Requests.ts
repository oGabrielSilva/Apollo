import axios from 'axios';

class Requests {
  private readonly base = 'https://test-apollo-api.herokuapp.com';

  private url: string;

  private api = axios;

  constructor(url: string) {
    this.url = `${this.base}${url}`;
  }

  public getUrl(): string {
    return this.url;
  }

  public setUrl(value: string): void {
    this.url = value;
  }

  public getBase(): string {
    return this.base;
  }

  public getApi() {
    return this.api;
  }
}

export default Requests;
