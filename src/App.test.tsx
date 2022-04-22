import ReactDOM from "react-dom/client";
import App from "./App";

describe("<App />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<App />);
  });
});
