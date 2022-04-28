import ReactDOM from "react-dom/client";
import LoadingPage from "./LoadingPage";

describe("<LoadingPage />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<LoadingPage />);
  });
});
