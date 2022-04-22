import ReactDOM from "react-dom/client";
import ToolsPage from "./ToolsPage";

describe("<ToolsPage />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<ToolsPage />);
  });
});
