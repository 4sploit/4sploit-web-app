import ReactDOM from "react-dom/client";
import UnderConstructionPage from "./UnderConstructionPage";

describe("<UnderConstructionPage />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<UnderConstructionPage />);
  });
});
