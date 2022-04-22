import ReactDOM from "react-dom/client";
import NotFoundPage from "./NotFoundPage";

describe("<NotFoundPage />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<NotFoundPage />);
  });
});
