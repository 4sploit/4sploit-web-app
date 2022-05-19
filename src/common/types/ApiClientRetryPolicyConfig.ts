export interface ApiClientRetryPolicyConfig {
  retries: number;
  retryDelay?: (retryCount: number) => number;
}
