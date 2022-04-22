import ReactDOM from "react-dom/client";
import BlogPage from "./BlogPage";

describe("<BlogPage />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<BlogPage />);
  });
});
