import { EnvConfig } from "./environment-model";

const {
  REACT_APP_NODE_ENV,
  REACT_APP_IS_UNDER_CONSTRUCTION,
  REACT_APP_TITLE,
} = process.env;

const env: EnvConfig = {
  environment: REACT_APP_NODE_ENV,
  isUnderConstruction: REACT_APP_IS_UNDER_CONSTRUCTION == "true",
  title: REACT_APP_TITLE,
};

export default env;
