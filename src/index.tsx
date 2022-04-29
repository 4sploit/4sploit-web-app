import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
