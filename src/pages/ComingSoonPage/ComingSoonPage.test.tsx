import ReactDOM from "react-dom/client";
import ComingSoonPage from "./ComingSoonPage";

describe("<ComingSoonPage />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<ComingSoonPage />);
  });
});
