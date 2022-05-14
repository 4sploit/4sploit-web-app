import { EnvConfig } from "./environment-model";

const {
  REACT_APP_NODE_ENV,
  REACT_APP_IS_UNDER_CONSTRUCTION,
  REACT_APP_TITLE,
  REACT_APP_OWNER_NAME,
  REACT_APP_ASSETS_PATH,
  REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
} = process.env;

const env: Partial<EnvConfig> = {
  environment: REACT_APP_NODE_ENV,
  isUnderConstruction: REACT_APP_IS_UNDER_CONSTRUCTION == "true",
  title: REACT_APP_TITLE,
  ownerName: REACT_APP_OWNER_NAME,
  assetsPath: REACT_APP_ASSETS_PATH,
  googleAnalyticsTrackingId: REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID,
};

export default env;
