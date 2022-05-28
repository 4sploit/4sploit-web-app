import { ApiStatus } from "common/constants";

interface ApiState<T> {
  data?: T;
  status: ApiStatus;
  error?: unknown;
}

export default ApiState;
