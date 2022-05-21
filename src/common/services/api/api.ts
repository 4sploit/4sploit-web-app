import axios, { AxiosInstance } from "axios";
import {
  ApiClientRequestConfig,
  ApiClientRetryPolicyConfig,
  ApiResponse,
} from "common/types";
import axiosRetry from "axios-retry";
import {
  defaultApiClienRetryPolicyConfig,
  defaultApiClientRequestConfig,
} from "common/services/api/config";

const createAxiosClientInstance = (
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

class ApiClient {
  private axiosInstance: AxiosInstance;

  constructor(
    apiClientRequestConfig: Partial<ApiClientRequestConfig>,
    apiClienRetryPolicyConfig?: Partial<ApiClientRetryPolicyConfig>
  ) {
    this.axiosInstance = createAxiosClientInstance(
      apiClientRequestConfig,
      apiClienRetryPolicyConfig
    );
  }

  async get<T>(
    url: string,
    config?: ApiClientRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const { data, status, statusText } = await this.axiosInstance.get<T>(
        url,
        config
      );
      return {
        data,
        status,
        statusMessage: statusText,
        isSuccess: true,
      };
    } catch (error: unknown) {
      console.error(error);
      return {
        error: error,
        isSuccess: false,
      };
    }
  }
}

export default ApiClient;
