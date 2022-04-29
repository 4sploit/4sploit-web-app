import ReactDOM from "react-dom/client";
import PageMetadata from "./PageMetadata";

describe("<PageMetadata />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<PageMetadata />);
  });
});
