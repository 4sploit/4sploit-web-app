import { EnvConfig } from "./environment-model";

const { REACT_APP_NODE_ENV, REACT_APP_IS_UNDER_CONSTRUCTION } =
  process.env;

const env = {
  environment: REACT_APP_NODE_ENV,
  isUnderConstruction: REACT_APP_IS_UNDER_CONSTRUCTION == "true",
} as EnvConfig;

export default env;
