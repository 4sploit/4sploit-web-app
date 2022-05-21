interface ApiResponse<T> {
  data?: T;
  isSuccess: boolean;
  statusMessage?: string;
  status?: number;
  error?: unknown;
}

export default ApiResponse;
