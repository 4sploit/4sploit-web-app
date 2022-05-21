import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { env } from "config";
import App from "App";

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
