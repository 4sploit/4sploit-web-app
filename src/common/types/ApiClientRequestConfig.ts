import { ApiHeaders } from "common/constants";

type Headers = Record<ApiHeaders, string | number | boolean>;

interface ApiClientRequestConfig {
  baseUrl: string;
  headers?: Partial<Headers>;
}

export type { ApiClientRequestConfig };
