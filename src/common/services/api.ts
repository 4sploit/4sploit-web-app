import axios from "axios";
import { ApiClientRequestConfig } from "common/types";
import { env } from "config";

const defaultRequestConfig: ApiClientRequestConfig = {
  baseUrl: env.apiBaseUrl || "",
  headers: {
    "Content-type": "application/json",
  },
};

const constructApiClient = (
  requestConfig: Partial<ApiClientRequestConfig>
) => {
  const config = { ...defaultRequestConfig, ...requestConfig };

  return axios.create({
    baseURL: config.baseUrl,
    headers: config.headers,
  });
};

export default constructApiClient;
