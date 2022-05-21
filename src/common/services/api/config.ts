import axiosRetry from "axios-retry";
import { ApiHeaders } from "common/constants";
import {
  ApiClientRequestConfig,
  ApiClientRetryPolicyConfig,
} from "common/types";
import { env } from "config";

export const defaultApiClientRequestConfig: ApiClientRequestConfig = {
  baseUrl: env.apiBaseUrl || "",
  headers: {
    [ApiHeaders.ContentType]: "application/json",
  },
};

export const defaultApiClienRetryPolicyConfig: ApiClientRetryPolicyConfig =
  {
    retries: 3,
    retryDelay: axiosRetry.exponentialDelay,
  };
