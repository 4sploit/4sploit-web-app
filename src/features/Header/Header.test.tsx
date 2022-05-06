import ReactDOM from "react-dom/client";
import Header from "./Header";

describe("<Header />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Header />);
  });
});
