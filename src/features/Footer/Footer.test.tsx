import ReactDOM from "react-dom/client";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Footer />);
  });
});
