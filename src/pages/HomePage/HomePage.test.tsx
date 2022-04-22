import ReactDOM from "react-dom/client";
import HomePage from "./HomePage";

describe("<HomePage />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<HomePage />);
  });
});
