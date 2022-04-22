import ReactDOM from "react-dom/client";
import Button from "./Button";

describe("<Button />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Button>some text</Button>);
  });
});
