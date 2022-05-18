export type Headers = Record<string, string | number | boolean>;

export interface ApiClientRequestConfig {
  baseUrl: string;
  headers: Headers;
}
