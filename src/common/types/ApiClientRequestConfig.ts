type Headers = Record<string, string | number | boolean>;

interface ApiClientRequestConfig {
  baseUrl: string;
  headers?: Headers;
}

export type { ApiClientRequestConfig };
