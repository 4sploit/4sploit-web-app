import ReactDOM from "react-dom/client";
import Markdown from "./Markdown";

describe("<Markdown />", () => {
  it("should render without crashing", () => {
    const rootElement = document.createElement("div");
    const root = ReactDOM.createRoot(rootElement);
    root.render(<Markdown content="some text" />);
  });
});
