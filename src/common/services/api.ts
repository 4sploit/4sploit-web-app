import axios from "axios";
import {
  ApiClientRequestConfig,
  ApiClientRetryPolicyConfig,
} from "common/types";
import { env } from "config";
import axiosRetry from "axios-retry";

const defaultApiClientRequestConfig: ApiClientRequestConfig = {
  baseUrl: env.apiBaseUrl || "",
  headers: {
    "Content-type": "application/json",
  },
};

const defaultApiClienRetryPolicyConfig: ApiClientRetryPolicyConfig = {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
};

const createApiClient = (
  apiClientRequestConfig: Partial<ApiClientRequestConfig>,
  apiClienRetryPolicyConfig?: Partial<ApiClientRetryPolicyConfig>
) => {
  const config = {
    ...defaultApiClientRequestConfig,
    ...apiClientRequestConfig,
  };

  const retryPolicyConfig = {
    ...defaultApiClienRetryPolicyConfig,
    ...apiClienRetryPolicyConfig,
  };

  const axiosInstance = axios.create({
    ...config,
  });

  axiosRetry(axiosInstance, retryPolicyConfig);

  return axiosInstance;
};

export default createApiClient;
