import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import ReactGA from "react-ga4";
import { env } from "config";

const initGoogleAnalytics = () => {
  ReactGA.initialize([
    {
      trackingId: env.googleAnalyticsTrackingId ?? "",
    },
  ]);
};

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  initGoogleAnalytics();

  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
