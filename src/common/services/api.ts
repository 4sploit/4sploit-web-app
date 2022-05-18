import axios from "axios";
import { ApiClientRequestConfig } from "common/types";
import { env } from "config";

const defaultApiClientRequestConfig: ApiClientRequestConfig = {
  baseUrl: env.apiBaseUrl || "",
  headers: {
    "Content-type": "application/json",
  },
};

const constructApiClient = (
  apiClientRequestConfig: Partial<ApiClientRequestConfig>
) => {
  const config = {
    ...defaultApiClientRequestConfig,
    ...apiClientRequestConfig,
  };

  return axios.create({
    ...config,
  });
};

export default constructApiClient;
